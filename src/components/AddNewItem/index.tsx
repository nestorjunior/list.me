import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FeedbackModal } from "./styles";

export function AddNewItem() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message);
    handleClose();
  };

  return (
    <>
      <Fab
        sx={{
					marginTop: '5px',
					marginBottom: '10px',
					marginLeft: 'auto',
          backgroundColor: "#ff3f25",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#ff3f25",
          },
        }}
        aria-label="feedback"
        onClick={handleOpen}
      >
        <ControlPointIcon />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <FeedbackModal>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Add the product to your Wishbox!"
              multiline
              rows={1}
              variant="outlined"
              value={message}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setMessage(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#5e646b",
                  },
                  "&.Mui-focused input": {
                    color: "#5e646b",
                  },
                  "& input::placeholder": {
                    color: "#5e646b",
                    opacity: 1,
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#5e646b",
                  },
                },
              }}
            />
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#ff3f25",
                  "&:hover": {
                    backgroundColor: "#ff3f25",
                  },
                }}
                onClick={handleClose}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </form>
        </FeedbackModal>
      </Modal>
    </>
  );
}
