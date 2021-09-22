import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./CardStyle.css";
import HomeIcon from "@material-ui/icons/Home";

export default function CardTest({ name, image, id, status }) {
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/tenants/apartment/" + id)
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  return (
    <Link
      to={`apartment/${id}`}
      style={{
        width: "25%",
        textDecoration: "none",
        color: "black",
      }}
    >
      {tenants.length > 0 ? (
        <div class="card text-white bg-light border-success border-2 mb-4">
          <div class="card-header" style={{ color: "black", fontSize: "120%" }}>
            {name +
              " (" +
              tenants[tenants.length - 1].firstName +
              " " +
              tenants[tenants.length - 1].lastName +
              ")"}
            {status ? (
              <div className="d-flex justify-content-end">
                <HomeIcon
                  fontSize="large"
                  style={{
                    color: "red",
                    marginTop: "-8%",
                  }}
                />
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <HomeIcon
                  fontSize="large"
                  style={{
                    color: "green",
                    marginTop: "-8%",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div class="card text-white bg-light border-success border-2 mb-4">
          <div class="card-header" style={{ color: "black", fontSize: "120%" }}>
            {name}
            {status ? (
              <div className="d-flex justify-content-end">
                <HomeIcon
                  fontSize="large"
                  style={{
                    color: "red",
                    marginTop: "-8%",
                  }}
                />
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <HomeIcon
                  fontSize="large"
                  style={{
                    color: "green",
                    marginTop: "-8%",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* {tenants.length > 0 ? (
        <ListItem button>
          <ListItemText
            className="d-flex justify-content-end"
            primary={
              name +
              " (" +
              tenants[tenants.length - 1].firstName +
              " " +
              tenants[tenants.length - 1].lastName +
              ")"
            }
          />
          <ListItemIcon>
            {status ? (
              <HomeIcon
                fontSize="large"
                style={{
                  color: "green",
                  marginLeft: "25%",
                  // width: "15%",
                  // height: "15%",
                }}
              />
            ) : (
              <HomeIcon style={{ color: "red", marginLeft: "15%" }} />
            )}
          </ListItemIcon>
        </ListItem>
      ) : (
        <ListItem button>
          <ListItemIcon>
            <HomeIcon style={{ color: "red" }} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      )} */}
    </Link>
  );
}
