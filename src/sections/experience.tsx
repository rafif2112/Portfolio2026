import HeaderSection from "@/components/header-section";
import { motion } from "framer-motion"; // Pastikan import dari framer-motion atau motion/react

export default function ExperienceSection() {
    const timelineData = [
        {
            year: "Jan 2025 - Jun 2025",
            title: "Lenna AI (PT. Sinergi Digital Teknologi)",
            role: "Fullstack Developer",
            desc: "Developed an HRIS web application managing employee data for internal use, including attendance tracking and leave approval workflows.",
        },
        {
            year: "Sep 2025",
            title: "Wikventory Project | SMK Wikrama Bogor",
            role: "Lead Backend Developer",
            desc: "Spearheaded backend architecture using Laravel and PostgreSQL, designing complex database schemas for asset tracking and secure RESTful APIs to support the Vue.js frontend.",
        },
    ];

    return (
        <section id="experiences" className="flex flex-col justify-center w-full min-h-auto lg:min-h-[60vh] px-4 py-12 overflow-hidden">
            <HeaderSection
                className="mb-12 sm:mb-16"
                title="Experiences"
                text="Professional experiences where I apply technical skills to real-world challenges."
            />

            <div className="relative w-full mx-auto">
                
                <motion.div
                    className="absolute top-0 bottom-0 w-0.5 bg-gray-700/50 md:bg-gray-700/50 left-6 md:left-1/2 transform md:-translate-x-1/2"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <motion.div 
                        className="w-full bg-black dark:bg-white"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </motion.div>

                <div className="flex flex-col space-y-12 md:space-y-24">
                    {timelineData.map((item, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row md:items-center w-full pl-14 md:pl-0 ${
                                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="hidden md:block md:w-1/2" />

                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-4 border-black bg-white z-10 dark:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]" />

                                <div className={`w-full md:w-1/2 px-2 sm:px-4 md:py-4 ${
                                    isEven ? "md:text-left md:pr-12" : "md:text-right md:pl-12"
                                }`}>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm sm:text-base font-semibold text-[#0090FF] mb-2 sm:mb-3">
                                        {item.role} <span className="text-gray-600 dark:text-gray-400 font-normal">| {item.year}</span>
                                    </p>

                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-inherit">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}