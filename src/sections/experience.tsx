import HeaderSection from "@/components/header-section";
import { motion } from "motion/react";

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
        <section id="experiences" className="flex flex-col justify-center w-full h-[60vh] px-4 mb-20">
            <HeaderSection
                className="mb-12"
                title="Experiences"
                text="Professional experiences where I apply technical skills to real-world challenges, collaborating with teams to deliver functional software solutions and reliable code."
            />

            <div className="relative">
                <motion.div
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white hidden md:block"
                    initial={{ height: 0 }}
                    whileInView={{ height: "calc(100% - 8rem)" }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1 }}
                />

                <motion.div
                    className="absolute left-8 bottom-0 w-0.5 bg-white md:hidden"
                    initial={{ height: 0 }}
                    whileInView={{ height: "calc(100% - 8rem)" }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1 }}
                />

                <div className="flex flex-col space-y-12 md:space-y-24">
                    {timelineData.map((item, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                className={`relative pl-16 md:pl-0 flex flex-col md:flex-row md:items-center w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false, margin: "-50px" }}
                            >
                                <div className="hidden md:block md:w-1/2" />

                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-white z-10" />

                                <div className={`w-full md:w-1/2 ${isEven ? "md:text-left pr-2" : "md:text-right pl-2"
                                    }`}>
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-lg text-gray-200 mb-4">
                                        {item.role} | {item.year}
                                    </p>

                                    <p className="text-gray-300 leading-relaxed text-base">
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