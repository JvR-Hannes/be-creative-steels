import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const BUSINESS_NAME = "Be Creative Steels";
const CITY = "Pretoria";
const REGION = "Gauteng";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://be-creative-steels.vercel.app";

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Steelworks near me & local handyman in ${CITY}`,
  description:
    "Local steelworks near you in " +
    `${CITY}. Custom steel fabrication, welding, metal repairs, and reliable handyman services across the ${REGION}. Request a fast, no-obligation quote today.`,
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: BUSINESS_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    "@id": `${SITE_URL}/`,
    url: `${SITE_URL}/`,
    telephone: "+27716133293",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Devereux Place",
      addressLocality: CITY,
      addressRegion: REGION,
      postalCode: "0183",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.7705,
      longitude: 28.2325,
    },
    areaServed: [{ "@type": "AdministrativeArea", name: `${CITY}, ${REGION}` }],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom steel fabrication",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local handyman services",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "37",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "James R.",
        },
        reviewBody:
          "Fast, tidy and reliable. They built a custom steel staircase for our workshop and handled every detail.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        aria-labelledby="home-heading"
        className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start"
      >
        <div>
          <h1
            id="home-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-steel-900 sm:text-4xl md:text-5xl"
          >
            {BUSINESS_NAME} – Reliable steelworks & handyman services in {CITY}
          </h1>
          <p className="mt-4 max-w-xl text-base text-steel-900 sm:text-lg">
            Custom steel fabrication, on-site welding, metal repairs and
            installations, plus trusted local handyman services. We help{" "}
            <strong className="font-semibold text-steel-900">
              homeowners, builders and businesses
            </strong>{" "}
            across {CITY} and the {REGION} keep projects safe, strong and on
            schedule.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-steel-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-steel-50 shadow-[0_4px_14px_rgba(6,50,72,0.5),0_2px_6px_rgba(6,50,72,0.3)] transition-all duration-200 hover:bg-steel-950 hover:shadow-[0_6px_20px_rgba(6,50,72,0.7),0_4px_10px_rgba(6,50,72,0.5)] hover:scale-105"
            >
              Request a Quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-steel-600 px-6 py-3 text-sm font-medium text-steel-900 transition hover:border-steel-600 hover:text-steel-900"
            >
              View Our Work
            </Link>
            <p className="text-xs text-steel-900 sm:ml-3">
              Fast local response for{" "}
              <span className="font-semibold text-steel-900">
                "steelworks near me"
              </span>{" "}
              and{" "}
              <span className="font-semibold text-steel-900">
                "local handyman services"
              </span>
              .
            </p>
          </div>
          <section
            aria-labelledby="services-overview-heading"
            className="mt-10 rounded-xl border border-steel-600 bg-steel-50/60 p-5 shadow-[0_18px_60px_rgba(105,124,133,0.2)] sm:p-6"
          >
            <h2
              id="services-overview-heading"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-steel-900"
            >
              Steelworks & handyman services
            </h2>
            <dl className="mt-4 grid gap-4 text-sm text-steel-900 md:grid-cols-2">
              <div>
                <dt className="font-semibold text-accent-silver">
                  Steel fabrication
                </dt>
                <dd className="mt-1 text-steel-900">
                  Bespoke frames, staircases, platforms, balustrades and
                  structural steel, cut, drilled and assembled for {CITY}-area
                  homes and industrial units.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-accent-silver">Welding</dt>
                <dd className="mt-1 text-steel-900">
                  Mobile MIG/TIG welding for gates, railings, security doors and
                  machinery, with on-site repairs that minimise downtime.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-accent-silver">
                  Repairs & installations
                </dt>
                <dd className="mt-1 text-steel-900">
                  Steel beam installs, metal stair repairs, brackets, safety
                  guards and general metalwork for residential and commercial
                  projects.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-accent-silver">
                  General handyman services
                </dt>
                <dd className="mt-1 text-steel-900">
                  Small repairs, snagging, property maintenance and
                  trade-quality fixes for landlords and homeowners who need a
                  reliable local handyman.
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <aside className="space-y-6 rounded-xl border border-steel-600 bg-steel-50/90 p-5 shadow-[0_18px_60px_rgba(105,124,133,0.2)] sm:p-6">
          <section aria-labelledby="service-areas-heading">
            <h2
              id="service-areas-heading"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-900"
            >
              Service areas
            </h2>
            <p className="mt-2 text-sm text-steel-900">
              Based in {CITY}, we provide{" "}
              <strong className="font-semibold">
                custom steel fabrication and handyman services
              </strong>{" "}
              across:
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-steel-900 sm:text-sm">
              <li>• {CITY} CBD</li>
              <li>• {CITY} North</li>
              <li>• {CITY} East</li>
              <li>• {CITY} West</li>
              <li>• {REGION} surrounding areas</li>
            </ul>
          </section>

          <section aria-labelledby="testimonials-heading">
            <h2
              id="testimonials-heading"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-900"
            >
              Local testimonials
            </h2>
            <ul className="mt-3 space-y-3 text-sm text-steel-900">
              <li className="rounded-lg border border-steel-600 bg-steel-50/80 p-3">
                <p className="text-[13px] text-steel-900">
                  “They handled our{" "}
                  <strong>custom steel fabrication in {CITY}</strong> from
                  design to install. On time, no mess, and the finish looks
                  incredible.”
                </p>
                <p className="mt-2 text-[11px] text-steel-400">
                  — James R., workshop owner
                </p>
              </li>
              <li className="rounded-lg border border-steel-600 bg-steel-50/80 p-3">
                <p className="text-[13px] text-steel-900">
                  “Our go-to{" "}
                  <strong>local handyman service in the {REGION}</strong> for
                  small jobs and urgent repairs. Honest pricing and very tidy
                  work.”
                </p>
                <p className="mt-2 text-[11px] text-steel-400">
                  — Priya K., landlord
                </p>
              </li>
            </ul>
            <p className="mt-3 text-xs text-steel-400">
              Read more{" "}
              <Link
                href="/projects"
                className="underline underline-offset-4 hover:text-accent-silver"
              >
                steelworks projects in {CITY}
              </Link>
              .
            </p>
          </section>
        </aside>
      </section>
    </>
  );
}
