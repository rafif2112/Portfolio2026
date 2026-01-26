import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`z-50 w-full py-4 px-4 sm:px-8 flex justify-between items-center transition-all duration-500 ease-in-out ${isScrolled
        ? 'fixed top-0 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md shadow-sm'
        : 'relative bg-transparent'
      }`}>
      <motion.div
        className="text-2xl sm:text-4xl font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileInView="visible"
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      >
        <a href="#home">
          R
        </a>
      </motion.div>

      <motion.div
        className='flex gap-6'
        initial="hidden"
        animate="visible"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.25 } },
        }}
      >
        <div
          className="hidden md:flex gap-6"
        >
          {["ABOUT", "PROJECTS", "SKILLS", "EXPERIENCES", "CONTACT"].map((label) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: -8 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 20 } },
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={`#${label.toLowerCase()}`}>
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                  {label}
                </Button>
              </a>
            </motion.div>
          ))}

        </div>
        <AnimatedThemeToggler />
      </motion.div>
    </nav>
  )
}

export default Navbar