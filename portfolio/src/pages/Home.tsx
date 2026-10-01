import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Languages from "../components/Languages"
import ScrollArrow from "../components/ScrollArrow"
import PageDots from "../components/PageDots"
import SocialLinks from "../components/SocialLinks"

function Home() {
  return (
    <main className="w-full bg-background font-grotesk">
      <ThemeToggle />

      <section
        id="home"
        className="
          relative mx-auto flex min-h-dvh max-w-[50rem]
          flex-col items-center justify-between
          px-5 py-8 sm:px-10
        "
      >
        <div
          className="
            flex w-full flex-1 flex-col items-center justify-center
            mb-[10rem]
          "
        >
          <Hero />
          <SocialLinks />
        </div>

        <ScrollArrow />
      </section>

      <PageDots />
    </main>
  )
}

export default Home
