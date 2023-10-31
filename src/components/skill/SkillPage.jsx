import SkillP from "./SkillP";
import "./skillStyles.css";

const SkillPage = () => {
  const Fskill = [
    {
      skill: "HTML 5",
      address: "./html.png",
    },
    {
      skill: "CSS 3",
      address: "./css.png",
    },
    {
      skill: "JAVASCRIPT",
      address: "./javascript.png",
    },
    {
      skill: "TYPESCRIPT",
      address: "./typescript.png",
    },
    {
      skill: "REACT",
      address: "React-icon.svg.png",
    },
    {
      skill: "BOOTSTRAP",
      address: "./bootstrap.png",
    },
    {
      skill: "TAILWIND",
      address: "./tailwind.png",
    },
    {
      skill: "SASS",
      address: "./sass.png",
    },
  ];
  const Bskill = [
    {
      skill: "NODE",
      address: "./node.png",
    },
    {
      skill: "EXPRESS",
      address: "./express.png",
    },
    {
      skill: "MONGO DB",
      address: "./mongo.png",
    },
  ];
  return (
    <div>
      <h1 className="projectHeading">SKILLS</h1>
      <h2 className="skillTypeHeading">FRONT-END SKILS</h2>
      <div className="skillContainerBox">
        {Fskill.map((item, i) => (
          <SkillP skill={item.skill} address={item.address} key={i} />
        ))}
      </div>
      <h2 className="skillTypeHeading">BACK-END SKILS</h2>

      <div className="skillContainerBox">
        {Bskill.map((item, i) => (
          <SkillP skill={item.skill} address={item.address} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
