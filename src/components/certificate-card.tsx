import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface CertificateCardProps {
    certificate: CertificateData;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
    // Format date if valid, otherwise fallback
    const formattedDate = (() => {
        try {
            return certificate.issueDate
                ? format(new Date(certificate.issueDate), 'MMM yyyy')
                : 'Date N/A';
        } catch {
            return 'Invalid Date';
        }
    })();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="group h-full"
        >
            <div className="bg-white dark:bg-[#1F1C1C] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-transparent hover:border-gray-200 dark:hover:border-gray-800">

                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        draggable={false}
                    />

                    {/* Overlay with View Button (visible on hover) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                            onClick={() => window.open(certificate.imageUrl, '_blank')}
                            className="bg-white text-black px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <ExternalLink size={16} />
                            View Certificate
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <Badge variant="outline" className="text-xs font-normal opacity-70">
                            {formattedDate}
                        </Badge>
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            {certificate.issuer}
                        </span>
                    </div>

                    <h3 className="text-lg font-semibold text-black dark:text-white line-clamp-2 mb-2 transition-colors">
                        {certificate.title}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
}
