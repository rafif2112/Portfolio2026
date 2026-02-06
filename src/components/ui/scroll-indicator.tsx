import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ScrollIndicator() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <motion.div
                className="w-5.5 h-9 sm:w-6.5 sm:h-10 rounded-full border-2 border-black dark:border-white flex justify-center p-2"
                variants={itemVariants}
            >
                <motion.div
                    className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mb-1"
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <motion.span
                className="text-black dark:text-white text-xs font-medium tracking-widest uppercase"
                variants={itemVariants}
            >
                Scroll
            </motion.span>
        </motion.div>
    );
}