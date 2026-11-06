"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { label: "Trabajo", href: "#trabajo" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Redes", href: "#redes" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="#inicio"
          className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
          aria-label="Paula Romero, volver al inicio"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-navy font-serif text-sm italic text-paper transition-transform group-hover:rotate-[-8deg]">
            P.
          </span>
          <span className="font-serif text-xl tracking-tight text-navy sm:text-2xl">
            Paula Romero
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-blue-pale focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue md:hidden"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Navegación principal"
          className={cn(
            "absolute inset-x-0 top-full gap-1 border-b border-navy/10 bg-paper px-5 py-4 md:static md:flex md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0",
            menuOpen ? "grid" : "hidden",
          )}
        >
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-sm py-3 text-xs font-medium uppercase tracking-[0.16em] text-navy/75 transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue md:py-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-mono text-[10px] text-blue/80">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
