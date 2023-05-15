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
      <svg
        className="menu_svg"
        id="volume_button"
        onClick={handleVolume}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title></title>
          <g id="Complete">
            <g id="volume-up">
              <polygon
                fill="none"
                points="2.9 9 6.9 9 11.9 3 11.9 21 6.9 16 1.9 16 1.9 9 2.9 9"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
              {!settingsStore.isMuted && (
                <>
                  <path
                    d="M15.5,19.5a7.3,7.3,0,0,0,7-7.5,7.3,7.3,0,0,0-7-7.5"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>

                  <path
                    d="M15.5,15a3,3,0,0,0,0-6"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </>
              )}
            </g>
          </g>
        </g>
      </svg>

      <svg
        className="menu_svg"
        id="settings_button"
        onClick={handleEnvironment}
        fill="#000000"
        viewBox="-1.6 -1.6 19.20 19.20"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(90)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M9 13.829A3.004 3.004 0 0 0 11 11a3.003 3.003 0 0 0-2-2.829V0H7v8.171A3.004 3.004 0 0 0 5 11c0 1.306.836 2.417 2 2.829V16h2v-2.171zm-5-6A3.004 3.004 0 0 0 6 5a3.003 3.003 0 0 0-2-2.829V0H2v2.171A3.004 3.004 0 0 0 0 5c0 1.306.836 2.417 2 2.829V16h2V7.829zm10 0A3.004 3.004 0 0 0 16 5a3.003 3.003 0 0 0-2-2.829V0h-2v2.171A3.004 3.004 0 0 0 10 5c0 1.306.836 2.417 2 2.829V16h2V7.829zM12 6V4h2v2h-2zM2 6V4h2v2H2zm5 6v-2h2v2H7z"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>

      <svg
        className="menu_svg"
        id="deposit_button"
        onClick={handleDeposit}
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <path
          id="XMLID_1_"
          d="M245,176v80H10v-80h57v22H43v30h167v-30h-19v-22H245z M29,111V0h58v23.7C97,27.5,105.1,35,108.6,45H182v26 v147H75v-59.4c-1,0.2-1.5,0.2-2,0.2c-1.1,0-1.8-0.2-2.3-0.2c-0.9-0.3-2.1-0.7-2.8-1.2c-1-0.7-1.9-1.8-2.6-2.7 c-0.5-0.9-0.9-2-1.1-2.8c-0.2-0.7-0.1-1.6-0.1-2.5v-46.3c0-1.9-1.9-3.8-4-3.8c-1.9,0-4,1.6-4,3.8v36.7c-1,0-1.6,0-2.1-0.2 c-3.1-0.7-6-2.8-7-5.8c-0.5-1-0.9-2.3-0.9-3.5V99.3c0-1.9-1.4-3.8-3.5-3.8c-1.9,0-3.5,1.6-3.5,3.8v21.3C34,120.6,29,116.4,29,111z  M108,132h5c1,6,4.7,8.4,8.9,8.4c4.2,0,7-2.6,8.9-7.8c1.6-3.8,2.4-5.6,4.4-5.6c1.6,0,3,1.6,3,4.5c0,3-0.9,5-1.4,6.3l5.4,1.5 c0.9-1.7,1.6-4.3,1.6-7.3h4.3v-4h-4.5c-1-5-4.4-7.8-8.7-7.8c-4.4,0-7.2,3.5-8.9,8.6c-1.4,3.7-2.4,5.1-4.4,5.1s-3.3-1.8-3.3-4.9 c0-3,0.9-6,1.9-7.7l-5.6-1.5c-0.7,1.6-1.7,5.3-1.7,8.3H108V132z M83,194.1c7.9,2.3,14.2,8.6,16.6,16.6l58.8-0.1 c2.4-7.9,8.7-14.2,16.6-16.5V70c-8-2.4-14.4-8.8-16.7-16.9l-0.2,0c0,0,0-0.1,0-0.1h-0.2c0,0,0,0.1,0,0.1l-47.7,0.1 c0,1,0.1,45.2,0.1,59.3c4.6-4.6,10.9-7.4,17.9-7.4c14,0,25.3,11.4,25.3,25.3s-11.4,25.3-25.3,25.3s-25.3-11.4-25.3-25.3 c0-1.5,0.1-3,0.4-4.5c-0.3,0.1-0.5,0.2-0.7,0.2c-0.2,0-0.2,0-0.2,0c-0.6,0-1.3,0.2-1.8,0.2c-5.4,0-9.8-4.4-9.8-9.7 c0-0.7,0.1-34.7,0.1-34.7c0-1.9-1.8-3.8-3.9-3.8c-1.8,0-2.9,1.4-3.9,3.3V194.1z"
        />
      </svg>
    </div>
  );
});

export default Menu;

//className="menu_svg"
//id="menu_button"
