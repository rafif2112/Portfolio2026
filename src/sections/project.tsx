/* eslint-disable react-hooks/exhaustive-deps */
import HeaderSection from '@/components/header-section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import Github from '@/assets/icons/github.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from "swiper";
import { ProjectDialog } from '@/components/project/dialog';
import { Badge } from '@/components/ui/badge';
// import { fetchProjectData } from '@/store/project';

export default function ProjectSection() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!swiperInstance) return;
                if (entry.isIntersecting) {
                    swiperInstance.autoplay.start();
                } else {
                    swiperInstance.autoplay.stop();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [swiperInstance]);

    const dispatch = useAppDispatch();
    const { data: projects } = useAppSelector((state) => state.project);

    useEffect(() => {
        // dispatch(fetchProjectData());
    }, [dispatch]);

    const handleOpenDialog = (projectId: string) => {
        const data = projects?.find((p: ProjectData) => p._id === projectId) ?? null;
        setSelectedProject(data);
        setIsDialogOpen(true);
    }

    return (
        <>
            <ProjectDialog
                project={selectedProject}
                isOpen={isDialogOpen}
                onClose={() => {
                    setIsDialogOpen(false);
                    setSelectedProject(null);
                }}
            />
            <section id='projects' className="flex items-center lg:min-h-[80vh] px-4 py-8 text-center">
                <div className='flex flex-col gap-8 lg:gap-16 flex-1 w-full'>
                    <HeaderSection title="Projects" text="Frontend-focused projects where I craft interactive, scalable UI with clean design systems and smooth user flows from portfolios to full-scale platforms." />

                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                        ref={containerRef}
                    >
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            className='cursor-pointer'
                            spaceBetween={20}
                            onSwiper={(swiper) => setSwiperInstance(swiper)}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                        >
                            {projects?.map((project) => (
                                <SwiperSlide key={project._id} onClick={() => handleOpenDialog(project._id)}>
                                    <div className="bg-white dark:bg-[#1F1C1C] rounded-lg overflow-hidden shadow-lg h-full select-none flex flex-col">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-40 sm:h-48 object-cover"
                                            draggable={false}
                                            onDragStart={(e) => e.preventDefault()}
                                        />
                                        <div className="p-3 sm:p-4 text-left flex flex-col flex-1">
                                            <div className='flex justify-between items-start gap-2 mb-2'>
                                                <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white line-clamp-1">{project.title}</h3>

                                                <div className='flex gap-2 shrink-0'>
                                                    {project.link.github ? (
                                                        <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                            <img src={Github} alt="GitHub" className='w-5 h-5 sm:w-6 sm:h-6' />
                                                        </a>
                                                    ) : null}

                                                    {project.link.demo ? (
                                                        <a href={project.link.demo} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" /></svg>
                                                        </a>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-3 line-clamp-2 flex-1">{project.description}</p>
                                            <div className="flex flex-wrap gap-1 sm:gap-2 items-center">
                                                {(() => {
                                                    const techs = project.technologies || [];
                                                    const visibleCount = 3;
                                                    const visible = techs.slice(0, visibleCount);
                                                    const hidden = techs.slice(visibleCount);
                                                    return (
                                                        <>
                                                            {visible.map((tech, index) => (
                                                                // <span key={index} className="bg-gray-800 dark:bg-[#0090FF] text-white text-xs px-2 py-1 rounded-sm">
                                                                //     {tech}
                                                                // </span>
                                                                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm rounded-md font-semibold">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                            {hidden.length > 0 && (
                                                                // <span
                                                                //     className="bg-gray-600 dark:bg-[#0056b3] text-white text-xs px-2 py-1 rounded-sm"
                                                                //     title={hidden.join(', ')}
                                                                // >
                                                                //     +{hidden.length} more
                                                                // </span>

                                                                <Badge
                                                                    variant="secondary"
                                                                    className="px-3 py-1 text-sm rounded-md font-semibold"
                                                                    title={hidden.join(', ')}
                                                                >
                                                                    +{hidden.length} more
                                                                </Badge>
                                                            )}
                                                        </>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>
        </>
    )
}