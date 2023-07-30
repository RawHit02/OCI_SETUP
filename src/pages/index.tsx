// import React, { useState, useEffect } from "react";
// import Routes from "../utils/routes";
// import { useNavigate } from "react-router-dom";

// const IndexPage = () => {
//   const routes = new Routes(useNavigate());

//   useEffect(() => {
//     setTimeout(() => {
//       routes.goToSplash();
//     }, 1);
//   }, []);
//   return <div />;
// };
// export default IndexPage;


import React from "react";
import Dashboard from "./dashboard"; // Make sure to use the correct path to your Dashboard.tsx file

const IndexPage = () => {
  return (
    <div>
      {/* You can add any additional content or layout for the index page if needed */}
      <Dashboard />
    </div>
  );
};

export default IndexPage;
