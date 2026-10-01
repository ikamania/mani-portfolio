import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark(!dark)}
      className="z-50 fixed top-5 right-5 text-accent animate-fade-right cursor-pointer"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Moon
          size={21}
          strokeWidth={1.5}
          className="transition-transform hover:scale-130"
        />
      ) : (
        <Sun
          size={21}
          strokeWidth={1.5}
          className="transition-transform hover:scale-130"
        />
      )}
    </button>
  )
}

export default ThemeToggle
