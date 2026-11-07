import type { Metadata, Viewport } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Paula Romero — Diseño, cerámica e ilustración",
  description:
    "Portfolio de Paula Romero, diseñadora gráfica, ceramista e ilustradora en Neuquén, Patagonia argentina.",
  applicationName: "Paula Romero Portfolio",
  openGraph: {
    title: "Paula Romero — Diseño, cerámica e ilustración",
    description:
      "Una práctica entre el diseño gráfico, la cerámica y la ilustración, desde Neuquén, Patagonia argentina.",
    locale: "es_AR",
    type: "website",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f2eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
