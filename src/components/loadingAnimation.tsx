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

export default function LoadingAnimation({ progress = 0 }: { progress?: number }) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none font-mono text-slate-900 dark:text-slate-100">
            
            <div className="flex items-baseline gap-2 mb-6"> 
                <motion.span
                    className="text-2xl font-bold leading-none"
                    animate={{
                        opacity: [1, 0.3, 1],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    •
                </motion.span>

                <span className="text-5xl font-semibold tracking-wide">
                    Hallo
                    <motion.span
                        className="inline-block ml-2 origin-bottom-right"
                        animate={{
                            rotate: [0, 10, -10, 10, 0],
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

            <div className="w-56 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                    className="h-full bg-slate-900 dark:bg-slate-100 origin-left"
                    style={{ transformOrigin: 'left' }}
                    animate={{ scaleX: Math.max(0, Math.min(1, progress / 100)) }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                />
                <span className="absolute right-2 top-[-1.6rem] text-sm font-medium text-gray-600 dark:text-gray-300 pointer-events-none">
                    {progress}% 
                </span>
            </div>
        </div>
    )
}