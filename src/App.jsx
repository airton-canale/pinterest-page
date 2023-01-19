import BackgroundImage from "./components/BackgroundImage";
import DestinyGrid from "./components/DestinyGrid";
import Footer from "./components/Footer";
import StartupDesigned from "./components/StartupDesigned";

function App() {
  return (
    <>
      <BackgroundImage />
      <DestinyGrid />
      <StartupDesigned />
      <StartupDesigned inverted />
      <Footer />
    </>
  );
}

export default App;
