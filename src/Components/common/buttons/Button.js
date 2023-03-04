import React from "react";

const OWButton = ({ className, children, onClick, ...props }) => (
  <button className={`${className} btns`} onClick={onClick} {...props}>
    {children}
  </button>
);
export default OWButton;
