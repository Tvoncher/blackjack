import { mainStore } from "../stores/MainStore";
import { PlayerSpotStatus } from "../types/types";

export const deactivatePlayerSpot = () => {
  const index = mainStore.playerSpotsStore.activePlayerSpotIndex;
  if (typeof index === "number") {
    mainStore.playerSpotsStore.setPlayerSpotStatus(
      index,
      PlayerSpotStatus.inactive
    );
  }
};

export const recalculatePoints = (recalcForDealer: boolean) => {
  const index = mainStore.playerSpotsStore.activePlayerSpotIndex;
  if (typeof index === "number") {
    mainStore.playerSpotsStore.recalculatePoints(index);
  }
  if (recalcForDealer) {
    mainStore.roomStore.recalculateDealerPoints();
  }
};

export const dealCard = (target: "player" | "dealer") => {
  //targetPlayerSpot represents targeted hand - playerSpot or dealer
  const newCard = mainStore.roomStore.takeCards(1);

  if (target === "player") {
    const index = mainStore.playerSpotsStore.activePlayerSpotIndex;
    if (typeof index === "number") {
      mainStore.playerSpotsStore.playerSpots[index].hand = [
        ...mainStore.playerSpotsStore.playerSpots[index].hand,
        ...newCard,
      ];
    }
  } else
    mainStore.roomStore.dealerHand = [
      ...mainStore.roomStore.dealerHand,
      ...newCard,
    ];
};
