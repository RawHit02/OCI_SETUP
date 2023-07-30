import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Container from "@/layouts/container";
import { useEffect, useState, StrictMode } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dashboard from "./dashboard";
import Index from "./index";
import Splash from "./splash";
import SignIn from "./sign-in";
import AppHelper from "@/utils/appHelper";
import Test from "./test";
import '../../i18n';


export default function App() {
  const [isBrowser, setBrowser] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setBrowser(true);
    setTheme(AppHelper.getSelectedTheme());
    /**
     * OnChangeTheme dispach event  define in
     * appHelper.setTheme function
     */
    window.addEventListener("onChangeTheme",(e) => {
      setTheme(AppHelper.getSelectedTheme());
      e.preventDefault();
    });

  }, []);
  
  return isBrowser ? (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/splash" element={<Splash />} />
            <Route
              path="/dashboard"
              element={
                  <Dashboard />
              }
            />
            <Route
              path="/test"
              element={
                  <Test />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  ) : null;
}
