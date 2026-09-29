import Navigation from "../components/Navigation"
import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Languages from "../components/Languages"
import humanEvolution from "../assets/human-evolution.png"

function Home() {
  return (
    <main className="bg-background w-full min-h-dvh p-5 sm:p-10 font-grotesk">
      <section className="flex flex-col items-center">
        <ThemeToggle />
        <Hero />
        <img
          src={humanEvolution}
          alt="Human Evolution"
          className="sm:max-w-xl h-auto mx-auto block bg-transparent animate-fade-up"
        />
        <Languages />
        <Skills />
      </section>
    </main>
  )
}

export default Home
