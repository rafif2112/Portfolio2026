import CertificateCard from '@/components/certificate-card';
import HeaderSection from '@/components/header-section';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppSelector } from '@/store/hooks';
import { getYear, parseISO, isValid } from 'date-fns';
import { useMemo } from 'react';

export default function CertificatesPage() {
    const { data: certificates, loading } = useAppSelector((state) => state.certificate);

    // Group certificates by year
    const certificatesByYear = useMemo(() => {
        if (!certificates) return {};

        const grouped: Record<number, CertificateData[]> = {};

        certificates.forEach((cert) => {
            let year = 0;
            try {
                // Try issueDate first, fallback to createdAt, else 'Unknown' (use 0 or similar for sorting)
                const dateStr = cert.issueDate || cert.createdAt;
                const date = dateStr ? parseISO(dateStr) : new Date();
                year = isValid(date) ? getYear(date) : 0; // 0 for unknown/invalid
            } catch (e) {
                console.error("Date parsing error", e);
                year = 0;
            }

            if (!grouped[year]) {
                grouped[year] = [];
            }
            grouped[year].push(cert);
        });

        return grouped;
    }, [certificates]);

    // Get sorted years (descending)
    const sortedYears = useMemo(() => {
        return Object.keys(certificatesByYear)
            .map(Number)
            .sort((a, b) => b - a); // Descending order
    }, [certificatesByYear]);


    return (
        <section className="min-h-screen px-4 py-8 lg:py-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <HeaderSection
                    title="Certificates"
                    text="Milestones of my learning journey, validating skills and expertise."
                />

                {loading ? (
                    <div className="space-y-12">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Skeleton className='h-8 w-24 rounded-full' />
                                    <Skeleton className='h-0.5 flex-1 ' />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {[1, 2, 3].map((j) => (
                                        <Skeleton key={j} className="h-64 w-full rounded-lg" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-12">
                        {sortedYears.length > 0 ? (
                            sortedYears.map((year) => (
                                <div key={year} className="flex flex-col gap-6">
                                    {/* Year Header with Separator line */}
                                    <div className="flex items-center gap-4 text-gray-400 select-none">
                                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-black dark:bg-white">
                                            {year === 0 ? 'Misc' : year}
                                        </h2>
                                        <div className="h-px bg-gray-400 dark:bg-gray-700 flex-1" />
                                    </div>

                                    {/* Grid for that year */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {certificatesByYear[year]?.map((cert) => (
                                            <CertificateCard key={cert._id} certificate={cert} />
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                No certificates found.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}