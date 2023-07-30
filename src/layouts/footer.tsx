import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import Routes from "@/utils/routes";
import { useNavigate } from "react-router-dom";

import SubjectIcon from "@mui/icons-material/Subject";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QuizIcon from "@mui/icons-material/Quiz";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = (props:any) => {
  const [value, setValue] = React.useState(0);
  const routes = new Routes(useNavigate());
  const {t} = useTranslation();
  
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Divider />
      <BottomNavigation
        showLabels
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
        }}

      >
        <BottomNavigationAction
          label={t("tb.home")}
          icon={<HomeIcon />}
          onClick={routes.goToDashboard}
          sx={{borderRight:0.5}}
          
        />
        <BottomNavigationAction
          label={t("tb.subjects")}
          icon={<SubjectIcon />}
          onClick={routes.goSubjects}
          sx={{borderRight:0.5}}
        />
        <BottomNavigationAction
          label={t("tb.years")}
          icon={<CalendarMonthIcon />}
          onClick={routes.goToYears}
          sx={{borderRight:0.5}}
          />
        <BottomNavigationAction label={t("tb.quizzes")} icon={<QuizIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
export default Footer;
