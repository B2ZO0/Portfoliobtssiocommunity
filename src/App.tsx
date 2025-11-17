import { useState } from "react";
import { HeaderWithDropdown } from "./components/HeaderWithDropdown";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { CVSection } from "./components/CVSection";
import { VeilleTechnoSection } from "./components/VeilleTechnoSection";
import { VeilleCyberPage } from "./components/VeilleCyberPage";
import { EntreprisePage } from "./components/EntreprisePage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { CompetencesSection } from "./components/CompetencesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

type PageView = "main" | "veille" | "entreprise" | "project";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>("main");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");

  const handleViewProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage("project");
  };

  if (currentPage === "veille") {
    return <VeilleCyberPage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "entreprise") {
    return <EntreprisePage onBack={() => setCurrentPage("main")} />;
  }

  if (currentPage === "project") {
    return <ProjectDetailPage projectId={selectedProjectId} onBack={() => setCurrentPage("main")} />;
  }

  return (
    <div className="min-h-screen">
      <HeaderWithDropdown onNavigateToEntreprise={() => setCurrentPage("entreprise")} />
      <main>
        <HeroSection />
        <AboutSection onNavigateToEntreprise={() => setCurrentPage("entreprise")} />
        <ProjectsSection onViewProjectDetail={handleViewProject} />
        <EducationSection />
        <CVSection />
        <VeilleTechnoSection onViewDetails={() => setCurrentPage("veille")} />
        <CompetencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}