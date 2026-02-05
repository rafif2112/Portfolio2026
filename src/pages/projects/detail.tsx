/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchProjectBySlug } from "@/store/project";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, Globe, ExternalLink, ArrowLeft, Code } from "lucide-react";
import NotFoundPage from "../error/404";
import Loading from "@/components/loading";

export default function DetailProject() {
    const { slug } = useParams<{ slug: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data, loading } = useAppSelector((state) => state.project);
    const [project, setProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        if ((!data || data.length === 0) && slug) {
            dispatch(fetchProjectBySlug(slug));
        }
    }, [dispatch, data, slug]);

    useEffect(() => {
        if (data && data.length > 0 && slug) {
            const foundProject = data.find((p) => p.slug === slug);
            setProject(foundProject || null);
        }
    }, [data, slug]);

    const handleBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!project) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="px-2">
                <Button
                    variant="secondary"
                    onClick={handleBack}
                    className="gap-3 mb-6 bg-[#E0E0E0] dark:bg-[#1F1C1C]"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Button>
            </div>

            <div className="w-full px-2 overflow-hidden">
                <div className="container mx-auto">
                    <div className="relative w-full aspect-video max-h-160 bg-muted overflow-hidden group">
                        {project.imageUrl ? (
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
                                <span className="text-lg font-medium">No Preview Available</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="mx-auto">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                {project.title}
                            </h1>
                            <Badge
                                className="px-4 py-2 bg-[#E0E0E0] dark:bg-[#1F1C1C] text-black dark:text-white text-sm sm:text-md rounded-md font-semibold"
                            >
                                <Code className="w-5 h-5 mr-2 inline-block" />
                                {project.type || 'N/A'}
                            </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, i) => (
                                <Badge
                                    key={i}
                                    className="px-4 py-1 bg-[#E0E0E0] dark:bg-[#1F1C1C] text-black dark:text-white text-sm sm:text-md rounded-md font-semibold"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 py-8 border-b">
                        {project.link?.demo && (
                            <Button
                                asChild
                                size="lg"
                                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                            >
                                <a href={project.link.demo} target="_blank" rel="noopener noreferrer" className="py-2">
                                    <Globe className="w-5 h-5" />
                                    Live Demo
                                    <ExternalLink className="w-4 h-4 opacity-50 ml-1" />
                                </a>
                            </Button>
                        )}

                        {project.link?.github && (
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="flex-1 gap-2 border border-gray-500 dark:border-input hover:bg-accent hover:text-accent-foreground"
                            >
                                <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="py-2">
                                    <Github className="w-5 h-5" />
                                    Source Code
                                </a>
                            </Button>
                        )}
                    </div>

                    <div className="py-8">

                        <div
                            className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground flex flex-col gap-1 typography [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:marker:text-primary [&_.ql-align-justify]:text-justify [&_.ql-align-center]:text-center [&_.ql-align-right]:text-right prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:underline"
                            dangerouslySetInnerHTML={{
                                __html: (project.description ?? '').replace(/&nbsp;/g, ' ')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}