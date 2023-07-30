import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Checkbox from "@mui/material/Checkbox";
import AppHelper from "@/utils/appHelper";
import i18next from "i18next";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Preferences(props: any) {
  //const [open, setOpen] = React.useState(false);
  var themeChecked = AppHelper.getTheme() == "dark" ? true : false;
  const [langSelected, setSelectedLang] = React.useState(
    AppHelper.getAppLangauge()
  );
  const closePref = () => {
    props.onClosePref(false);
    //after close force to reload preferences changes;
    window.location.reload();
  };

  const handleToggleTheme = (event: any) => {
    let isChecked = event.target.checked;
    AppHelper.setTheme(isChecked);
    themeChecked = isChecked;
    //event.preventDefault();
  };

  const onChangeLangauge = (event: any) => {
    let lng = event.target.value;
    AppHelper.setAppLangague(lng);
    i18next.changeLanguage(lng);
    i18next.options.lng = lng;
    setSelectedLang(lng);
    //AppHelper.print(lng);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={props.onOpenPref}
        onClose={closePref}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              onClick={closePref}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Prefrences
            </Typography>
            {/*
            <Button autoFocus color="inherit" onClick={closePref}>
              save
            </Button>
            */}
          </Toolbar>
        </AppBar>
        <List>
          <ListItem
            secondaryAction={
              <Checkbox
                edge="end"
                value="theme"
                checked={themeChecked}
                onClick={(event) => handleToggleTheme(event)}
              />
            }
          >
            <ListItemText primary="Enable Dark Mode" secondary="" />
          </ListItem>
          <Divider />
          <ListItem>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Choose Language
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="en"
                  control={<Radio />}
                  label="English"
                  onChange={onChangeLangauge}
                  checked={langSelected == "en"}
                />
                <FormControlLabel
                  value="hi"
                  control={<Radio />}
                  label="Hindi"
                  onChange={onChangeLangauge}
                  checked={langSelected == "hi"}
                />
              </RadioGroup>
            </FormControl>
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
