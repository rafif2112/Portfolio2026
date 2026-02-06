import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const HomePage = lazy(() => import('@/pages/home'));
const NotFoundPage = lazy(() => import('@/pages/error/404'));
const DetailProject = lazy(() => import('@/pages/projects/detail'));
const ProjectsPage = lazy(() => import('@/pages/projects'));
const CertificatesPage = lazy(() => import('@/pages/certificates'));

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