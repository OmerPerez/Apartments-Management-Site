import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DescriptionIcon from "@material-ui/icons/Description";
import IconButton from "@material-ui/core/IconButton";
import ApartmentElectricBills from "./ApartmentElectricBills";

export default function ApartmentBillsDialog() {
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
        <DescriptionIcon style={{ width: "50px", height: "50px" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xxl"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "right" }} id="form-dialog-title">
          היסטוריית חשבונות חשמל
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <ApartmentElectricBills />
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
