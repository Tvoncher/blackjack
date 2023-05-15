import { Color3 } from "@babylonjs/core/Maths/math";
import { action, makeObservable, observable } from "mobx";

export class SettingsStore {
  @observable
  public isMuted: boolean = false;

  @observable
  envColor = new Color3(0, 0.7, 1);

  public constructor() {
    makeObservable(this);
  }

  @action
  setMuted() {
    this.isMuted = !this.isMuted;
  }

  @action
  setEnvColor() {
    this.envColor = new Color3(Math.random(), Math.random(), Math.random());
  }
}
