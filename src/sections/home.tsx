import ScrollIndicator from "@/components/ui/scroll-indicator"
// import { fetchAboutData } from "@/store/about"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { motion, type Variants } from "framer-motion"
import { useEffect } from "react"

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
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.about);

    useEffect(() => {
        // dispatch(fetchAboutData());
    }, [dispatch]);

    return (
        <>
            <motion.section
                id="home"
                className="flex flex-col items-center justify-center min-h-[80dvh] px-4 sm:px-8 w-full overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="flex w-full max-w-70 sm:max-w-xl md:max-w-2xl items-center gap-3 sm:gap-6 md:gap-10">
                    <motion.span
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap"
                        variants={itemVariants}
                    >
                        Hi, I&apos;m
                    </motion.span>

                    <div className="w-full flex justify-center items-center">
                        <motion.div
                            className="bg-black dark:bg-[#0090FF] h-0.5 sm:h-0.75 rounded-full w-full"
                            style={{ transformOrigin: "left center" }}
                            variants={lineVariants}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center mt-4 md:mt-6 w-full">

                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center leading-tight"
                        variants={itemVariants}>
                        {data?.name || "Muhamad Rafif"}
                    </motion.h1>

                    <div className="w-full max-w-70 sm:max-w-xl md:max-w-1xl flex flex-col items-end mt-2 sm:mt-4">
                        <motion.span
                            className="text-sm sm:text-lg md:text-2xl font-bold text-gray-500 dark:text-[#0090FF] tracking-[0.2em] sm:tracking-widest"
                            variants={itemVariants}
                        >
                            A FULL STACK
                        </motion.span>

                        <motion.span
                            className="text-sm sm:text-lg md:text-2xl font-bold text-gray-500 dark:text-[#0090FF] tracking-[0.2em] sm:tracking-widest"
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