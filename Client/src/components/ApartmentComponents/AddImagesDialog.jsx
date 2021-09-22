import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ImagesInputsOnClick from "./ImagesInputsOnClick";

export default function AddImagesDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{ width: "100%" }}
        color="primary"
        onClick={handleClickOpen}
      >
        הוסף תמונות
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth="true"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "right" }} id="form-dialog-title">
          הוספת תמונות לדירה
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <ImagesInputsOnClick />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
