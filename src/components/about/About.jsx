import React from "react";
import "./about.css";
import Black from "../../images/blacklarulog.jpg";
import Award from "../../images/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={Black} alt="" className="a-img" />
        </div>
        <div className="a-card bg"></div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil qui
          aliquid, blanditiis harum illum quisquam!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          amet nulla fugit consequuntur. Officiis placeat omnis quidem corporis
          deleniti ut dicta, animi consequuntur ea dolorem hic laboriosam?
          Voluptatem, sit rerum.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Award 2021</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi dicta sint in official provident. Veritatis saepe minus
              dolores corporis iure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
