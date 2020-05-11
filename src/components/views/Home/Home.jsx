import React, { useContext } from "react";

import { DispatchContext } from "../../../store";
import LoginButton from "../../Button/LoginButton";

import "./Home.css";
import { githubLogin } from "../../../store/prs/service";

function Home() {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="Home">
      <header className="Home__Header">
        <h1 className="Home__Header-Title">Welcome to SeePR</h1>
        <p className="Home__Header-Sub-Title">
          A place where you can see open PR's for your gitlab and github
          accounts
        </p>
      </header>
      <div className="Home__Login">
        <div className="Home__Buttons">
          <LoginButton
            text="Login with Github"
            provider="Github"
            onClick={githubLogin(dispatch)}
          />
          <LoginButton text="Login with Gitlab" provider="Gitlab" />
        </div>
      </div>
    </div>
  );
}

export default Home;
