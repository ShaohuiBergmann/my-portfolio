import React from "react";
import "./header.css";
import CTA from "./CTA";
import profile from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I am</h5>
                <h1>Shaohui</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={profile} alt="" />
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
