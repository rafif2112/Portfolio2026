import HeaderSection from '@/components/header-section';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import Github from '@/assets/icons/github.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProjectSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();
    const { data: projects } = useAppSelector((state) => state.project);

    useEffect(() => {
        // dispatch(fetchProjectData());
    }, [dispatch]);

    return (
        <>
            <section id='projects' className="flex items-center lg:min-h-[80vh] px-4 py-8 text-center">
                <div className='flex flex-col gap-8 lg:gap-16 flex-1 w-full'>
                    <HeaderSection title="Projects" text="Frontend-focused projects where I craft interactive, scalable UI with clean design systems and smooth user flows from portfolios to full-scale platforms." />

                    <motion.div
                        className="w-full flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        ref={containerRef}
                    >
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {projects?.slice(0, 3).map((project) => {
                                return (
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        key={project._id}
                                        className="h-full"
                                    >
                                        <div className="bg-white dark:bg-[#1F1C1C] rounded-lg overflow-hidden shadow-lg h-full select-none flex flex-col hover:shadow-xl transition-shadow duration-300">
                            
                                            {/* Image Section */}
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-105"
                                                    draggable={false}
                                                />
                                            </div>
                            
                                            {/* Content Section */}
                                            <div className="p-3 sm:p-4 text-left flex flex-col flex-1">
                            
                                                {/* Header: Title & Action Buttons */}
                                                <div className='flex justify-between items-start gap-2 mb-2'>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white line-clamp-1" title={project.title}>
                                                        {project.title}
                                                    </h3>
                            
                                                    <div className='flex gap-2 shrink-0'>
                                                        {project.link.github && (
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    window.open(project.link.github, '_blank', 'noopener,noreferrer');
                                                                }}
                                                                className="text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1"
                                                                aria-label="Open GitHub"
                                                            >
                                                                <img src={Github} alt="GitHub" className='w-5 h-5 sm:w-6 sm:h-6' />
                                                            </button>
                                                        )}
                            
                                                        {project.link.demo && (
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    window.open(project.link.demo, '_blank', 'noopener,noreferrer');
                                                                }}
                                                                className="text-gray-400 hover:text-blue-500 transition-colors p-1"
                                                                aria-label="Open demo"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5" /></svg>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                            
                                                {/* Description */}
                                                <div
                                                    className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2 flex-1"
                                                    dangerouslySetInnerHTML={{ __html: project.description ?? '' }}
                                                />
                            
                                                {/* Tech Stack Badges */}
                                                <div className="flex flex-wrap gap-1 sm:gap-2 items-center">
                                                        {(() => {
                                                            const techs = project.technologies || [];
                                                            const visibleCount = 3;
                                                            const visible = techs.slice(0, visibleCount);
                                                            const hidden = techs.slice(visibleCount);
                                                            return (
                                                                <>
                                                                    {visible.map((tech, index) => (
                                                                        <Badge key={index} variant="secondary" className="px-3 py-1 text-sm rounded-md font-semibold">
                                                                            {tech}
                                                                        </Badge>
                                                                    ))}
                                                                    {hidden.length > 0 && (
                                                                        <Badge
                                                                            variant="secondary"
                                                                            className="px-3 py-1 text-sm rounded-md font-semibold"
                                                                            title={hidden.join(', ')}
                                                                        >
                                                                            +{hidden.length}
                                                                        </Badge>
                                                                    )}
                                                                </>
                                                            );
                                                        })()}
                                                    </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <Button
                            asChild
                            size="lg"
                            className="self-start mt-2 px-6 py-3 bg-[#E0E0E0] dark:bg-[#1F1C1C] hover:bg-[#D0D0D0] dark:hover:bg-[#2F2C2C] text-black dark:text-white"
                        >
                            <Link to="/projects" className="py-2">
                                View All Projects
                                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}