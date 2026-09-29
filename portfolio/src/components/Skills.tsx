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
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C++", icon: SiCplusplus },
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
  return (
    <section className="mt-15 w-[95%] sm:max-w-[50rem]">
      <h1 className="w-full text-center text-lg font-medium text-red-400">
        Technologies I've Worked With
      </h1>

      <div className="relative mt-8 overflow-hidden border-y border-border py-8">
        <div className="flex w-max animate-marquee">
          {[...skills, ...skills].map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="group relative mx-6 flex items-center"
            >
              <Icon
                size={28}
                className="text-blue-400 transition-transform duration-200 group-hover:scale-125"
              />

              <span
                className="
                  pointer-events-none absolute top-full left-1/2 mt-2
                  -translate-x-1/2 whitespace-nowrap
                  text-sm text-muted
                  opacity-0 transition-opacity duration-200
                  group-hover:opacity-100
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
