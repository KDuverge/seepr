import React, { useContext } from "react";

import Github from "../../images/github.jsx";

import "./PR.css";
import { ThemeContext } from '../../store/index';

function PR() {
  const {theme} = useContext(ThemeContext);
  const fill = theme === 'light' ? 'black' : 'white';

  return (
    <div className="PR">
			<Github fill={fill} />
      <div className="PR__Branch-Name">feature-EMAIL-719-clean-up</div>
      <div className="PR__Reviewers">+2</div>
      <div className="PR__Created">April, 2nd 2020</div>
      <div className="PR__Status"></div>
    </div>
  );
}

export default PR;
