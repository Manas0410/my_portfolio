/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./headerStyle.css";
import { useEffect, useState } from "react";
const HeaderP = ({ setPageFlag, pageFlag }) => {
  const [darkTheme, toggleDarkTheme] = useState(false);
  const flagdata = {
    homepage: false,
    skill: false,
    project: false,
    exp: false,
    resume: false,
  };
  const pageToggle = (name) => {
    // const { name } = e.target;
    console.log(name);
    if (pageFlag[name] === true) {
      return;
    }
    setPageFlag((prev) => {
      return {
        ...flagdata,
        [name]: true,
      };
    });
  };
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
  }, [darkTheme]);
  return (
    <div className={darkTheme ? "darkheader" : "lightheader"}>
      <div className="headerContainer">
        <div
          onClick={() => {
            pageToggle("homepage");
          }}
        >
          <div className="nameIconContainer">
            <div>
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div className="myname">MANAS SRIVASTAVA</div>
          </div>
        </div>
        <div className="componentNameContainer">
          <div
            onClick={() => {
              pageToggle("skill");
            }}
            className="links"
          >
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div className="name">Skills</div>
            </div>
          </div>
          <div
            onClick={() => {
              pageToggle("project");
            }}
            className="links"
          >
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">deployed_code</span>
              </div>
              <div className="name">Projects</div>
            </div>
          </div>
          <div
            onClick={() => {
              pageToggle("exp");
            }}
            className="links"
          >
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">stack_star</span>
              </div>
              <div className="name">Experience</div>
            </div>
          </div>
          <div
            onClick={() => {
              pageToggle("resume");
            }}
            className="links"
          >
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">
                  quick_reference_all
                </span>
              </div>
              <div className="name">Resume</div>
            </div>
          </div>
        </div>
        <div className="nightModeicon ">
          <div>
            {darkTheme ? (
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  toggleDarkTheme(false);
                }}
              >
                light_mode
              </span>
            ) : (
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  toggleDarkTheme(true);
                }}
              >
                dark_mode
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="underLine"></div>
    </div>
  );
};

export default HeaderP;
