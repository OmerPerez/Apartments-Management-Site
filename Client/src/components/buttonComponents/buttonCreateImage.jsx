import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab } from "@material-ui/core";
import MagicianProfileImage from "../magicianComponents/magicianProfileImage";

export default function ButtonCreateImage({ imageURL }) {
  const [open, setOpen] = React.useState(false);


  let [url, setUrl] = React.useState(
    "https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_762930.jpg"
  );

  const [inputUrl, setInputUrl] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseApply = () => {
    if (inputUrl !== "") {
      console.log(inputUrl);
      setUrl(inputUrl);
    } else {
      setUrl(
        "https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_762930.jpg"
      );
    }
    setOpen(false);
  };

  const handleCloseCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <MagicianProfileImage image={url} />
      <Fab
        style={{ marginLeft: "234px", marginTop: "-153px" }}
        aria-label="add"
        size="large"
        color="primary"
        onClick={handleClickOpen}
      >
        <h2>+</h2>
      </Fab>
      <Dialog
        open={open}
        onClose={handleCloseCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Image URL</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => {
              setInputUrl(e.target.value);
            }}
            autoFocus
            value={inputUrl}
            margin="dense"
            id="name"
            label="Image URL"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ marginRight: "50px" }}
            onClick={handleCloseCancel}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleCloseApply} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
