import React from "react";
import "./headline.css";

export const HeadLine = ({ txt, id }) => (
  <div id={id}>
    <div className="row h1 m-0 p-0">
      <div className="col-2"></div>
      <div className="text-center col-8">
        {txt}
      </div>
      <div className="col-2"></div>
    </div>
  </div>
);
