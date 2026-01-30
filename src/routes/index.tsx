import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/home';
import NotFoundPage from '@/pages/error/404';
import DetailProject from '@/pages/projects/detail';
import ProjectsPage from '@/pages/projects';
import CertificatesPage from '@/pages/certificates';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/*" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/projects/:slug" element={<DetailProject />} />

            {/* error page 404 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}