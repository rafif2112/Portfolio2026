import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import { ThemeProvider } from './utils/theme-provider'
import { HomeSection } from './sections/home'
import StatsSection from './sections/stats'
import AboutSection from './sections/about'
import ProjectSection from './sections/project'
import SmoothScroll from './components/smooth-scroll'
import { SkillSection } from './sections/skills'
import ExperienceSection from './sections/experience'
import ContactSection from './sections/contact'
import { Button } from './components/ui/button'
import Footer from './components/footer'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(entry.isIntersecting || entry.boundingClientRect.top < 0)
      },
      { threshold: 0, rootMargin: '-100px' }
    )

    const projectSection = document.querySelector('section:nth-of-type(4)')
    if (projectSection) {
      observer.observe(projectSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SmoothScroll>
        <Navbar />
        <main className="relative max-w-7xl mx-auto">
          <HomeSection />
          <StatsSection />
          <AboutSection />
          <ProjectSection />
          <SkillSection />
          <ExperienceSection />
          <ContactSection />

          <Footer />

          {/* toggle back to top */}
          <div id="back-to-top" className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full transition-transform transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg"
              aria-label="Back to top"
              title="Back to top"
            >
              <span className="sr-only">Back to top</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496" />
              </svg>
            </Button>
          </div>
        </main>
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App