import React from "react";
import "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
