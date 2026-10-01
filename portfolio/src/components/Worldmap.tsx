import WorldMap from "../assets/world.svg?react"

type WorldmapProps = {
  language: string
}

function Worldmap({ language }: WorldmapProps) {
  const languageClass = `highlight-${language.toLowerCase()}`

  return (
    <div className="max-w-3xl mt-20">
      <WorldMap className={`world-map h-auto w-full ${languageClass}`} />
    </div>
  )
}

export default Worldmap
