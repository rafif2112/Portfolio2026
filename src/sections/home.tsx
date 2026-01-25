import ScrollIndicator from "@/components/ui/scroll-indicator"
import { motion, type Variants } from "framer-motion"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1, ease: "easeInOut" },
    },
}

export function HomeSection() {
    return (
        <>
            <motion.section
                className="flex flex-col items-center justify-center min-h-[80dvh] px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="flex w-full max-w-2xl items-center gap-6 md:gap-10">
                    <motion.span
                        className="text-xl md:text-2xl font-semibold text-gray-400 whitespace-nowrap"
                        variants={itemVariants}
                    >
                        Hi, I'm
                    </motion.span>

                    <div className="w-full flex justify-center items-center">
                        <motion.div
                            className="bg-[#0090FF] h-0.75 rounded-full w-full"
                            style={{ transformOrigin: "left center" }}
                            variants={lineVariants}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center mt-4 md:mt-6">

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-center leading-tight">
                        <motion.div variants={itemVariants}>
                            Muhamad Rafif
                        </motion.div>
                    </h1>

                    <div className="w-full max-w-4xl flex flex-col items-end pr-2 md:pr-4 mt-2">
                        <motion.span
                            className="text-lg md:text-2xl font-bold text-[#0090FF] tracking-widest"
                            variants={itemVariants}
                        >
                            A FULL STACK
                        </motion.span>

                        <motion.span
                            className="text-lg md:text-2xl font-bold text-[#0090FF] tracking-widest"
                            variants={itemVariants}
                        >
                            DEVELOPER
                        </motion.span>
                    </div>
                </div>

            </motion.section>
            <ScrollIndicator />
        </>
    )
}