import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import Routes from "@/utils/routes";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const routes = new Routes(useNavigate());
  const [over, setTimeOver] = useState(false);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      //routes.goToDashboard();
      setTimeOver(true);
    }, 1000);
    if (over) {
      routes.goToDashboard();
    }
  }, [over]);
  // Custom css for loader
  const override = ` display: block; margin: 0 auto;border-color: red;`;
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <PulseLoader color={"#36D7B7"} css={override} size={20} />
    </div>
  );
};
export default SplashPage;
