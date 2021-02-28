import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

import React from "react";

const LauncherErrorAlert = ({ message, open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Whoops!</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default LauncherErrorAlert;
