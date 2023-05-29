import { FC, useCallback } from "react";
import "./Menu.css";
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../../hooks/useMainStore";

const Menu: FC = observer(() => {
  const { settingsStore, userStore } = useMainStore();

  const handleVolume = useCallback(() => {
    settingsStore.setMuted();
  }, []);

  const handleEnvironment = useCallback(() => {
    settingsStore.setEnvColor();
  }, []);

  const handleDeposit = useCallback(() => {
    userStore.addToBalance(50);
  }, []);

  return (
    <div className="menu">
      {settingsStore.isMuted ? (
        <img
          className="menu_button volume_off"
          src="/images/button_volume_off.png"
          onClick={handleVolume}
          alt="volume"
        />
      ) : (
        <img
          className="menu_button volume_on"
          src="/images/button_volume_on.png"
          onClick={handleVolume}
          alt="volume"
        />
      )}

      <img
        className="menu_button env"
        src="/images/button_env.png"
        onClick={handleEnvironment}
        alt="volume"
      />

      <img
        className="menu_button deposit"
        src="/images/button_deposit.png"
        onClick={handleDeposit}
        alt="volume"
      />
    </div>
  );
});

export default Menu;
