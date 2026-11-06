export type ProjectCategory = "Diseño" | "Cerámica" | "Ilustración"

export type PortfolioProject = {
  id: string
  title: string
  category: ProjectCategory
  discipline: string
  year: string
  description: string
  image: string
  imageAlt: string
}

export const projects: PortfolioProject[] = [
  {
    id: "taller-norte",
    title: "Taller Norte",
    category: "Diseño",
    discipline: "Identidad visual",
    year: "2024",
    description:
      "Sistema de marca completo para un taller de diseño industrial en Neuquén.",
    image: "/images/identidad-taller.png",
    imageAlt:
      "Composición editorial de papelería en tonos marfil y azul para una identidad visual.",
  },
  {
    id: "tierra-viva",
    title: "Tierra Viva",
    category: "Cerámica",
    discipline: "Serie cerámica",
    year: "2024",
    description:
      "Vasijas a torno y piezas utilitarias con esmaltes naturales en azul y celeste.",
    image: "/images/serie-ceramica.png",
    imageAlt:
      "Bodegón de referencia con piezas de cerámica artesanal azul sobre una mesa clara.",
  },
  {
    id: "ilustraciones-editoriales",
    title: "Ilustraciones editoriales",
    category: "Ilustración",
    discipline: "Publicación independiente",
    year: "2023",
    description:
      "Serie de ilustraciones para una publicación independiente, trabajada con técnica mixta.",
    image: "/images/ilustracion-botanica.png",
    imageAlt:
      "Ilustración botánica de referencia en tinta azul y acuarela sobre papel marfil.",
  },
  {
    id: "jarron-azul",
    title: "Jarrón · esmalte azul",
    category: "Cerámica",
    discipline: "Pieza a torno",
    year: "2024",
    description:
      "Una pieza de líneas orgánicas donde el esmalte y la luz dejan ver la textura del material.",
    image: "/images/ceramica-azul.png",
    imageAlt:
      "Jarrón y taza de cerámica de referencia con esmalte azul, sobre un pedestal de yeso.",
  },
]

export const projectFilters = ["Todos", "Diseño", "Cerámica", "Ilustración"] as const

export type ProjectFilter = (typeof projectFilters)[number]

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Behance", href: "https://behance.net/" },
  { label: "Are.na", href: "https://are.na/" },
]
