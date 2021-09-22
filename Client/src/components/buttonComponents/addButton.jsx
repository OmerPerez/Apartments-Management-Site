import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddButton() {
  return (
    <Link to={"/magicians/createMagician/"}>
      <IconButton color="primary">
        <AddCircleIcon style={{ width: "80px", height: "80px" }} />
      </IconButton>
    </Link>
  );
}
