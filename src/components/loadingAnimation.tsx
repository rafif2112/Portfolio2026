import { motion } from 'framer-motion'

export default function LoadingAnimation() {
    return (
        <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-2 pointer-events-none font-mono text-slate-900 dark:text-slate-100">
            
            {/* Bagian 1: Spinner & Teks */}
            <div className="flex items-center gap-3">
                
                {/* Spinner Icon */}
                <motion.div
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Teks */}
                <span className="text-sm font-semibold tracking-wide uppercase">
                    Loading data...
                </span>
            </div>

            {/* Bagian 2: Garis Loading Animasi */}
            {/* Track Background */}
            <div className="w-36 h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                {/* Moving Bar */}
                <motion.div
                    className="w-full h-full bg-slate-900 dark:bg-slate-100 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                        scaleX: [0, 1, 0], 
                        translateX: ['0%', '0%', '20%'] 
                    }} 
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    )
}