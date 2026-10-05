interface NavigationProps {
  onPrevious: () => void
  onNext: () => void
  currentProject: number
  totalProjects: number
}

function Navigation({ onPrevious, onNext, currentProject, totalProjects }: NavigationProps) {
  return (
    <div
      className="
        flex justify-between px-5 text-accent font-medium relative
      "
    >
      <button
        type="button"
        onClick={onPrevious}
        className="cursor-pointer transition-colors duration-300 hover:text-accent/60"
      >
        ← Previous
      </button>

      <span className="text-sm text-muted absolute right-1/2 translate-x-1/2">
        {currentProject}/{totalProjects}
      </span>

      <button
        type="button"
        onClick={onNext}
        className="cursor-pointer transition-colors duration-300 hover:text-accent/60"
      >
        Next →
      </button>
    </div>
  )
}

export default Navigation
