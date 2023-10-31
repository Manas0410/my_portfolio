import ExperiecePage from "../experience/ExperiecePage";
import ProjectPage from "../project/ProjectPage";
import ResumeDownloadButton from "../resume/ResumeP";
import SkillPage from "../skill/SkillPage";
import HomePageContent from "./HomePageContent";

const PortFolioHomePage = () => {
  return (
    <div>
      <HomePageContent />
      <SkillPage />
      <ProjectPage />
      <ExperiecePage />
      <ResumeDownloadButton />
    </div>
  );
};

export default PortFolioHomePage;
