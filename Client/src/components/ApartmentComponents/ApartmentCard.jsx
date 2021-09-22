import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function ApartmentCard({ name, image, id, status }) {
  const [tenants, setTenants] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/tenants/apartment/" + id)
      .then((response) => response.json())
      .then((data) => setTenants(data));
  }, []);

  return (
    <Link
      class="card-deck"
      to={`apartment/${id}`}
      style={{
        width: "25%",
        textDecoration: "none",
        margin: "auto",
      }}
    >
      <div
        class={
          status
            ? "card border-3 border-danger mb-3"
            : "card border-3 border-success mb-3"
        }
      >
        <img
          class="card-img-top"
          height="250px"
          src={`https://drive.google.com/uc?export=view&id=${image}`}
          alt="Card image cap"
        />

        {tenants.length > 0 ? (
          <div class="card-body">
            <h4
              class="card-text"
              style={{ textAlign: "center", color: "black" }}
            >
              {name +
                " (" +
                tenants[tenants.length - 1].firstName +
                " " +
                tenants[tenants.length - 1].lastName + ")"}
            </h4>
          </div>
        ) : (
          <div class="card-body">
            <h4
              class="card-text"
              style={{ textAlign: "center", color: "black" }}
            >
              {name}
            </h4>
          </div>
        )}
      </div>
    </Link>
  );
}
