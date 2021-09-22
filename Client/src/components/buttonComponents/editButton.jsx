import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "@material-ui/icons/Edit";

export default function EditButton({ id, big }) {
  if (big === "big") {
    return (
      <Link to={"/magicians/edit/" + id}>
        <IconButton color="primary" aria-label="delete">
          <EditIcon style={{ width: "60px", height: "60px" }} />
        </IconButton>
      </Link>
    );
  } else {
    return (
      <Link to={"/magicians/edit/" + id}>
        <IconButton color="primary" aria-label="delete">
          <EditIcon fontSize="medium" />
        </IconButton>
      </Link>
    );
  }
}
