import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import ExperienceSection from "@/sections/experience";
import GithubSection from "@/sections/github";
import { HomeSection } from "@/sections/home";
import ProjectSection from "@/sections/project";
import { SkillSection } from "@/sections/skills";
import StatsSection from "@/sections/stats";

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