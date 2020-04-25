import React, { useState } from "react";

import PR from "../../../components/PR/PR";

import "./PRList.css";

function PRList() {
  const [prs, setPrs] = useState([1, 2, 3]);

  return (
    <div className="PRList">
      <div className="PRList__Table">
        <div className="PRList__Table-Header">
          {/* <div></div> */}
          <div className="left"></div>
          <div>Branch Name</div>
          <div className="right">Reviewers</div>
          <div className="right date-created">Date Created</div>
          <div className="right status">Status</div>
        </div>
        {prs.map((pr) => (
          <PR />
        ))}
      </div>
    </div>
  );
}

export default PRList;
