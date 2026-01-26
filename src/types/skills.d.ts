interface Skill {
    id: string;
    name: string;
    type: string;
    imageName: string;
    imageUrl: string;
}

interface SkillState {
    data: Skill[];
    loading: boolean;
    error: string | null;
}