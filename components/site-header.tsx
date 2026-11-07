"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Trabajo", href: "#trabajo" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Redes", href: "#redes" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          aria-label="Paula Romero, volver al inicio"
          className="font-faith text-2xl text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Paula Romero
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-white md:hidden"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={21} />
          ) : (
            <Menu aria-hidden="true" size={21} />
          )}
        </button>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          aria-label="Navegación principal"
          className={cn(
            "absolute inset-x-0 top-full flex-col border-b border-white/10 bg-navy px-5 py-5 sm:px-8 md:static md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 lg:gap-12",
            menuOpen ? "flex" : "hidden md:flex",
          )}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="relative py-3 text-[11px] font-space-mono uppercase tracking-[0.18em] text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
