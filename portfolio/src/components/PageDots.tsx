import { useEffect, useState } from "react"

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "Projects" },
]

const PageDots = () => {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        threshold: 0.5,
      }
    )

    sections.forEach(({ id }) => {
      const section = document.getElementById(id)

      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav
      aria-label="Page navigation"
      className="
        fixed right-5 top-1/2
        -translate-y-1/2
        flex flex-col gap-3
      "
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            className="flex items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-2 w-2 bg-accent"
                  : "h-1 w-1 bg-text"
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}

export default PageDots
