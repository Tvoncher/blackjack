import { assetsTask } from "../../assetsTask";
import { FC, useEffect, useState } from "react";
import { MeshAssetTask } from "@babylonjs/core/Misc/assetsManager";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { useAssetManager } from "react-babylonjs";
import Card from "./Card";
import { observer } from "mobx-react-lite";
import { mainStore } from "../../../stores/MainStore";
import { RoomState } from "../../../types/types";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { dealerSpotPosition } from "../../../utils/consts";

//displaying cards

export const CardsHandler: FC = observer(() => {
  const assetManagerResult = useAssetManager(assetsTask);
  const [cardMesh, setCardMesh] = useState<Mesh | null>(null);
  const dealerCards = mainStore.roomStore.dealerCards;

  //TODO: getting playerSpots from context. Each player spot is responsible for hand and bet
  const playerSpots = mainStore.playerSpotsStore.playerSpots;

  useEffect(() => {
    const cardTask = assetManagerResult.taskNameMap["card"] as MeshAssetTask;

    setCardMesh(() => cardTask.loadedMeshes[0] as Mesh);
  });

  return cardMesh ? (
    <>
      {mainStore.roomStore.roomState === RoomState.playing &&
        playerSpots.map((playerSpot) =>
          playerSpot.hand.map((handCard, i) => (
            <Card
              key={handCard.rank + handCard.suit + i}
              card={cardMesh}
              value={handCard.value}
              suit={handCard.suit}
              rank={handCard.rank}
              offset={i / 10}
              position={playerSpot.position}
              rotation={playerSpot.rotation}
            />
          ))
        )}

      {/*dealer cards*/}
      {mainStore.roomStore.roomState === RoomState.playing &&
        dealerCards.map((card, i) => (
          <Card
            key={card.rank + card.suit + i}
            card={cardMesh}
            value={card.value}
            suit={card.suit}
            rank={card.rank}
            offset={i / 10}
            position={dealerSpotPosition}
            rotation={
              dealerCards.length === 2 && i === 1
                ? new Vector3(0, 0, Math.PI)
                : Vector3.Zero()
            }
          />
        ))}
    </>
  ) : null;
});
