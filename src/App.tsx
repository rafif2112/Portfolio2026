import { Provider } from 'react-redux'
import { store } from './store'
import Navbar from './components/navbar'
// import LoadingAnimation from './components/loadingAnimation'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from './store'
import { fetchAboutData } from './store/about'
import { fetchSkillData } from './store/skill'
import { fetchProjectData } from './store/project'
import { fetchContactData } from './store/contact'
import { fetchExperienceData } from './store/experience'
import { fetchStatsData } from './store/stats'
import { ThemeProvider } from './utils/theme-provider'
import SmoothScroll from './components/smooth-scroll'
import Footer from './components/footer'
import { useEffect } from 'react'

// module-level guard to avoid duplicate initial fetches (React StrictMode mounts twice in dev)
let __initialDataLoaded = false;
import { AppRoutes } from './routes'
import Layouts from './components/layout'

function InnerApp() {
  // const [loading, setLoading] = useState(true);
  // const [progress, setProgress] = useState(0);

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (__initialDataLoaded) return;
    __initialDataLoaded = true;

    dispatch(fetchAboutData());
    dispatch(fetchSkillData());
    dispatch(fetchProjectData());
    dispatch(fetchContactData());
    dispatch(fetchExperienceData());
    dispatch(fetchStatsData());
  }, [dispatch])

  return (
    // <>
    //   {loading ? (
    //     <LoadingAnimation progress={progress} />
    //   ) : (
    <div className="animate-in fade-in duration-700">
      <Navbar />
      <main className="relative max-w-7xl mx-auto">
        <Layouts>
          <AppRoutes />
        </Layouts>
        <Footer />
      </main>
    </div>
    //   )}
    // </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='theme'>
        <SmoothScroll>
          <InnerApp />
        </SmoothScroll>
      </ThemeProvider>
    </Provider>
  )
}

export default App