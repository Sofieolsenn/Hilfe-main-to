import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faPersonDress, faPersonBreastfeeding, faClock } from "@fortawesome/free-solid-svg-icons";


const ContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "130px 350px",
}

const HeadingContainerStyle = {
    marginBottom: "20px",
}

const HeadingStyle = {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "200",
    textAlign: "center",
    margin: "0 0 20px 0",
    lineHeight: "1",
}

const SecondHeadingStyle = {
    color: "#fff",
    fontSize: "30px",
    fontWeight: "300",
    textAlign: "center",
    margin: "0",
    lineHeight: "1.2",
}

const GroupsContainerStyle = {
    display: "flex",
    marginTop: "30px",
    padding: "50px",
}

const GroupCardStyle = {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 50px",
    width: "400px",
    height: "250px",
}

const TextStyle = {
    color: "#bababa",
    textAlign: "center",
    fontWeight: "200",
    fontSize: "35px",
    lineHeight: "1.1",
}

const DividerStyle = {
    borderLeft: "1px solid #bababa"
}

const IconStyle = {
    color: "#bababa",
    fontSize: "50px",
}

const UserGroups = () => {
    return (
        <div style={ContainerStyle}>
            <div style={HeadingContainerStyle}>
                <h2 style={HeadingStyle}>Hilfe er skabt til alle, der <b>ønsker at værne om <br />deres nære relationer og egen tryghed.</b></h2>
                <p style={SecondHeadingStyle}>Appen er udviklet for at øge opmærksomheden om det enkelte <br />individs sårbarhed. Læs mere om os her.</p>
            </div>
            <div style={GroupsContainerStyle}>
                <div style={GroupCardStyle}>
                    <FontAwesomeIcon style={IconStyle} icon={faPeopleGroup} />
                    <h3 style={TextStyle}>Unge i sociale <br />miljøer</h3>
                </div>
                <div style={DividerStyle}></div>
                <div style={GroupCardStyle}>
                    <FontAwesomeIcon style={IconStyle} icon={faPersonDress} />
                    <h3 style={TextStyle}>kvinder der er <br />utrykke</h3>
                </div>
                <div style={DividerStyle}></div>
                <div style={GroupCardStyle}>
                    <FontAwesomeIcon style={IconStyle} icon={faPersonBreastfeeding} />
                    <h3 style={TextStyle}>forældre der er <br />bekymret</h3>
                </div>
                <div style={DividerStyle}></div>
                <div style={GroupCardStyle}>
                    <FontAwesomeIcon style={IconStyle} icon={faClock} />
                    <h3 style={TextStyle}>folk der har sent <br />fri??</h3>
                </div>
            </div>
        </div>
    );
};

export default UserGroups;