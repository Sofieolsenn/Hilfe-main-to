import React from "react";
import '../css/global.css';

const ContainerStyle = {
    margin: "50px 0",
}


const MailingListButton = () => {
    return (
        <div style={ContainerStyle}>
            <a className="navbar-cta-button" href="#">Tilmeld dig ventelisten nu</a>
        </div>
    );
};

export default MailingListButton;