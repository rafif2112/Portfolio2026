// import { motion } from 'framer-motion'

// export default function LoadingAnimation() {
//     return (
//         <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-2 pointer-events-none font-mono text-slate-900 dark:text-slate-100">

//             {/* Bagian 1: Spinner & Teks */}
//             <div className="flex items-center gap-3">

//                 {/* Spinner Icon */}
//                 <motion.div
//                     className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
//                     animate={{ rotate: 360 }}
//                     transition={{
//                         duration: 1,
//                         repeat: Infinity,
//                         ease: 'linear',
//                     }}
//                 />

//                 {/* Teks */}
//                 <span className="text-sm font-semibold tracking-wide uppercase">
//                     Loading data...
//                 </span>
//             </div>

//             {/* Bagian 2: Garis Loading Animasi */}
//             {/* Track Background */}
//             <div className="w-36 h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//                 {/* Moving Bar */}
//                 <motion.div
//                     className="w-full h-full bg-slate-900 dark:bg-slate-100 origin-left"
//                     initial={{ scaleX: 0 }}
//                     animate={{ 
//                         scaleX: [0, 1, 0], 
//                         translateX: ['0%', '0%', '20%'] 
//                     }} 
//                     transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                 />
//             </div>
//         </div>
//     )
// }

import { motion } from 'framer-motion'

export default function LoadingAnimation({ progress = 0 }: { progress: number }) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center font-mono text-slate-900 dark:text-slate-100 transition-colors duration-300">
            
            <div className="flex items-baseline gap-2 mb-8"> 
                <motion.span
                    className="text-2xl font-bold leading-none text-primary"
                    animate={{
                        opacity: [1, 0.5, 1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    •
                </motion.span>

                <span className="text-4xl md:text-5xl font-semibold tracking-wide flex items-center gap-2">
                    Hallo
                    <motion.span
                        className="inline-block origin-bottom-right"
                        animate={{
                            rotate: [0, 15, -10, 15, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        👋
                    </motion.span>
                </span>
            </div>

            <div className="relative w-64 md:w-80">
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-600 dark:bg-[#0099FF] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                            width: `${progress}%` 
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 20
                        }}
                    />
                </div>

                <div className="flex justify-between items-center mt-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    <span>
                        {progress < 100 ? "Loading resources..." : "Ready"}
                    </span>
                    <motion.span 
                        key={progress}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-slate-900 dark:text-slate-100"
                    >
                        {Math.round(progress)}%
                    </motion.span>
                </div>
            </div>
        </div>
    )
}