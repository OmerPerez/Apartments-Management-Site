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
import DeleteTenant from "./DeleteTenant";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TenantCard({
  phone,
  age,
  email,
  gender,
  name,
  id,
  apartmentId,
}) {
  const classes = useStyles();

  const sendWhatsapp = () => {
    window.open("https://wa.me/+972" + phone);
  };
  return (
    <>
      <List
        className={classes.root}
        style={{ border: "2px solid #303030", marginTop: "2%" }}
      >
        <Link
          to={`apartment/${apartmentId}`}
          style={{
            width: "25%",
            textDecoration: "none",
            margin: "auto",
            color: "black",
          }}
        >
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
        </Link>
        <div className="row" style={{ marginTop: "-6%" }}>
          <div className="col-2 d-flex">
            <DeleteTenant id={id} name={name} />
          </div>
          <div className="col-10">
            <IconButton
              onClick={sendWhatsapp}
              style={{
                width: "25%",
                height: "25%",
                marginTop: "8%",
                marginBottom: "-5%",
              }}
            >
              <WhatsAppIcon
                style={{
                  color: "green",
                  width: "115%",
                  height: "115%",
                }}
              />
            </IconButton>
          </div>
        </div>
      </List>
    </>
  );
}
