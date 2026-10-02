import WorldMap from "../assets/world.svg?react"
import "../styles/worldmap.css"

type WorldmapProps = {
  language: string
}

function Worldmap({ language }: WorldmapProps) {
  const languageClass = `highlight-${language.toLowerCase()}`

  return (
    <div className="w-full mt-20">
      <WorldMap className={`world-map h-auto w-full ${languageClass}`} />
    </div>
  )
}

export default Worldmap
