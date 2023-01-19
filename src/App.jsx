import BackgroundImage from "./components/BackgroundImage";
import DestinyGrid from "./components/DestinyGrid";
import StartupDesigned from "./components/StartupDesigned";


function App() {
  return (
    <>
      <BackgroundImage />
      <DestinyGrid />
      <StartupDesigned  />
      <StartupDesigned inverted/>
    </>
  );
}

export default App;
