import { Link } from "react-router-dom"
import { House } from "lucide-react"

const about = "ABOUT"
const aboutLetters = about.split("")

const MAGNET_RADIUS = 10
const MAGNET_OFFSET = 15

const Navigation = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const letters = e.currentTarget.querySelectorAll<HTMLElement>("[data-magnetic-letter]")

    const centers = Array.from(letters, (letter) => {
      const rect = letter.getBoundingClientRect()
      return rect.left + rect.width / 2
    })

    letters.forEach((letter, index) => {
      const distance = Math.abs(e.clientX - centers[index])
      const strength = Math.max(0, 1 - distance / MAGNET_RADIUS)

      letter.style.transform = `translateY(${-MAGNET_OFFSET * strength}px)`
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget
      .querySelectorAll<HTMLElement>("[data-magnetic-letter]")
      .forEach((letter) => {
        letter.style.transform = "translateY(0)"
      })
  }

  return (
    <div className="flex justify-center items-center gap-5 mb-15">
      <Link
        to="/about"
        className="text-lg text-accent animate-fade-right"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {aboutLetters.map((letter, index) => (
          <span
            key={index}
            data-magnetic-letter
            className="inline-block transition-transform duration-150"
          >
            {letter}
          </span>
        ))}
      </Link>

      <Link to="/" className="text-accent animate-fade-right">
        <House
          size={20}
          strokeWidth={1.5}
          className="transition-transform hover:-translate-y-1"
        />
      </Link>
    </div>
  )
}

export default Navigation
