import { FC } from "react";
import { observer } from "mobx-react-lite";
import { BG_SOUND_ID } from "../../utils/consts";
import { useMainStore } from "../../hooks/useMainStore";

interface SoundsContainerProps {}

const SoundsContainer: FC<SoundsContainerProps> = observer(() => {
  const { isMuted } = useMainStore().settingsStore;
  return (
    <div style={{ position: "fixed", top: -100, left: -100 }}>
      <audio
        muted={isMuted}
        loop={true}
        id={BG_SOUND_ID}
        src={"sounds/background.mp3" as string}
        autoPlay={true}
      />
    </div>
  );
});

export default SoundsContainer;
