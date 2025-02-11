import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import WelcomeMessage from "../components/WelcomeMessage.jsx";
import WelcomePhone from "../components/WelcomePhone.jsx";
import Introduction from "../components/Introduction.jsx";
import Footer from "../components/Footer.jsx";
import UserGroups from "../components/UserGroups.jsx";
import MailingListButton from "../components/MailingListButton.jsx";
import PhoneSlideShow from "../components/PhoneSlideShow.jsx";
import DownloadHilfe from "../components/DownloadHilfe.jsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const WelcomeStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to bottom, #424242 0%, #8B8B8B 100%)",
  color: "#fff",
  padding: "0",
  margin: "0",
}

const IntroductionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const FeaturesStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 50px 50px 150px",
}

const DownloadHilfeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
}

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <>
      <div style={WelcomeStyle}>
        <WelcomeMessage />
        <WelcomePhone />
      </div>
      <div style={IntroductionStyle}>
        <Introduction />
        <MailingListButton />
        <UserGroups />
      </div>
      <div style={FeaturesStyle}>
        <PhoneSlideShow/>
      </div>
      <div style={DownloadHilfeStyle}>
        <DownloadHilfe />
      </div>
      <Footer />
    </>
  );
}
