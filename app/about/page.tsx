import type { Metadata } from "next";
import Link from "next/link";

const BUSINESS_NAME = "Be Creative Steels";
const CITY = "Pretoria";
const REGION = "Gauteng";

export const metadata: Metadata = {
  title: `About ${BUSINESS_NAME} | Local steelworks & handyman in ${CITY}`,
  description: `${BUSINESS_NAME} is a local steelworks and handyman business based in ${CITY}, providing custom steel fabrication, welding and property maintenance across the ${REGION}. Learn about our experience, values and service areas.`,
};

export default function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto max-w-4xl space-y-8"
    >
      <header>
        <h1
          id="about-heading"
          className="text-3xl font-semibold tracking-tight text-steel-900 sm:text-4xl"
        >
          About {BUSINESS_NAME}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-steel-900 sm:text-base">
          We are a small, specialist team providing{" "}
          <strong className="font-semibold">
            custom steel fabrication, welding and local handyman services
          </strong>{" "}
          for homeowners, builders and businesses across {CITY} and the {REGION}
          .
        </p>
      </header>

      <section aria-labelledby="experience-heading" className="space-y-3">
        <h2
          id="experience-heading"
          className="text-lg font-semibold text-steel-900 sm:text-xl"
        >
          Years of experience in local steelworks
        </h2>
        <p className="text-sm text-steel-900 sm:text-base">
          With over{" "}
          <strong className="font-semibold">15 years on the tools</strong>, we
          have worked on everything from small residential gates to full
          structural steel installs for commercial units. We understand local
          building standards, how other trades work, and how to keep projects on
          time without compromising safety.
        </p>
        <p className="text-sm text-steel-900 sm:text-base">
          Because we are based in {CITY}, we know the{" "}
          <strong className="font-semibold">
            local industrial estates, housing developments and rural sites
          </strong>{" "}
          across the {REGION}. That means realistic travel times, honest
          scheduling, and a genuine focus on long-term relationships rather than
          quick jobs.
        </p>
      </section>

      <section aria-labelledby="values-heading" className="space-y-3">
        <h2
          id="values-heading"
          className="text-lg font-semibold text-steel-900 sm:text-xl"
        >
          Built on trust, reliability and quality workmanship
        </h2>
        <p className="text-sm text-steel-900 sm:text-base">
          Every piece of steel we cut, every weld we run and every{" "}
          <strong className="font-semibold">handyman repair</strong> we carry
          out is treated as if it were for our own workshop. We pride ourselves
          on clean, accurate work and clear communication.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-steel-900 sm:text-base">
          <li>Transparent pricing and written quotes</li>
          <li>Turn up when we say we will, and keep you updated</li>
          <li>Respect for your home, site and neighbours</li>
          <li>
            Photographs of{" "}
            <Link
              href="/projects"
              className="underline underline-offset-4 hover:text-accent-silver"
            >
              completed steelworks projects in {CITY}
            </Link>
          </li>
        </ul>
      </section>

      <section aria-labelledby="areas-heading" className="space-y-3">
        <h2
          id="areas-heading"
          className="text-lg font-semibold text-steel-900 sm:text-xl"
        >
          Local to {CITY}, serving the wider {REGION}
        </h2>
        <p className="text-sm text-steel-900 sm:text-base">
          We’re proud to be a{" "}
          <strong className="font-semibold">
            local, owner-operated business
          </strong>{" "}
          rather than a distant franchise. Most of our work comes from{" "}
          <strong className="font-semibold">
            referrals and repeat customers
          </strong>{" "}
          throughout:
        </p>
        <div className="grid gap-2 text-sm text-steel-900 sm:grid-cols-2 sm:text-base">
          <ul className="list-disc pl-5">
            <li>{CITY} CBD</li>
            <li>{CITY} North</li>
            <li>{CITY} West</li>
          </ul>
          <ul className="list-disc pl-5">
            <li>{CITY} East suburbs</li>
            <li>Business parks across {REGION}</li>
            <li>Surrounding areas and rural properties</li>
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="mt-4 rounded-xl border border-steel-600 bg-steel-50/70 p-5 sm:p-6"
      >
        <h2
          id="cta-heading"
          className="text-base font-semibold text-steel-900 sm:text-lg"
        >
          Ready to discuss a project in {CITY}?
        </h2>
        <p className="mt-2 text-sm text-steel-900 sm:text-base">
          Whether you need{" "}
          <strong className="font-semibold">
            custom steel fabrication, welding repairs or a reliable handyman
          </strong>
          , we’d be happy to provide a clear, no-obligation quote.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-steel-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-steel-50 hover:bg-steel-600 hover:text-steel-50"
          >
            Contact us
          </Link>
          <Link
            href="/projects"
            className="text-xs font-medium text-steel-900 underline underline-offset-4 hover:text-steel-600"
          >
            View previous completed jobs
          </Link>
        </div>
      </section>
    </section>
  );
}
