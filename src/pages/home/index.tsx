import { HomeSection } from "@/sections/home";
import { lazy } from "react";

const AboutSection = lazy(() => import('@/sections/about'));
const ContactSection = lazy(() => import('@/sections/contact'));
const ExperienceSection = lazy(() => import('@/sections/experience'));
const GithubSection = lazy(() => import('@/sections/github'));
const ProjectSection = lazy(() => import('@/sections/project'));
const SkillSection = lazy(() => import('@/sections/skills').then(module => ({ default: module.SkillSection })));
const StatsSection = lazy(() => import('@/sections/stats'));

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <StatsSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <GithubSection />
      <ContactSection />
    </>
  );
}