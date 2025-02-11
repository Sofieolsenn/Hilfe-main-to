import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faWifi, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import FeaturePills from "./FeaturePills";

const HeadingStyle = {
    color: '#fff',
    fontSize: "50px",
    margin: '0',
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: '50px',
    marginTop: '50px',
    lineHeight: '1.2',
}

const ContainerStyle = {
    display: "grid",
    gridTemplateColumns: '1fr 1px 1fr',
    gap: '30px',
    height: "760px",
}

const DividerStyle = {
    borderLeft: '1px solid #fff',
    borderRadius: "5px",
}

const ColumnOneStyle = {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "30px 0px",
    height: "100%",
}

const ColumnTwoStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 0px",
    height: "100%",
}

const ItemOneStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    fontSize: "20px",
}

const IconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    backgroundColor: "#777",
    borderRadius: "40px",
    color: "#9d9d9d",
    border: "1px solid #a5a5a5",
    boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.22)",
}

const TextStyle = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "100",
    textAlign: "right",
}

const TextStyle2 = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "100",
}

const Introduction = () => {
    return (
        <div>
            <h3 style={HeadingStyle}>Tryk på én knap og del din <br />lokation for øget tryghed. Gratis.</h3>
            <FeaturePills />
            <div style={ContainerStyle}>
                <div style={ColumnOneStyle}>
                    <div style={ItemOneStyle}>
                        <div style={IconStyle}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <p style={TextStyle}>Del din lokation når du <br /> føler dig utryg.</p>
                    </div>
                    <div style={ItemOneStyle}>
                        <div style={IconStyle}>
                            <FontAwesomeIcon icon={faWifi} />
                        </div>
                        <p style={TextStyle}>Ét tryk for mere sikkerhed i <br />udsatte situationer.</p>
                    </div>
                </div>
                <div style={DividerStyle}></div>
                <div style={ColumnTwoStyle}>
                    <div>
                        <div style={IconStyle}>
                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                        </div>
                        <p style={TextStyle2}>Dine nærmeste dår besked <br /> så du aldrig er alene.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;