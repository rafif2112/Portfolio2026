interface CertificateData {
    _id: string;
    title: string;
    issuer: string;
    issueDate: string;
    imageName: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

interface CertificateState {
    data: CertificateData[] | null;
    loading: boolean;
    error: string | null;
}