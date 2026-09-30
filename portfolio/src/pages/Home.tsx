import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Languages from "../components/Languages"
import ScrollArrow from "../components/ScrollArrow"

function Home() {
  return (
    <main className="bg-background w-full h-dvh p-5 sm:p-10 font-grotesk">
      <section className="mx-auto flex w-full h-full justify-around max-w-[50rem] flex-col items-center">
        <ThemeToggle />
        <Hero />
        <Languages />
        <Skills />
        <ScrollArrow />
      </section>
    </main>
  )
}

export default Home
