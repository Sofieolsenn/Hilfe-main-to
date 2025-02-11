import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "50px",
}

const PillStyle = {
    display: "flex",
    Flex: "1",
    alignItems: "center",
    gap: "10px",
    width: "fit-content",
    height: "70px",
    padding: "40px 40px 40px 25px",
    backgroundColor: "#676767",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "200",
    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.22)",
}

const IconStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "50px",
    color: "#676767",
}

const FeaturePills = () => {
    return (
        <div style={ContainerStyle}>
            <div style={PillStyle}>
                <FontAwesomeIcon style={IconStyle} icon={faCheck} />
                <p>Gratis</p>
            </div>
            <div style={PillStyle}>
                <FontAwesomeIcon style={IconStyle} icon={faCheck} />
                <p>Batterivenligt</p>
            </div>
            <div style={PillStyle}>
                <FontAwesomeIcon style={IconStyle} icon={faCheck} />
                <p>Reklamefrit</p>
            </div>
        </div>
    );
};

export default FeaturePills;