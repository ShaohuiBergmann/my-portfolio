import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header-socials">
            <a href="https://github.com/ShaohuiBergmann" target="_blank">
                <BsLinkedin />
            </a>
            <a href="www.linkedin.com/in/shaohui-bergmann" target="_blank">
                <FaGithub />
            </a>
        </div>
    );
};

export default HeaderSocials;
