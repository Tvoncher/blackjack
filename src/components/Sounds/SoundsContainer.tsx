import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../hooks/useMainStore";
import { ESoundID } from "../../types/types";

interface SoundsContainerProps {}

const SoundsContainer: FC<SoundsContainerProps> = observer(() => {
  const { isMuted } = useMainStore().settingsStore;
  return (
    <div style={{ position: "fixed", top: -100, left: -100 }}>
      <audio
        muted={isMuted}
        loop={true}
        id={ESoundID.Background}
        src={"sounds/background.mp3" as string}
        autoPlay={true}
      />
      <audio id={ESoundID.Chip} src={"sounds/chip.mp3" as string} />
      <audio id={ESoundID.Win} src={"sounds/win.mp3" as string} />
      <audio id={ESoundID.Lose} src={"sounds/lose.mp3" as string} />
    </div>
  );
});

export default SoundsContainer;
