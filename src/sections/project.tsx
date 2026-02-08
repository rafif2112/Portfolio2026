import HeaderSection from '@/components/header-section';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import ProjectCard from '@/components/project-card';

export default function ProjectSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();
    const { data: projects, loading } = useAppSelector((state) => state.project);

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
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        ref={containerRef}
                    >
                        {loading ? (
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                <Skeleton className="w-full h-64 rounded-md" />
                                <Skeleton className="w-full h-64 rounded-md" />
                                <Skeleton className="w-full h-64 rounded-md" />
                            </div>
                        ) : (
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {projects?.slice(0, 3).map((project) => {
                                    return (
                                        <ProjectCard key={project._id} project={project} />
                                    );
                                })}
                            </div>
                        )}

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