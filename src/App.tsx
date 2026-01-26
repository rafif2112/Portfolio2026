import { Provider } from 'react-redux'
import { store } from './store'
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
import Footer from './components/footer'
// import ToggleTool from './components/toggle-tool'

function App() {
  return (
    <Provider store={store}>
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
        </main>

        {/* <ToggleTool /> */}
      </SmoothScroll>
    </ThemeProvider>
    </Provider>
  )
}

export default App