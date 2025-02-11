import React from "react";
import MailingListButton from "./MailingListButton";
import Placeholder from "../assets/phone-slider-placeholder.png";

const ContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "70px",
    lineHeight: "1.3",
    
}

const HeaderStyle = {
    fontSize: '60px',
    color: "#fff",
    fontWeight: "200",
}

const SecondHeaderStyle = {
    fontSize: '30px',
    color: "#fff",
    fontWeight: "200",
}

const ImageStyle = {
    height: "700px",
}

const PhoneSlideShow = () => {
    return (
        <div style={ContainerStyle}>
            <div>
                <h1 style={HeaderStyle}>Mange apps er komplekse <br />og har flere trin, <b>men Hilfe <br />har én knap - én funktion.</b></h1>
                <h3 style={SecondHeaderStyle}>Nemt. Simpelt. <b>Gratis og ad free <br />uden omkostninger.</b></h3>
                <MailingListButton />
            </div>
            <div>
                <img style={ImageStyle} src={Placeholder} alt="" />
            </div>
        </div>
    );
};

export default PhoneSlideShow;