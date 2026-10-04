import { useEffect, useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

type PictureStackProps = {
  images: string[]
}

function PictureStack({ images }: PictureStackProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setCurrent(0)
  }, [images])

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
      <div className="flex flex-col">
        <div className="flex h-[16rem] w-full max-w-[30rem] items-center justify-center sm:h-[20rem]">
          <img
            src={images[current]}
            alt="screenshot"
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>

        <div className="flex gap-[1rem] text-muted w-full justify-center">
          <LuChevronLeft
            onClick={previous}
            size={22}
            className="cursor-pointer transition-colors hover:text-accent"
          />

          <span className="text-sm text-muted">
            {current + 1} / {images.length}
          </span>

          <LuChevronRight
            onClick={next}
            size={22}
            className="cursor-pointer transition-colors hover:text-accent"
          />
        </div>
      </div>
    </div>
  )
}

export default PictureStack
