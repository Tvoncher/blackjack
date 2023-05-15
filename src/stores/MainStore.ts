import { createContext } from "react";
import { PlayerSpotsStore } from "./PlayerSpotsStore";
import { configure, makeObservable, observable } from "mobx";
import { UserStore } from "./UserStore";
import { RoomStore } from "./RoomStore";
import { SettingsStore } from "./SettingsStore";

//handling all stores together
configure({ enforceActions: "always" });
export class MainStore {
  @observable
  playerSpotsStore: PlayerSpotsStore = new PlayerSpotsStore();
  @observable
  roomStore: RoomStore = new RoomStore();
  @observable
  userStore: UserStore = new UserStore();
  @observable
  settingsStore: SettingsStore = new SettingsStore();

  constructor() {
    makeObservable(this);
  }
}

export const mainStore = new MainStore();
export const MainStoreContext = createContext<MainStore>(mainStore);
