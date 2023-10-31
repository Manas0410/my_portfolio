/* eslint-disable react/prop-types */
import "./projectStyles.css";
const ProjectCard = ({ name, link, about, tech }) => {
  return (
    <div className="projectCard">
      <div>
        <div className="projectHeader">
          <div className="projectName">{name}</div>
          <div className="projectLink">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">link</span>
            </a>{" "}
          </div>
        </div>
        <div className="projectLine"></div>
      </div>
      <div className="projectAbout">{about} </div>
      <div className="projectTech">
        {tech.map((item, i) => {
          return (
            <div key={i} className="projectTechContainer">
              <img src={item} className="projectSkill" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
