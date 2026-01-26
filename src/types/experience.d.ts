interface ExperienceData {
    id: string;
    title: string;
    role: string;
    organization: string;
    description: string;
    badge: string;
    startDate: string;
    endDate: string | null;
    isCurrent: boolean;
}

interface ExperienceState {
    data: ExperienceData[] | null;
    loading: boolean;
    error: string | null;
}