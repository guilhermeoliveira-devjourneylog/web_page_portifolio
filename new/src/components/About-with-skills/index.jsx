import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import Split from "../Split";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3 className="main-title wow" data-splitting>
                  My mission is design develop the best Websites around.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Guilherme Oliveira. Currently Web Developer at startup Bybeet 
                creating technology on a voluntary basis.
                Collaborating for the business to develop.
                I am actively looking for new knowledge and practical application whether in Software
                Engineering, Front-end and Back-end.
              </p>
              <a href="#0" className="simple-btn mt-40">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">UI / UX Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="45%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Front-end</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Back-end</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="50%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">CMS</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
