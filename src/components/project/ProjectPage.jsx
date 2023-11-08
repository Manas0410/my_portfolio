import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const projectData = [
    {
      name: "Apple UI",
      link: "https://taupe-moxie-aeeaa9.netlify.app/",
      about:
        " Create UI using HTML5 , CSS3, JavaScript, GitHub Ensured responsive design for compatibility across different screen sizes Implemented dynamic addition of data lists with JavaScript.",
      tech: ["./html.png", "./css.png", "./javascript.png", "./bootstrap.png"],
    },
    {
      name: "React Shopping App",
      link: "https://stupendous-creponne-3d7cd2.netlify.app/",
      about:
        "The app offers infinite scrolling, pagination, error handling, Redux integration, data synchronization, async data fetching, and optimized performance. These features create a smooth user experience for product search, cart management, and navigation",
      tech: [
        "./React-icon.svg.png",
        "./html.png",
        "./css.png",
        "./javascript.png",
      ],
    },
    {
      name: "Swiggy UI",
      link: "https://creative-parfait-6bb492.netlify.app/",
      about:
        "Developed Swiggy UI using HTML and Vanilla CSS. Implemented dynamic addition of food cards with JavaScript.",
      tech: ["./html.png", "./css.png", "./javascript.png"],
    },
    // {
    //   name: "",
    //   link: "",
    //   about: "",
    //   tech: "",
    // },
  ];
  return (
    <div>
      <h1 className="projectHeading">PROJECTS</h1>
      <div className="projectCardContainer">
        {projectData.map((item, i) => (
          <ProjectCard
            name={item.name}
            link={item.link}
            about={item.about}
            tech={item.tech}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
