interface ProjectData {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    link: {
        demo: string;
        github: string;
    };
}

interface ProjectProps {
    data: ProjectData;
}

interface ProjectsState {
    data: ProjectData[] | null;
    loading: boolean;
    error: string | null;
}