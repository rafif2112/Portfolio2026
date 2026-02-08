import HeaderSection from '@/components/header-section';
import ProjectCard from '@/components/project-card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppSelector } from '@/store/hooks';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

type SortOption = 'newest' | 'oldest';

export default function ProjectsPage() {
    const { data: projects, loading } = useAppSelector((state) => state.project);
    const [sortOrder, setSortOrder] = useState<SortOption>('newest');
    const [selectedType, setSelectedType] = useState<string>('All');

    const uniqueTypes = useMemo(() => {
        if (!projects) return ['All'];
        const types = new Set(projects.map((p) => p.type));
        return ['All', ...Array.from(types)];
    }, [projects]);

    const filteredAndSortedProjects = useMemo(() => {
        if (!projects) return [];

        let result = [...projects];

        if (selectedType !== 'All') {
            result = result.filter((p) => p.type === selectedType);
        }

        result.sort((a, b) => {
            if (sortOrder === 'newest') {
                return b._id.localeCompare(a._id);
            } else {
                return a._id.localeCompare(b._id);
            }
        });

        return result;
    }, [projects, sortOrder, selectedType]);

    return (
        <section className="min-h-screen px-4 py-8 lg:py-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <HeaderSection
                    title="All Projects"
                    text="A collection of my work, ranging from web applications to experimental prototypes."
                />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Type Filter */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {uniqueTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === type
                                        ? 'bg-black dark:bg-white text-white dark:text-black'
                                        : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Sort Order */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as SortOption)}
                            className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[...Array(6)].map((_, i) => (
                            <Skeleton key={i} className="w-full h-80 rounded-lg" />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        layout
                        className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    >
                        {filteredAndSortedProjects.length > 0 ? (
                            filteredAndSortedProjects.map((project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))
                        ) : (
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12 text-gray-500">
                                No projects found matching your criteria.
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
}