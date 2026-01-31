import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/ProjectsGallery";

const CITY = "Pretoria";

export const metadata: Metadata = {
  title: `Steelworks projects in ${CITY} | Previous fabrication & welding jobs`,
  description: `Browse recent steelworks projects in ${CITY}, including custom steel fabrication, welding, gates, railings and structural work. See examples before you request a quote.`,
};

const PROJECTS = [
  {
    id: 1,
    title: "Workshop mezzanine and staircase",
    location: `${CITY} East Industrial Estate`,
    category: "Custom steel fabrication",
    image: "/projects/mezzanine.svg",
    alt: `Steel mezzanine floor and staircase installed in a light industrial workshop in ${CITY}`,
    description:
      "Fabricated and installed a steel mezzanine platform with access staircase to increase storage space for a growing workshop.",
  },
  {
    id: 2,
    title: "Security gate and railings",
    location: `Riverside, ${CITY}`,
    category: "Welding & repairs",
    image: "/projects/railings.svg",
    alt: `Black powder-coated steel security gate and railings at a riverside property in ${CITY}`,
    description:
      "Designed, welded and fitted a secure steel gate and matching railings to protect a riverside home without blocking the view.",
  },
  {
    id: 3,
    title: "Structural steel beams",
    location: `North ${CITY}`,
    category: "Structural steel",
    image: "/projects/beams.svg",
    alt: `Exposed steel beams installed during a home extension project in North ${CITY}`,
    description:
      "Supplied and installed RSJ beams for a kitchen extension, including coordination with local building control.",
  },
  {
    id: 4,
    title: "Handyman property refresh",
    location: `West Hills, ${CITY}`,
    category: "Local handyman services",
    image: "/projects/handyman.svg",
    alt: `Selection of handyman tools laid out for property maintenance work in West Hills, ${CITY}`,
    description:
      "Carried out a mix of minor repairs, new shelving, gate fixes and safety checks for a landlord between tenancies.",
  },
];

export default function ProjectsPage() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="space-y-6 md:space-y-8"
    >
      <header className="max-w-3xl">
        <h1
          id="projects-heading"
          className="text-3xl font-semibold tracking-tight text-steel-900 sm:text-4xl"
        >
          Previous steelworks projects in {CITY}
        </h1>
        <p className="mt-3 text-sm text-steel-900 sm:text-base">
          A sample of the{" "}
          <strong className="font-semibold">
            steel fabrication, welding and local handyman work
          </strong>{" "}
          we have recently completed across the city. Click a project to view it
          in more detail.
        </p>
      </header>

      <ProjectsGallery projects={PROJECTS} city={CITY} />
    </section>
  );
}

