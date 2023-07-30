import Routes from "@/utils/routes";
import {
  Avatar,
  Box,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Container from "@/layouts/container";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Test = (props: any) => {
  const routes = new Routes(useNavigate());
  const [toolbarTitle, setToolbarTitle] = useState("Years");
  const {t} = useTranslation();

  return (
    <Container toolbarTitle={t("tb.years")}>
      <Box>
        <List sx={{ width: "100%" }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <div key={labelId}>
                <ListItem key={value} secondaryAction={<DoubleArrowIcon />}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={`Line item ${value + 1}`} />
                  </ListItemButton>
                </ListItem>
                <Divider variant="middle" />
              </div>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};
export default Test;
