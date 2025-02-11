import React from 'react'

export default function MailingListButton2() {
  const buttonStyle = {
    display: "inline-block",
    padding: "30px 100px",
    border: "1px solid white", // Hvid kant
    color: "white", // Hvid tekst
    textAlign: "center",
    textDecoration: "none", // Fjern understregning
    borderRadius: "100px", // Rundede hjørner
    fontSize: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease", // Smooth transition for background color
  };

  return (
    <div>
      <a href="#" style={buttonStyle}>
        Tilmeld dig ventelisten nu
      </a>
    </div>
  )
}
