/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./headerStyle.css";
import { useEffect, useState } from "react";
const HeaderP = () => {
  const [darkTheme, toggleDarkTheme] = useState(false);
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
  }, [darkTheme]);
  return (
    <div>
      <div className="headerContainer">
        <Link to={"./"} className="links">
          <div className="nameIconContainer">
            <div>
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div className="myname">MANAS SRIVASTAVA</div>
          </div>
        </Link>
        <div className="componentNameContainer">
          <Link to={"./"} className="links">
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div className="name">Skills</div>
            </div>
          </Link>
          <Link to={"./"} className="links">
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">deployed_code</span>
              </div>
              <div className="name">Projects</div>
            </div>
          </Link>
          <Link to={"./"} className="links">
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">stack_star</span>
              </div>
              <div className="name">Experience</div>
            </div>
          </Link>
          <Link to={"./"} className="links">
            <div className="nameIconContainer">
              <div>
                <span className="material-symbols-outlined">
                  quick_reference_all
                </span>
              </div>
              <div className="name">Resume</div>
            </div>
          </Link>
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
