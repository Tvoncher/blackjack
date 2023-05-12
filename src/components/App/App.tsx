import { MainStoreContext, mainStore } from "../../stores/MainStore";
import { useState } from "react";
import GameScene from "../GameScene/GameScene";
import GreetingScreen from "../GreetingScrene/GreetingScreen";
import "./App.css";
import SoundsContainer from "../Sounds/SoundsContainer";

function App() {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  return (
    <MainStoreContext.Provider value={mainStore}>
      <div className="app">
        {isStarted ? (
          <GameScene />
        ) : (
          <GreetingScreen setIsStarted={setIsStarted} />
        )}
      </div>
      <SoundsContainer />
    </MainStoreContext.Provider>
  );
}

export default App;
