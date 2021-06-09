import React from "react";

export const Action = ({ title, amount, bottomTitle }) => (
  <div className="action_container">
    <div className="action_left"></div>
    <div className="action_right">
      <div className="action_title">{title}</div>
      <div className="action_amount">{amount}</div>
      <div className="action_bottom_title">{bottomTitle}</div>
    </div>
  </div>
);
