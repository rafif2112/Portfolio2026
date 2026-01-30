import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const routes = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CERTIFICATES', path: '/certificates' },
  ]

  const openDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className={`z-50 w-full py-4 px-4 sm:px-8 flex justify-between items-center sticky top-0 transition-all duration-500 ease-in-out ${isScrolled
        ? 'bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}>
        <motion.div
          className="text-xl sm:text-2xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileInView="visible"
          transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
        >
          <a href="#home">
            Rafif <span className="text-[#0099FF]">(</span>.<span className="text-[#0099FF]">)</span>
          </a>
        </motion.div>

        <motion.div
          className='flex gap-6 items-center relative'
          initial="hidden"
          animate="visible"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.25 } },
          }}
        >
          <div
            className="hidden md:flex  gap-6"
          >
            {routes.map((route) => (
              <motion.div
                key={route.label}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 20 } },
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={route.path}>
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                    {route.label}
                  </Button>
                </Link>
              </motion.div>
            ))}

          </div>
          <AnimatedThemeToggler className='hidden md:flex' />

          {/* menu for mobile view */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-1 rounded cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: -8 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 20 } },
            }}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.80 }}
            onClick={openDropdown}
          >
            {!isOpen ? (
              <Menu className="w-6 h-6" />
              ) : (
                <X className="w-6 h-6" />
              )
            }
          </motion.button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 right-0 bg-white dark:bg-[#0f0f13] shadow-lg rounded-md py-2 w-60 flex flex-col z-50"
            >
              {routes.map((route) => (
                <Link to={route.path} key={route.label}>
                  <Button variant="ghost" size="lg" onClick={() => setIsOpen(false)} className="text-sm w-full justify-start">
                    {route.label}
                  </Button>
                </Link>
              ))}
              <div className='py-2 px-5'>
                <AnimatedThemeToggler className='md:hidden' />
              </div>
            </motion.div>
          )}
        </motion.div>
      </nav>
    </>
  )
}

export default Navbar