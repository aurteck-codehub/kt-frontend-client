"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = ({ open, onClose, title, message }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title || "title"}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message || "message"}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
