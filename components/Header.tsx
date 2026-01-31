"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BUSINESS_NAME = "Be Creative Steels";
const CITY = "Pretoria";
const PHONE = "0716133293";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="border-b bg-steel-50/80 backdrop-blur"
      style={{ borderColor: "#697c85" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={`${BUSINESS_NAME} home`}
        >
          <Image
            src="/logo.jpeg"
            alt={`${BUSINESS_NAME} logo`}
            width={120}
            height={36}
            className="w-32 sm:w-40 md:w-48 h-auto"
            priority
          />
          {/* <div className="h-9 w-9 rounded-sm bg-gradient-to-br from-steel-50 to-steel-900 shadow-md" /> */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-steel-900">
              Be Creative Steels
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-steel-900">
              Steelworks & Handyman · {CITY}
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-steel-900 md:flex">
          <Link href="/" className="transition-colors hover:text-steel-600">
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-steel-600"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-steel-600"
          >
            Previous Jobs
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-steel-600"
          >
            Contact
          </Link>
          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="rounded-full border border-steel-600 px-3 py-1 text-xs uppercase tracking-[0.18em] text-steel-900 transition-colors hover:bg-steel-600 hover:text-steel-50"
          >
            Call for a Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-steel-600 p-2 text-steel-900 hover:border-steel-600 hover:text-steel-900 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-4 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile nav sheet */}
      {open && (
        <nav className="border-t border-steel-600 bg-steel-50/95 py-3 text-sm text-steel-900 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4">
            <Link
              href="/"
              className="rounded-md px-2 py-2 hover:bg-steel-200"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-2 py-2 hover:bg-steel-200"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-2 py-2 hover:bg-steel-200"
              onClick={() => setOpen(false)}
            >
              Previous Jobs
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-2 py-2 hover:bg-steel-200"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="mt-1 rounded-md border border-steel-600 px-2 py-2 text-xs uppercase tracking-[0.18em] text-steel-900 hover:bg-steel-600 hover:text-steel-50"
              onClick={() => setOpen(false)}
            >
              Call for a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
