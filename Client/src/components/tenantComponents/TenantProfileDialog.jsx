import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TenantProfile from "./TenantProfile";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import IconButton from "@material-ui/core/IconButton";

export default function TenantProfileDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen} color="primary">
        <SupervisedUserCircleIcon style={{ width: "50px", height: "50px" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth="true"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "right" }} id="form-dialog-title">
          דיירי הדירה
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="d-flex justify-content-center">
              <TenantProfile />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
