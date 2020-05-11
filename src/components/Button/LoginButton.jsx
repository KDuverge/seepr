import React from "react";
import classnames from "classnames";

import "./LoginButton.css";

import Github from '../../images/github.jsx';
import Gitlab from '../../images/gitlab.jsx';

function LoginButton({ text, provider, onClick }) {
  return (
    <button
      className={classnames("Login__Button", {
        [`Login__Button-${provider}`]: provider,
			})}
			onClick={onClick}
    >
			{text}
      {provider === 'Github' && <Github fill="black" />}
      {provider === 'Gitlab' && <Gitlab />}
    </button>
  );
}

export default LoginButton;
