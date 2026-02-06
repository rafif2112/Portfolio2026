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
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Muhamad Rafif - Full Stack Developer</title>
        <link rel="canonical" href="https://muhamadrafif.vercel.app/" />
        <meta name="description" content="Portfolio Fullstack Developer spesialis React, Vue & Laravel." />
        <meta name="keywords" content="Muhamad Rafif, Rafif, Fullstack Developer, React Developer, Vue Developer, Laravel Developer, Portfolio, Web Developer, Freelance Developer" />
        <meta name="author" content="Muhamad Rafif" />

        <meta property="og:title" content="Muhamad Rafif - Fullstack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muhamadrafif.vercel.app/" />
        <meta property="og:description" content="Jelajahi karya dan proyek terbaru saya sebagai seorang Fullstack Developer dengan keahlian di React, Vue, dan Laravel. Temukan solusi inovatif dan desain berkualitas tinggi yang saya tawarkan." />
        <meta property="og:image" content="https://muhamadrafif.vercel.app/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://muhamadrafif.vercel.app/og-image.png" />
      </Helmet>
      <div className="animate-in fade-in duration-700">
        <Navbar />
        <main className="relative max-w-7xl mx-auto">
          <Layouts>
            <AppRoutes />
          </Layouts>
          <Footer />
        </main>
      </div>
    </>
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