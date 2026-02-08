import { Link } from 'react-router';
import Github from '@/assets/icons/github.svg';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="h-full"
        >
            <Link
                to={`/projects/${project.slug}`}
                className="h-full block"
            >
                <div className="bg-white dark:bg-[#1F1C1C] rounded-lg overflow-hidden shadow-lg h-full select-none flex flex-col hover:shadow-xl transition-shadow duration-300">

                    <div className="relative overflow-hidden">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            loading="lazy"
                            width={400}
                            height={200}
                            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-105"
                            draggable={false}
                        />
                    </div>

                    <div className="p-3 sm:p-4 text-left flex flex-col flex-1">

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

                        <div
                            className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2 flex-1"
                            dangerouslySetInnerHTML={{ __html: project.description ?? '' }}
                        />

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
        </motion.div>
    );
}
