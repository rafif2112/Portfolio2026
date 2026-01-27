/* eslint-disable @typescript-eslint/no-explicit-any */
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
import GithubSection from './sections/github'
// import ToggleTool from './components/toggle-tool'

function InnerApp() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

      const total = promises.length
      let completed = 0

      const wrap = (promise: Promise<any>) => {
        return promise.finally(() => {
          completed += 1
          if (mounted) setProgress((completed / total) * 100)
        })
      }

      await Promise.allSettled(promises.map(wrap))
      if (mounted) {
        setLoading(false)
        setProgress(100)
      }
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
          <LoadingAnimation progress={progress} />
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
            <GithubSection />
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