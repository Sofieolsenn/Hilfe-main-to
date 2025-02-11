import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ContainerStyle = {
    position: 'absolute',
    top: "900px",
    left: "50%",
    transform: "translateX(-50%)",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #fff',
    padding: '15px 40px',
    borderRadius: '20px',
}

const TextStyle = {
    margin: '0',
    fontWeight: '100',
}

const ReadMore = () => {
    return (
        <div style={ContainerStyle}>
            <h3 style={TextStyle}>Læs mere nu</h3>
            <FontAwesomeIcon style={TextStyle} icon={faChevronDown} />
        </div>
    );
};

export default ReadMore;
