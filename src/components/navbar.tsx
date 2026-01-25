import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center">
      <motion.div
        className="text-4xl font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileInView="visible"
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      >
        R
      </motion.div>

      <motion.div
        className="hidden md:flex gap-6"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.25 } },
        }}
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
              <Button variant="ghost" size="sm">
                {label}
              </Button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  )
}

export default Navbar