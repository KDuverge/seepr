import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "./prs/reducer";
import themeReducer, { initialState as themeState } from './theme/reducer';

export const StateContext = createContext();
export const DispatchContext = createContext();
export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tState, tDispatch] = useReducer(themeReducer, themeState)

  return (
    <StateContext.Provider value={state}>
      <ThemeContext.Provider value={tState}>
        <DispatchContext.Provider value={dispatch}>
          <ThemeDispatchContext.Provider value={tDispatch}>
            {children}
          </ThemeDispatchContext.Provider>
        </DispatchContext.Provider>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
};
