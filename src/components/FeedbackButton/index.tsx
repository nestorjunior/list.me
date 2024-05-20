// src/components/FeedbackButton.tsx
import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FeedbackModal } from './styles';

export function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message);
    handleClose();
  };

  return (
    <>
      <Fab color="primary" aria-label="feedback" onClick={handleOpen}>
        <FeedbackIcon />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <FeedbackModal>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Seu Feedback"
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setMessage(e.target.value)}
              required
            />
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained" style={{ marginLeft: '16px' }}>
                Send your feedback.
              </Button>
            </div>
          </form>
        </FeedbackModal>
      </Modal>
    </>
  );
};
