import { FC } from "react";
import { SoundType } from "../../types/types";

interface SoundsContainerProps {}
export const BG_SOUND_ID = SoundType.Background;
const SoundsContainer: FC<SoundsContainerProps> = () => {
  return (
    <div style={{ position: "fixed", top: -100, left: -100 }}>
      <audio
        loop={true}
        id={BG_SOUND_ID}
        src={"sounds/background.mp3" as string}
        autoPlay={true}
      />
    </div>
  );
};

export default SoundsContainer;
