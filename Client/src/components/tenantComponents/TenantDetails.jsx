import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PhoneIcon from "@material-ui/icons/Phone";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Divider from "@material-ui/core/Divider";
import WcIcon from "@material-ui/icons/Wc";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TenantDetails({ phone, age, email, gender, name }) {
  const classes = useStyles();

  return (
    <List className={classes.root} style={{ border: "2px solid #303030" }}>
      <ListItem>
        <ListItemText
          disableTypography
          primary={
            <Typography type="body2" style={{ textAlign: "center" }}>
              <h2>{name}</h2>
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem>
        <ListItemText
          align="right"
          style={{ marginRight: "5%" }}
          primary={`+${phone}`}
        />
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#0066FF" }}>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem>
        <ListItemText
          align="right"
          style={{ marginRight: "5%" }}
          primary={age}
          secondary="גיל"
        />
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#0066FF" }}>
            <PermContactCalendarIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem>
        <ListItemText
          align="right"
          style={{ marginRight: "5%" }}
          primary={email}
        />
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#0066FF" }}>
            <AlternateEmailIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem>
        <ListItemText
          align="right"
          style={{ marginRight: "5%" }}
          primary={gender}
        />
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#0066FF" }}>
            <WcIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  );
}
