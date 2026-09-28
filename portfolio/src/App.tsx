const name = "Irakli Mania"

function App() {
  return (
    <main className="bg-background w-screen h-screen p-10">
      <h1
        className="
          relative
          font-edu text-5xl font-thin
          text-background
          [-webkit-text-stroke:1px_var(--accent)]
        "
      >
        <span>{name}</span>

        <span
          aria-hidden="true"
          className="
            animate-fill-name
            absolute inset-0
            text-accent
          "
        >
          {name}
        </span>
      </h1>
    </main>
  )
}

export default App
