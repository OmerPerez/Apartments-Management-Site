import React from "react";
import ApartmentCard from "./ApartmentCard";
import CardTest from "./CardTest";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function HomePageApartments() {
  const [apartments, setApartments] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => setApartments(data));
  }, []);

  if (apartments.length < 1) return "";

  return (
    <div
      className="row d-flex justify-content-center"
      style={{ paddingRight: "5%", paddingLeft: "5%" }}
    >
      <List style={{ textAlign: "center" }} className={classes.root}>
        {apartments.map((data, key) => {
          return (
            <>
              <CardTest
                name={data.housingUnitName}
                image={data.images[0]}
                id={data._id}
                status={data.apartmentStatus}
                key={key}
              />

              {/* <ApartmentCard
              name={data.housingUnitName}
              image={data.images[0]}
              id={data._id}
              status={data.apartmentStatus}
              key={key}
            /> */}
            </>
          );
        })}
      </List>
    </div>
  );
}
