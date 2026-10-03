interface NavigationProps {
  onPrevious: () => void
  onNext: () => void
}

function Navigation({ onPrevious, onNext }: NavigationProps) {
  return (
    <div
      className="
        flex justify-between px-5 text-accent font-medium
        cursor-pointer
      "
    >
      <h1 onClick={onPrevious}>← Previous</h1>
      <h1 onClick={onNext}>Next →</h1>
    </div>
  )
}

export default Navigation
