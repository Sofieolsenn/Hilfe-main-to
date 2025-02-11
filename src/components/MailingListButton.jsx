import React from "react";
import '../css/global.css';

const ContainerStyle = {
    margin: "50px 0",
    fontSize: "20px",
}

const MailingListButton = () => {
    return (
        <div style={ContainerStyle}>
            <a className="navbar-cta-button" href="#">Tilmeld dig ventelisten</a>
        </div>
    );
};

export default MailingListButton;