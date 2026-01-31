import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  city: z.string(),
  website: z.string().optional(), // honeypot
});

const rateLimit = new Map<string, { count: number; time: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.time > 60_000) {
    rateLimit.set(ip, { count: 1, time: now });
    return false;
  }

  if (entry.count >= 5) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  let json;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot: silently succeed
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: parsed.data.email,
    subject: `Quote request from ${parsed.data.name} – ${parsed.data.city}`,
    text: `
Name: ${parsed.data.name}
Email: ${parsed.data.email}
Phone: ${parsed.data.phone ?? "N/A"}

${parsed.data.message}
    `.trim(),
  });

  return NextResponse.json({ success: true });
}
