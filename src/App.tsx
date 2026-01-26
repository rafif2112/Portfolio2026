import { Provider } from 'react-redux'
import { store } from './store'
import Navbar from './components/navbar'
import LoadingAnimation from './components/loadingAnimation'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from './store'
import { fetchAboutData } from './store/about'
import { fetchSkillData } from './store/skill'
import { fetchProjectData } from './store/project'
import { fetchContactData } from './store/contact'
import { fetchExperienceData } from './store/experience'
import { fetchStatsData } from './store/stats'
import { ThemeProvider } from './utils/theme-provider'
import { HomeSection } from './sections/home'
import StatsSection from './sections/stats'
import AboutSection from './sections/about'
import ProjectSection from './sections/project'
import SmoothScroll from './components/smooth-scroll'
import { SkillSection } from './sections/skills'
import ExperienceSection from './sections/experience'
import ContactSection from './sections/contact'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
// import ToggleTool from './components/toggle-tool'

function InnerApp() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    let mounted = true

    async function loadInitialData() {
      const promises = [
        dispatch(fetchAboutData()),
        dispatch(fetchSkillData()),
        dispatch(fetchProjectData()),
        dispatch(fetchContactData()),
        dispatch(fetchExperienceData()),
        dispatch(fetchStatsData()),
      ]

      await Promise.allSettled(promises)
      if (mounted) setLoading(false)
    }

    loadInitialData()

    return () => {
      mounted = false
    }
  }, [dispatch])

  return (
    <>
      {loading ? (
        <div className="min-h-dvh flex justify-center">
          <LoadingAnimation />
        </div>
      ) : (
        <div>
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
          </main>
        </div>
      )}
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <SmoothScroll>
          <InnerApp />
          {/* <ToggleTool /> */}
        </SmoothScroll>
      </ThemeProvider>
    </Provider>
  )
}

export default App