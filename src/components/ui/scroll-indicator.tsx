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
            viewport={{ once: false, amount: 0.5 }}
        >
            {/* Mouse Outline */}
            <motion.div
                className="w-6.5 h-10.5 rounded-full border-2 border-white flex justify-center p-2"
                variants={itemVariants}
            >
                <motion.div
                    className="w-1.5 h-1.5 bg-white rounded-full mb-1"
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* Text "SCROLL" */}
            <motion.span
                className="text-white text-xs font-light tracking-widest uppercase"
                variants={itemVariants}
            >
                Scroll
            </motion.span>
        </motion.div>
    );
}