"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  description: string;
};

type ProjectsGalleryProps = {
  projects: Project[];
  city: string;
};

export function ProjectsGallery({ projects, city }: ProjectsGalleryProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <>
      <section
        aria-label="Gallery of completed steelworks and handyman jobs"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActiveId(project.id)}
            className="group flex flex-col overflow-hidden rounded-xl border border-steel-600 bg-steel-50/80 text-left shadow-[0_18px_40px_rgba(105,124,133,0.2)] transition hover:border-steel-600 hover:shadow-[0_22px_55px_rgba(105,124,133,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-600"
          >
            <div className="relative h-40 w-full bg-steel-900">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                priority={project.id === 1}
              />
            </div>
            <div className="flex flex-1 flex-col px-3 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                {project.category}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-steel-900">
                {project.title}
              </h2>
              <p className="mt-1 text-xs text-steel-900">{project.location}</p>
            </div>
          </button>
        ))}
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-40 bg-steel-900/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${activeProject.title}`}
          onClick={() => setActiveId(null)}
        >
          <div
            className="mx-auto flex max-w-2xl flex-col overflow-hidden rounded-2xl border border-steel-600 bg-steel-50/95 shadow-[0_24px_70px_rgba(105,124,133,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 w-full bg-steel-900 sm:h-72">
              <Image
                src={activeProject.image}
                alt={activeProject.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="space-y-2 px-5 py-4 text-sm text-steel-900 sm:px-6 sm:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-900">
                {activeProject.category}
              </p>
              <h2 className="text-lg font-semibold text-steel-900">
                {activeProject.title}
              </h2>
              <p className="text-xs text-steel-900">
                {activeProject.location}
              </p>
              <p className="mt-1 text-sm text-steel-900">
                {activeProject.description}
              </p>
              <p className="mt-2 text-xs text-steel-900">
                Looking for similar{" "}
                <strong className="font-semibold">
                  custom steel fabrication in {city}
                </strong>
                ?{" "}
                <span>
                  Visit the contact page to{" "}
                  <a
                    href="/contact"
                    className="underline underline-offset-4 hover:text-steel-600"
                  >
                    request a quote
                  </a>
                  .
                </span>
              </p>
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="rounded-full border border-steel-600 px-4 py-1.5 text-xs font-medium text-steel-900 hover:border-steel-600 hover:text-steel-900"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
