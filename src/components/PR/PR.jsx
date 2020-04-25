import React from "react";

import GitHub from "../../images/github.svg";

import "./PR.css";

function PR() {
  return (
    <div className="PR">
      <img className="PR__Brand" src={GitHub} alt="Github" width="20" height="20" />
      <div className="PR__Branch-Name">feature-EMAIL-719-clean-up</div>
      <div className="PR__Reviewers">+2</div>
      <div className="PR__Created">April, 2nd 2020</div>
      <div className="PR__Status"></div>
    </div>
  );
}

export default PR;
