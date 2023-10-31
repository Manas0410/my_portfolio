/* eslint-disable react/prop-types */
import "./skillStyles.css";
const SkillP = ({ skill, address }) => {
  return (
    <div>
      <div className="card">
        <div className="skill">{skill}</div>
        <div className="skillImageContainer">
          <img src={address} className="skillImage" />
        </div>
      </div>
    </div>
  );
};

export default SkillP;
