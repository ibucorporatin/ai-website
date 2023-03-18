import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <div className="d-flex align-content-center my-3">
      <GrFacebookOption className="copyRight-social-icon" />
      <FaTwitter className="copyRight-social-icon" />
      <AiFillLinkedin className="copyRight-social-icon" />
      <AiFillInstagram className="copyRight-social-icon" />
      <AiFillYoutube className="copyRight-social-icon" />
    </div>
  );
};

export default SocialMedia;
