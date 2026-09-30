import { ChevronDown } from "lucide-react"

const ScrollArrow = () => {
  const scrollToNext = () => {
  }

  return (
    <button
      onClick={scrollToNext}
      className="flex flex-col items-center gap-2 text-accent transition-colors hover:text-foreground"
    >
      <span className="text-xs uppercase tracking-[0.25em] opacity-70">
        Explore
      </span>

      <span className="animate-bounce">
        <ChevronDown
          size={20}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
      </span>
    </button>
  )
}

export default ScrollArrow
