import { useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

type PhotoStackProps = {
  images: string[]
}

function PhotoStack({ images }: PhotoStackProps) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) {
    return null
  }

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center gap-[1rem]">
        <img
          key={current}
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="h-auto w-[30rem] rounded-lg"
        />

        <div className="flex cursor-pointer gap-[1rem] text-muted">
          <LuChevronLeft
            onClick={previous}
            size={22}
            className="transition-colors hover:text-accent"
          />

          <span className="text-sm text-muted">
            {current + 1} / {images.length}
          </span>

          <LuChevronRight
            onClick={next}
            size={22}
            className="transition-colors hover:text-accent"
          />
        </div>
      </div>
    </div>
  )
}

export default PhotoStack
