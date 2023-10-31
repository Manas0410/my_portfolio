import ExperienceCard from "./ExperienceCard";
import "./expStyles.css";

const ExperiecePage = () => {
  const expData = [
    {
      name: "Front-end Developer",
      company: "Wipro",
      location: "Bangalore",
      tenure: "April-2022 - Present",
      role: "Expertise in Reactjs, Redux, JavaScript, HTML, and CSS practical application of academic concepts Excellent teamwork and collaboration abilities",
      tech: [
        "./React-icon.svg.png",
        "./html.png",
        "./css.png",
        "./javascript.png",
      ],
    },
    {
      name: "Freelancer",
      company: "Online",
      location: "Remote",
      tenure: "May-2023 - Present",
      role: "Creating awesome applications on frontend level for customers",
      tech: [
        "./React-icon.svg.png",
        "./html.png",
        "./css.png",
        "./javascript.png",
        "./typescript.png",
        "./tailwind.png",
        "./bootstrap.png",
      ],
    },
    {
      name: "Full-Stack Developer",
      company: "VSS (Coding Bootcamp)",
      location: "Remote",
      tenure: "December-2022 - Present",
      role: "Working on and creating some real life applications with the team of experienced engineers",
      tech: [
        "./React-icon.svg.png",
        "./html.png",
        "./css.png",
        "./javascript.png",
        "./typescript.png",
        "./tailwind.png",
        "./bootstrap.png",
        "/node.png",
        "./express.png",
      ],
    },
    //   {
    //     name: "",
    //     company: "",
    //     location: "",
    //     role: "",
    //     tech: [],
    //   },
  ];
  return (
    <div>
      <h1 className="projectHeading">EXPERIENCE</h1>
      <div className="expPageContainer">
        {expData.map((items, i) => {
          return (
            <div key={i} className="expSection">
              <ExperienceCard
                name={items.name}
                company={items.company}
                location={items.location}
                tenure={items.tenure}
                role={items.role}
                tech={items.tech}
              />
              <div className="hiddenExpLine">
                <div className="hiddenLine"></div>
                <span className="material-symbols-outlined">stat_0</span>
                <div className="hiddenLine"></div>
              </div>
              <div className="hiddenExp"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperiecePage;
