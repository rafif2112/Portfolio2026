interface StatsData {
    projects: number;
    experiences: number;
}

interface StatsState {
    data: StatsData | null;
    loading: boolean;
    error: string | null;
}