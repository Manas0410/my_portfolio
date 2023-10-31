/* eslint-disable react/prop-types */
import "./expStyles.css";
const ExperienceCard = ({ name, company, location, tenure, role, tech }) => {
  return (
    <div className="expcardContainer">
      <div className="expcardLeft">
        <div className="">
          <svg
            className="expLeftImage"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            id="company-accent-4-on-dark"
          >
            <path fill="#38434f" d="M0 0h128v128H0z" />
            <path fill="#9db3c8" d="M48 16h64v112H48z" />
            <path fill="#788fa5" d="M16 80h32v48H16z" />
            <path fill="#56687a" d="M48 80h32v48H48z" />
          </svg>
        </div>
      </div>
      <div className="expLine"></div>
      <div className="expcardRight">
        <div className="expName">{name}</div>
        <div className="expCompany">
          <div className="">
            <span className="material-symbols-outlined">
              source_environment
            </span>
          </div>
          <div className="">{company} </div>
        </div>
        <div className="expLocation">
          <div className="">
            <span className="material-symbols-outlined">pin_drop</span>
          </div>
          <div className="">{location} </div>
        </div>
        <div className="expTenure">{tenure}</div>
        <div className="expRole">{role} </div>
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
    </div>
  );
};

export default ExperienceCard;
