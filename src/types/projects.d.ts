interface ProjectData {
  _id: string;
  slug: string;
  title: string;
  type: string;
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
