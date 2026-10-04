import { useEffect, useState } from "react"
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu"

type PictureStackProps = {
  images: string[]
}

function PictureStack({ images }: PictureStackProps) {
  const [current, setCurrent] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isFullscreen])

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
    <>
      <div className="flex w-full">
        <div className="flex flex-col">
          <div className="flex h-[16rem] w-full max-w-[30rem] items-center justify-center sm:h-[20rem]">
            <img
              src={images[current]}
              alt={`Screenshot ${current + 1} of ${images.length}`}
              onClick={() => setIsFullscreen(true)}
              className="max-h-full max-w-full cursor-pointer rounded-lg object-contain transition-transform hover:scale-[1.02]"
            />
          </div>

          <div className="flex w-full justify-center gap-[1rem] text-muted">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous screenshot"
              className="cursor-pointer transition-colors hover:text-accent"
            >
              <LuChevronLeft size={22} />
            </button>

            <span className="text-sm">
              {current + 1} / {images.length}
            </span>

            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="cursor-pointer transition-colors hover:text-accent"
            >
              <LuChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black/70 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen view"
            className="absolute bottom-5 right-5 z-30 cursor-pointer text-white transition-colors hover:text-accent"
          >
            <LuX size={28} />
          </button>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous screenshot"
            className="fixed left-0 top-0 z-10 h-full w-1/2 cursor-w-resize"
          />

          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="fixed right-0 top-0 z-10 h-full w-1/2 cursor-e-resize"
          />

          <div className="flex min-h-screen items-center justify-center p-4">
            <img
              src={images[current]}
              alt={`Screenshot ${current + 1} of ${images.length}`}
              className="max-w-[80vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PictureStack
