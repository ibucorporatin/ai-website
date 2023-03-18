import React from "react";
import CopyRightContent from "./CopyRightContent";
import SocialMedia from "./SocialMedia";
import "../../assets/css/copyRight.css";

const CopyRight = () => {
  return (
    <div className="copyRight-container  d-flex align-items-center justify-content-between">
      <div className="container d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap">
        <CopyRightContent />
        <SocialMedia />
      </div>
    </div>
  );
};

export default CopyRight;
