import React from "react";

import "../src/styles/AppWrapper.css";

const AppWrapper = (props) => {
  return <div className="app">{props.children}</div>;
};

export default AppWrapper;
