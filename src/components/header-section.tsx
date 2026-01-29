import { motion } from "framer-motion";
import { TextAnimate } from "./ui/text-animate";

export default function HeaderSection({ title, text, className }: { title: string, text: string, className?: string }) {
    return (
        <motion.div
            className={`flex items-start flex-col ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-black dark:text-white">{title}</h2>
            {/* <p className="max-w-3xl text-sm sm:text-base text-justify text-gray-500 dark:text-gray-400">
                {text}
            </p> */}
            <TextAnimate className="max-w-3xl text-sm sm:text-base text-justify text-gray-500 dark:text-gray-400" animation="slideUp" by="word">
                {text}
            </TextAnimate>
        </motion.div>

        // <div className="flex items-start flex-col">
        //     <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
        //     <p className="max-w-3xl text-md text-justify text-gray-400">
        //         {text}
        //     </p>
        // </div>
    );
}