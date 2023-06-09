import { FC, useEffect, useRef, useState } from "react";
import { useClick } from "react-babylonjs";
import { mainStore } from "../../../stores/MainStore";
import { observer } from "mobx-react-lite";
import { ESoundID, IPlayerSpotProps, RoomState } from "../../../types/types";
import CardsTooltip from "../BabylonUI/CardsTooltip";
import { usePlayerSpotCamera } from "../../../hooks/usePlayerSpotCamera";
import PlayerSpotChip from "./PlayerSpotChip";
import PlayerSpotMaterial from "./PlayerSpotMaterial";
import {
  PLAYER_SPOT_DIAMETER,
  PLAYER_SPOT_HEIGHT,
} from "../../../utils/consts";
import { placeBetOnPlayerSpot } from "../../../utils/playerSpot";
import { useMainStore } from "../../../hooks/useMainStore";
import { playSound } from "../../../utils/utils";

//playerSpot itself
const PlayerSpot: FC<IPlayerSpotProps> = observer(
  ({ points, position, rotation, status, index, endgameStatus }) => {
    const [playerSpotChips, setPlayerSpotChip] = useState<number[]>([]);
    const { roomState } = useMainStore().roomStore;
    const playerSpotRef = useRef(null);

    //adding chips on spot
    useClick(() => {
      const selectedBet = mainStore.userStore.selectedChip;
      if (selectedBet > 0) {
        placeBetOnPlayerSpot(mainStore, index, selectedBet);
        playSound(ESoundID.Chip);

        //need it to render chips on playerSpot
        setPlayerSpotChip(() => [...playerSpotChips, selectedBet]);
      }
    }, playerSpotRef);

    //clear chips array at the end
    useEffect(() => {
      if (roomState === RoomState.ending) {
        setPlayerSpotChip(() => []);
      }
    }, [roomState]);

    //changing camera angle if playerSpot is active
    usePlayerSpotCamera(status, rotation._y);

    return (
      <>
        <glowLayer name="glow-layer" intensity={0.4} blurKernelSize={20} />

        <cylinder
          ref={playerSpotRef}
          name={`playerSpot${index}`}
          height={PLAYER_SPOT_HEIGHT}
          diameter={PLAYER_SPOT_DIAMETER}
          position={position}
          isVisible={roomState === RoomState.betting}
          disposeInstanceOnUnmount
        >
          <CardsTooltip points={points} endgameStatus={endgameStatus} />

          <PlayerSpotMaterial playerSpotChipsLength={playerSpotChips.length} />
        </cylinder>

        {/*putting chips on spot */}
        {playerSpotChips.map((chip, i) => (
          <PlayerSpotChip
            key={chip + i + Date.now()}
            position={position}
            chip={chip}
            roomState={roomState}
          />
        ))}
      </>
    );
  }
);

export default PlayerSpot;
