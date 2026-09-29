import Navigation from "../components/Navigation"
import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Languages from "../components/Languages"

function Home() {
  return (
    <main className="bg-background w-full min-h-dvh p-5 sm:p-10 font-grotesk">
      <section className="flex flex-col items-center">
        <Navigation />
        <ThemeToggle />
        <Hero />
        <Languages />
        <Skills />
      </section>
    </main>
  )
}

export default Home
