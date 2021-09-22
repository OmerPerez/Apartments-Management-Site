import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Facebook from "@material-ui/icons/Facebook";

export default function WhatsAppDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn">
        <IconButton
          variant="outlined"
          onClick={handleClickOpen}
          color="primary"
        >
          <Facebook style={{ width: "50px", height: "50px" }} />
        </IconButton>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth="true"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "right" }} id="form-dialog-title">
          כתוב פוסט בפייסבוק
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <textarea
              style={{ textAlign: "right" }}
              class="form-control"
              id="facebookPost"
              rows="3"
              placeholder="...כתוב כאן"
            ></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            פרסם
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
