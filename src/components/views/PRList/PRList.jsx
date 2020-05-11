import React, { useContext } from "react";

import { StateContext } from "../../../store";
import PR from "../../../components/PR/PR";

import "./PRList.css";

function PRList() {
  const { prs } = useContext(StateContext);

  return (
    <div className="PRList">
      <div className="PRList__Table">
        <div className="PRList__Table-Header">
          <div className="left"></div>
          <div>Branch Name</div>
          <div className="right">Reviewers</div>
          <div className="right date-created">Date Created</div>
          <div className="right status">Status</div>
        </div>
        {prs.map((pr) => (
          <PR key={pr} />
        ))}
      </div>
    </div>
  );
}

export default PRList;
