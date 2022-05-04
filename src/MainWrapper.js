import React from "react";

import "../src/styles/MainWrapper.css";

const MainWrapper = (props) => {
  return <main className="email-view">{props.children}</main>;
};

export default MainWrapper;
