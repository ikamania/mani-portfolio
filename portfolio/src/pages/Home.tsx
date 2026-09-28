import { useRef } from "react"
import { Link } from "react-router-dom"

import { House } from "lucide-react"

const name = "Irakli Mania"
const about = "ABOUT"

function Home() {
  const aboutRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const element = aboutRef.current
    if (!element) return

    const letters = element.querySelectorAll<HTMLSpanElement>("span")
    const mouseX = e.clientX

    letters.forEach((letter) => {
      const letterRect = letter.getBoundingClientRect()
      const letterX = letterRect.left + letterRect.width / 2

      const distance = Math.abs(mouseX - letterX)
      const maxDistance = 10
      const strength = Math.max(0, 1 - distance / maxDistance)

      letter.style.transform = `translateY(${-15 * strength}px)`
    })
  }

  const handleMouseLeave = () => {
    const letters = aboutRef.current?.querySelectorAll<HTMLSpanElement>(
      "span",
    )

    letters?.forEach((letter) => {
      letter.style.transform = "translateY(0)"
    })
  }

  return (
    <main className="bg-background w-screen h-screen p-10 font-grotesk">
      <section className="flex justify-between">
        <div>
          <h1
            className="
              relative
              text-5xl font-thin
              text-background
              [-webkit-text-stroke:1px_var(--accent)]
            "
          >
            <span>{name}</span>

            <span
              aria-hidden="true"
              className="
                animate-fill-name
                absolute inset-0
                text-accent
              "
            >
              {name}
            </span>
          </h1>

          <p className="mt-3 max-w-md text-base text-muted animate-fade-left cursor-help">
            Backend-focused developer building web applications with Python,
            and modern frontend technologies.
          </p>
        </div>

        <div className="flex gap-5 items-center h-fit">
          <Link
            ref={aboutRef}
            to="/about"
            className="text-lg text-accent animate-fade-right"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {about.split("").map((letter, index) => (
              <span
                key={letter + index}
                className="inline-block transition-transform duration-150"
              >
                {letter}
              </span>
            ))}
          </Link>
          <Link
            to="/"
            className="group text-accent animate-fade-right"
          >
            <House
              size={20}
              strokeWidth={1.5}
              className="
                transition-transform duration-500 ease-out
                group-hover:rotate-180
              "
            />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
