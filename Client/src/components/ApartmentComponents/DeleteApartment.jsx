import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import axios from "axios";
import DeleteButton from "../buttonComponents/deleteButton";

export default function DeleteApartment({ id, address, city, number }) {
  //Current apartmentId to delete
  const [apartmentId, setApartmentId] = useState(id);

  //Dialog State and Function
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const api = axios.create({
    baseURL: "http://localhost:8081",
  });

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    api
      .delete(`/apartment/delete/${apartmentId}`)
      .then(function (response) {
        console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <IconButton color="secondary" aria-label="delete">
        <DeleteIcon fontSize="large" onClick={handleClickOpen} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "right" }} id="form-dialog-title">
          מחיקת דירה
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="text-center mt-5">
              <h3>
                אתה בטוח שאתה רוצה למחוק את הדירה הממוקמת בעיר
                {" " + city + " בכתובת: " + address + " " + number + " "}
              </h3>
              <h3> ? </h3>
              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
              <button
                type="danger"
                className="btn btn-danger mt-3 m-xl-3"
                onClick={handleClose}
              >
                בטל מחיקה
              </button>
              <Link to={"/"} onClick={handleClose}>
                <button
                  className="btn btn-primary mt-3 m-xl-3"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "מאשר מחיקה"}
                </button>
              </Link>

              {data && (
                <div className="mt-3">
                  <strong>Output:</strong>
                  <br />
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
