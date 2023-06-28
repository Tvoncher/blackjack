import { FC } from "react";
import "./LoadingScreen.css";

const LoadingScreen: FC = () => {
  return (
    <div className="loadingScreen">
      <img
        className="loadingScreen__img"
        src="images/loading.jpg"
        alt="loadingScreen"
      />
    </div>
  );
};

export default LoadingScreen;
