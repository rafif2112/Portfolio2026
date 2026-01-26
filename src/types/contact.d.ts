interface ContactData {
    id: string;
    email: string;
    linkedin: string;
    github: string;
    phone: string;
    instagram: string;
    address: string;
    cvUrl: string;
}

interface ContactState {
    data: ContactData | null;
    loading: boolean;
    error: string | null;
}

export { ContactData, ContactState };