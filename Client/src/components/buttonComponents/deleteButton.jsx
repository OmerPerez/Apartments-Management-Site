import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DeleteButton({ id, type }) {
  if (type === "tenant") {
    return (
      <Link to={"/tenants/delete/" + id}>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Link>
    );
  } else {
    return (
      <Link to={"/apartment/delete/" + id}>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Link>
    );
  }
}
