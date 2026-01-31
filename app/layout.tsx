import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const BUSINESS_NAME = "Be Creative Steels";
const CITY = "Pretoria";
const REGION = "Gauteng";
const PHONE = "0716133293";
const EMAIL = "barberisgiuan@gmail.com";

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Reliable Steelworks & Local Handyman in ${CITY}`,
  description:
    "Be Creative Steels provides custom steel fabrication, welding, repairs, and reliable local handyman services in " +
    `${CITY} and the surrounding ${REGION}. Call today for fast, professional help on residential and commercial projects.`,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://be-creative-steels.vercel.app",
  ),
  openGraph: {
    title: `${BUSINESS_NAME} | Steelworks & Handyman in ${CITY}`,
    description:
      "Custom steel fabrication, welding, metal repairs, and local handyman services for homes and businesses in " +
      `${CITY}. View our recent projects and request a quote online.`,
    type: "website",
    locale: "en_ZA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#F0E9D9", color: "#063248" }}>
      <body
        className={`${roboto.variable} antialiased font-sans`}
        style={{ backgroundColor: "#F0E9D9", color: "#063248" }}
      >
        <div
          className="flex min-h-screen flex-col"
          style={{
            background: "#F0E9D9",
            minHeight: "100vh",
          }}
        >
          <Header />

          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 md:px-6 md:py-10">
            {children}
          </main>

          <footer className="mt-8 border-t border-steel-600 bg-steel-50/90 py-8 text-steel-900">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm md:flex-row md:items-start md:justify-between md:px-6">
              <div className="max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                  {BUSINESS_NAME}
                </p>
                <p className="mt-2 text-sm text-steel-900">
                  Custom steel fabrication, welding, repairs, and local handyman
                  services for homes, shops, and commercial premises across{" "}
                  {CITY} and the wider {REGION}.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                  Contact
                </p>
                <p className="mt-2">
                  <span className="text-steel-900">Phone: </span>
                  <a
                    href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                    className="hover:text-accent-silver"
                  >
                    {PHONE}
                  </a>
                </p>
                <p>
                  <span className="text-steel-900">Email: </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-accent-silver"
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                  Service Area
                </p>
                <p className="mt-2 max-w-xs text-sm text-steel-900">
                  Serving {CITY} CBD, {CITY} North, {CITY} East,
                  {CITY} West, and the surrounding {REGION}. Steelworks near you
                  with fast local response.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                  Follow
                </p>
                <div className="mt-2 flex gap-3 text-sm text-steel-900">
                  <span className="cursor-default rounded-full border border-steel-600 px-3 py-1 text-xs text-steel-900/80">
                    Facebook
                  </span>
                  <span className="cursor-default rounded-full border border-steel-600 px-3 py-1 text-xs text-steel-900/80">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-1 text-center text-[11px] text-steel-900">
              <p>
                © {new Date().getFullYear()} {BUSINESS_NAME}. Steelworks & local
                handyman services in {CITY}, {REGION}.
              </p>
              <p className="text-steel-600/70">
                Website developed by{" "}
                <span className="font-medium">Hannes Jansen van Rensburg</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
