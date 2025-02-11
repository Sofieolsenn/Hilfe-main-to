import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUserPlus, faUserFriends, faLaughBeam, faCube } from "@fortawesome/free-solid-svg-icons"; // Importing multiple icons
import MailingListButton2 from "./MailingListButton2";

const Maincontainer = {

};

const container = {
  height: "650px",
  width: "1600px",
  borderRadius: "100px",
  display: "flex",
  border: "1px solid white",
};

const sidebar = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderRight: "1px solid white",
  flex: 0.2,
  backgroundColor: "rgba(0, 0, 0, 0.3", // Sort baggrund med lav opacity
  borderTopLeftRadius: "100px", // Rund hjørne på venstre top
  borderBottomLeftRadius: "100px", // Rund hjørne på højre top
};

// Step button style with hover effect for zoom
const stepbutton = (isActive) => ({
  width: "90px", // Bredde af knappen
  height: "90px", // Højde af knappen
  margin: "10px", // Margin omkring knappen
  borderRadius: "50%", // Runde knapper
  border: "1px solid white", // Hvid kant omkring knappen
  background: "none", // Ingen baggrundsfarve
  color: "white", // Hvid tekstfarve
  fontSize: "30px", // Størrelse på tallet i knappen
  cursor: "pointer", // Markerer knappen som klikbar
  fontWeight: "100", // Lettere font vægt
  opacity: isActive ? 1 : 0.5,  // Hvis knappen er aktiv, sætter vi opaciteten til 1, ellers lavere
  transition: "opacity 0.3s, transform 0.3s", // Smooth transition for ændring i opacitet og zoom
  transform: isActive ? "scale(1.1)" : "scale(1)", // Zoomeffekt når knappen er aktiv
  // Når musen hover over knappen, gør den større
  ':hover': {
    transform: "scale(1.2)", // Zoom ind når man hover
    transition: "transform 0.2s ease-in-out", // Smooth overgang til zoom
  },
});

const main = {
  flex: 0.8,
  color: "rgba(255, 255, 255, 0.5)", // Hvid tekst med 50% opacitet
  padding: "5px 100px",
  borderRight: "0.5px solid white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3", // Sort baggrund med lav opacity
};

const mainTwo = {
  flex: 0.9,
  color: "white",
  padding: "100px",
  fontSize: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
  flexDirection: "column",
};

const h2 = {
  fontSize: "44px",
  lineHeight: "20px",
};

const p = {
  fontSize: "25px",
  maxWidth: "400px",
  textAlign: "center",
  marginTop: "20px",
  lineHeight: "35px",
};
const p2 = {
  fontSize: "35px",
  maxWidth: "400px",
  marginTop: "20px",
  lineHeight: "45px",
};

const iconContainer = {
  minWidth: "400px",
  minHeight: "350px",
  backgroundColor: "rgba(0, 0, 0, 0.2", // Sort baggrund med lav opacity
  borderRadius: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function DownloadHilfe() {
  // Use state to store the text and icon to display based on the button clicked
  const [text, setText] = useState("Download Hilfe appen på App Store eller Google Play.");
  const [activeStep, setActiveStep] = useState(1); // State to track the active step
  const [currentIcon, setCurrentIcon] = useState(faDownload); // Initial icon

  // Function to handle button click and change text and icon
  const handleButtonClick = (step) => {
    setActiveStep(step); // Update the active step
    switch (step) {
      case 1:
        setText("Download Hilfe appen på App Store eller Google Play.");
        setCurrentIcon(faDownload); // Change icon
        break;
      case 2:
        setText("Tilføj venner du stoler på som kan prutte");
        setCurrentIcon(faUserPlus); // Change icon
        break;
      case 3:
        setText("Tryk på knappen når du føler dig utryk");
        setCurrentIcon(faUserFriends); // Change icon
        break;
      case 4:
        setText("Føl dig connected og glad når dine venner hjælper");
        setCurrentIcon(faLaughBeam); // Change icon
        break;
      case 5:
        setText("Tilføj appen i dine widgets og brug knappen nemt");
        setCurrentIcon(faCube); // Change icon
        break;
      default:
        setText("Download Hilfe appen på App Store eller Google Play.");
        setCurrentIcon(faDownload); // Default icon
    }
  };

  return (
    <div style={Maincontainer}>
      <div style={container}>
        <div style={sidebar}>
          <button style={stepbutton(activeStep === 1)} onClick={() => handleButtonClick(1)}>1</button>
          <button style={stepbutton(activeStep === 2)} onClick={() => handleButtonClick(2)}>2</button>
          <button style={stepbutton(activeStep === 3)} onClick={() => handleButtonClick(3)}>3</button>
          <button style={stepbutton(activeStep === 4)} onClick={() => handleButtonClick(4)}>4</button>
          <button style={stepbutton(activeStep === 5)} onClick={() => handleButtonClick(5)}>5</button>
        </div>
        <div style={main}>
          <h2 style={h2}>Hilfe tutorial</h2>
          <div style={iconContainer}>
            <FontAwesomeIcon icon={currentIcon} style={{ fontSize: "150px", color: "white", opacity: 0.5 }} />
          </div>
          <p style={p}>
            {text}
          </p>
        </div>
        <div style={mainTwo}>
            <p style={p2}>Download appen og opret dig nu. Det er mega nemt og dejligt med kun 4 trin  prufis.</p>
            <MailingListButton2 />
        </div>
      </div>
    </div>
  );
}
