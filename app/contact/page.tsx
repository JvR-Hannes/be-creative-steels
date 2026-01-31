import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const BUSINESS_NAME = "Be Creative Steels";
const CITY = "Pretoria";
const REGION = "Gauteng";
const EMAIL = "barberisgiuan@gmail.com";
const PHONE = "0716133293";

export const metadata: Metadata = {
  title: `Contact ${BUSINESS_NAME} | Steelworks & handyman quotes in ${CITY}`,
  description: `Request a quote for steelworks or local handyman services in ${CITY}. Fast response for custom steel fabrication, welding, repairs and small jobs across the ${REGION}.`,
};

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
    >
      <div>
        <h1
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight text-steel-900 sm:text-4xl"
        >
          Contact us for steelworks & handyman services in {CITY}
        </h1>
        <p className="mt-3 text-sm text-steel-900 sm:text-base">
          Tell us a little about your project and we&apos;ll get back to you
          quickly with sensible options and clear pricing. Perfect for{" "}
          <strong className="font-semibold">
            custom steel fabrication, welding repairs and local handyman jobs
          </strong>{" "}
          across the {REGION}.
        </p>

        <ContactForm />
      </div>

      <aside className="space-y-5 rounded-xl border border-steel-600 bg-steel-50/80 p-5 text-sm text-steel-900 sm:p-6">
        <section aria-labelledby="direct-contact-heading">
          <h2
            id="direct-contact-heading"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900"
          >
            Direct contact
          </h2>
          <p className="mt-2 text-sm text-steel-900">
            Prefer to speak right away? Call, email or use the form and
            we&apos;ll get back to you as soon as we&apos;re off the tools.
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <p>
              <span className="text-steel-400">Phone: </span>
              <a
                href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                className="font-medium text-steel-900 hover:underline"
              >
                {PHONE}
              </a>
            </p>
            <p>
              <span className="text-steel-400">Email: </span>
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-steel-900 hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </section>

        <section aria-labelledby="service-area-heading">
          <h2
            id="service-area-heading"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900"
          >
            Service area
          </h2>
          <p className="mt-2 text-sm text-steel-900">
            Fast local response throughout {CITY}, including:
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-steel-900">
            <li>
              {CITY} CBD, {CITY} North
            </li>
            <li>{CITY} West surrounding estates</li>
            <li>{CITY} East suburbs</li>
            <li>Nearby towns in the {REGION}</li>
          </ul>
        </section>

        <section aria-labelledby="cta-aside-heading">
          <h2
            id="cta-aside-heading"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900"
          >
            Quick links
          </h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-steel-600"
              >
                Back to home – steelworks near me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="underline underline-offset-4 hover:text-steel-600"
              >
                View completed projects
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    </section>
  );
}
