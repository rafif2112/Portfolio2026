interface AboutData {
  name: string;
  biography: string;
  imageName?: string;
  profileImageUrl?: string;
}

interface AboutState {
  data: AboutData | null;
  loading: boolean;
  error: string | null;
}

export type { AboutData, AboutState };