import Navigation from "../components/Navigation"
import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"

function Home() {
  return (
    <main className="bg-background w-full min-h-dvh p-10 font-grotesk">
      <section className="flex flex-col">
        <Navigation />
        <ThemeToggle />
        <Hero />
      </section>
    </main>
  )
}

export default Home
