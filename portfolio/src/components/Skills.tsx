import { useEffect, useRef, useState } from "react"
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si"

const skills = [
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
]

function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const lastTime = useRef(0)

  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const speed = 40

    const animate = (time: number) => {
      const container = containerRef.current

      if (container && !isDragging.current) {
        const delta = time - lastTime.current

        container.scrollLeft += (speed * delta) / 1000

        const loopWidth = container.scrollWidth / 2

        if (container.scrollLeft >= loopWidth) {
          container.scrollLeft -= loopWidth
        }
      }

      lastTime.current = time
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const loopScroll = () => {
    const container = containerRef.current

    if (!container) return

    const loopWidth = container.scrollWidth / 2

    if (container.scrollLeft >= loopWidth) {
      container.scrollLeft -= loopWidth
    }

    if (container.scrollLeft <= 0) {
      container.scrollLeft += loopWidth
    }
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current

    if (!container) return

    isDragging.current = true
    setDragging(true)

    startX.current = event.clientX
    startScrollLeft.current = container.scrollLeft

    container.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current

    if (!container || !isDragging.current) return

    const distance = event.clientX - startX.current

    container.scrollLeft = startScrollLeft.current - distance

    loopScroll()

    startScrollLeft.current = container.scrollLeft
    startX.current = event.clientX
  }

  const handlePointerUp = () => {
    isDragging.current = false
    setDragging(false)
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current

    if (!container) return

    event.preventDefault()

    container.scrollLeft += event.deltaY || event.deltaX

    loopScroll()
  }

  return (
    <section className="mt-6 w-full animate-fade-right">
      <h1 className="w-full text-center text-red-300 text-lg">
        Technologies I've Worked With
      </h1>

      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className={`
          relative mt-5 overflow-hidden
          border-y border-border py-8
          select-none touch-pan-y
          ${dragging ? "cursor-grabbing" : "cursor-grab"}
        `}
      >
        <div className="flex w-max">
          {[...skills, ...skills].map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="group relative mx-6 flex flex-col items-center"
            >
              <Icon
                size={28}
                className="text-blue-400 hover:text-blue-600 transition-transform duration-200 group-hover:scale-135"
              />

              <span
                className="
                  pointer-events-none whitespace-nowrap mt-1
                  text-sm text-muted font-bold opacity-100
                "
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
