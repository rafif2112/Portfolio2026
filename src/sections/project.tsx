import HeaderSection from '@/components/header-section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import Github from '@/assets/icons/github.svg';

const projects = [
    {
        id: 1,
        title: "E-Commerce",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem.",
        tech: ["React", "Laravel", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "School System",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem.",
        tech: ["Vue", "Firebase", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=500",
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Portfolio V1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "AI Chatbot",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem.",
        tech: ["Next.js", "OpenAI", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500",
        github: "#",
        demo: "#"
    },
    {
        id: 5,
        title: "Finance App",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem.",
        tech: ["Flutter", "Dart", "Firebase"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500",
        github: "#",
        demo: "#"
    },
    {
        id: 6,
        title: "Blog Platform",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare vestibulum erat, vel condimentum sem.",
        tech: ["Gatsby", "GraphQL", "CSS Modules"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
        github: "#",
        demo: "#"
    },
];

export default function ProjectSection() {
    return (
        <section id='projects' className="flex items-center lg:min-h-[80vh] px-4 py-8 text-center">
            <div className='flex flex-col gap-8 lg:gap-16 flex-1 w-full'>
                <HeaderSection title="Projects" text="Frontend-focused projects where I craft interactive, scalable UI with clean design systems and smooth user flows from portfolios to full-scale platforms." />

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        className='cursor-grab active:cursor-grabbing'
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="bg-white dark:bg-[#1F1C1C] rounded-lg overflow-hidden shadow-lg h-full select-none flex flex-col">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 sm:h-48 object-cover"
                                        draggable={false}
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                    <div className="p-3 sm:p-4 text-left flex flex-col flex-1">
                                        <div className='flex justify-between items-start gap-2 mb-2'>
                                            <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white line-clamp-1">{project.title}</h3>

                                            <div className='flex gap-2 shrink-0'>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                    <img src={Github} alt="GitHub" className='w-5 h-5 sm:w-6 sm:h-6' />
                                                </a>
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-3 line-clamp-2 flex-1">{project.desc}</p>
                                        <div className="flex flex-wrap gap-1 sm:gap-2">
                                            {project.tech.map((tech, index) => (
                                                <span key={index} className="bg-gray-800 dark:bg-[#0090FF] text-white text-xs px-2 py-1 rounded-sm">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}