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

interface ContactFormInput {
    name: string;
    email: string;
    message: string;
}

export { ContactData, ContactState, ContactFormInput };