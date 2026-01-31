"use client";

import { useState } from "react";
import { z } from "zod";

const EMAIL = "barberisgiuan@gmail.com";
const CITY = "Pretoria";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  city: z.string(),
  website: z.string().optional(),
});

type FallbackData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function gmailUrl(data: FallbackData) {
  const subject = encodeURIComponent(
    `Quote request from ${data.name} – ${CITY}`,
  );

  const body = encodeURIComponent(
    `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}

Job details:
${data.message}`,
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&subject=${subject}&body=${body}`;
}

function outlookUrl(data: FallbackData) {
  const subject = encodeURIComponent(
    `Quote request from ${data.name} – ${CITY}`,
  );

  const body = encodeURIComponent(
    `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}

Job details:
${data.message}`,
  );

  return `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}&subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "fallback"
  >("idle");

  const [fallbackData, setFallbackData] = useState<FallbackData | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form));

    const parsed = ContactSchema.safeParse({
      ...raw,
      city: CITY,
    });

    if (!parsed.success) {
      setStatus("idle");
      return;
    }

    if (parsed.data.website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setFallbackData({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || "",
        message: parsed.data.message,
      });
      setStatus("fallback");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-4 rounded-xl border border-steel-600 bg-steel-50/70 p-5 sm:p-6"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
          Name
        </label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md border border-steel-600 bg-steel-50 px-3 py-2 text-sm text-steel-900 shadow-inner shadow-steel-600/20 outline-none focus:ring-1 focus:ring-steel-600"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-steel-600 bg-steel-50 px-3 py-2 text-sm text-steel-900 shadow-inner shadow-steel-600/20 outline-none focus:ring-1 focus:ring-steel-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
            Phone (optional)
          </label>
          <input
            name="phone"
            className="mt-1 w-full rounded-md border border-steel-600 bg-steel-50 px-3 py-2 text-sm text-steel-900 shadow-inner shadow-steel-600/20 outline-none focus:ring-1 focus:ring-steel-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
          How can we help?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          placeholder={`Tell us about the steelwork or handyman job, location in ${CITY}, and any deadlines.`}
          className="mt-1 w-full rounded-md border border-steel-600 bg-steel-50 px-3 py-2 text-sm text-steel-900 shadow-inner shadow-steel-600/20 outline-none focus:ring-1 focus:ring-steel-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-steel-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-steel-50 shadow transition hover:scale-105 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-green-700 text-sm">
          Thank you. Your message has been sent.
        </p>
      )}

      {status === "fallback" && fallbackData && (
        <div className="rounded-md border border-yellow-400 bg-yellow-50 p-4">
          <p className="text-sm text-yellow-900">
            We couldn’t send your message automatically. Please use one of the
            options below:
          </p>

          <div className="mt-3 flex gap-3">
            <a
              href={gmailUrl(fallbackData)}
              target="_blank"
              className="rounded-md bg-red-600 px-4 py-2 text-white text-sm"
            >
              Send via Gmail
            </a>

            <a
              href={outlookUrl(fallbackData)}
              target="_blank"
              className="rounded-md bg-blue-600 px-4 py-2 text-white text-sm"
            >
              Send via Outlook
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
