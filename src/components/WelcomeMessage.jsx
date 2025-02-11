import React from "react";
import "../css/global.css";

const WelcomeContainerStyle = {
    marginTop: "120px",
}

const HeaderStyle = {
    fontSize: '64px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '20px',
    background: 'linear-gradient(to right, #ffffff, #7a7a7a)', // change to left to right
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.1',
};

const SecondHeaderStyle = {
    fontSize: '32px',
    textAlign: "center",
    fontWeight: "light",
    margin: "0",
    lineHeight: '1.1',
}

const WelcomeMessage = () => {
    return (
        <div style={WelcomeContainerStyle}>
            <h1 style={HeaderStyle}>Hold dine venner opdateret <br></br> og værn om hinanden.</h1>
            <h2 className="light" style={SecondHeaderStyle}>Hilfe er en app hvor du kan føle dig tryk <br></br>  igennem ét tryk. Uden omkostninger</h2>
        </div>
    );
};

export default WelcomeMessage;