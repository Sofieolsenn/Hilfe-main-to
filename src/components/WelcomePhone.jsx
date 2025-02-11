import React from "react";
import PhonePlaceholder from "../assets/phone-placeholder.png";
import ReadMore from "./ReadMore";

const ContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const ImageStyle = {
    width: "1000px",
    height: "auto",
};

const WelcomePhone = () => {
    return (
        <div style={ContainerStyle} className="WelcomePhone">
            <img style={ImageStyle} src={PhonePlaceholder} alt="Phone placeholder" />
            <ReadMore />
        </div>
    );
};

export default WelcomePhone;