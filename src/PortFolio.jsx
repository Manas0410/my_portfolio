import { useState } from "react";
import HeaderP from "./header/headerP";
import ProjectPage from "./components/project/ProjectPage";
import ExperiecePage from "./components/experience/ExperiecePage";
import ResumeDownloadButton from "./components/resume/ResumeP";
import SkillPage from "./components/skill/SkillPage";
import PortFolioHomePage from "./components/homePage/HomePage";

const PortFolio = () => {
  const [pageFlag, setPageFlag] = useState({
    homepage: true,
    skill: false,
    project: false,
    exp: false,
    resume: false,
  });
  return (
    <div>
      <HeaderP setPageFlag={setPageFlag} pageFlag={pageFlag} />
      {pageFlag.homepage && <PortFolioHomePage />}
      {pageFlag.skill && <SkillPage />}
      {pageFlag.project && <ProjectPage />}
      {pageFlag.exp && <ExperiecePage />}
      {pageFlag.resume && <ResumeDownloadButton />}
    </div>
  );
};

export default PortFolio;
