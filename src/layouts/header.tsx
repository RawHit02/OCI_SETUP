import * as React from "react";
import { useEffect, useState, lazy, useMemo } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Preferences from "./preferences";
import ShareIcon from "@mui/icons-material/Share";
import AppBar from "@mui/material/AppBar";
import Menu from "./menu";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Divider } from "@mui/material";

//*************************************************************************
const Header = (props: any) => {
  const theme = useTheme();

  /**
   * To open drawer menu
   */
  const [menuState, setMenu] = React.useState(false);

  /**
   * Toolbar title coming from container wrapper
   */
  const [toolBarTitle, setToolBarTitle] = React.useState();

  /**
   * To Open Preferences
   */
  const [openPrefDialog, setOpenPrefDialog] = React.useState(false);

  useEffect(() => {
    setToolBarTitle(props.toolbarTitle);
  }, []);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openPref = () => {
    if (openPrefDialog == false) {
      setOpenPrefDialog(true);
    } else {
      setOpenPrefDialog(false);
    }
  };
  const closePref = () => {
    setOpenPrefDialog(false);
  };
  const reloadPage = ()=>{
    window.location.reload();
  }

  //return (<h1>Header</h1>)
  return (
    <div>
      <Preferences onOpenPref={openPrefDialog} onClosePref={closePref} />
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openMenu}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
            {toolBarTitle}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton size="small" color="inherit" onClick={openPref}>
              <SettingsApplicationsIcon />
            </IconButton>
            {/*<Divider orientation="vertical" flexItem />*/}
            &nbsp;
            <IconButton size="small" color="inherit">
              <ShareIcon />
            </IconButton>
            &nbsp;&nbsp;&nbsp;
            <IconButton
            
            color="inherit"
            aria-label="open drawer"
            onClick={reloadPage}
            edge="start"
          >
            <RefreshIcon />
          </IconButton>
          </div>
        </Toolbar>
        <Menu open={menuState} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
      </AppBar>
    </div>
  );
};

export default Header;
