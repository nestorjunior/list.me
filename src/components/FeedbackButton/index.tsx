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
      <Fab 
				sx={{ 
					backgroundColor: '#e05562', 
					color: '#fff',
					'&:hover': {
						backgroundColor: '#db3c4b',
					} 
				}} 
				aria-label="feedback" 
				onClick={handleOpen}
			>

        <FeedbackIcon />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <FeedbackModal>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Feedback"
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setMessage(e.target.value)}
              required
            />
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
								sx={{
									backgroundColor: '#e05562',
									'&:hover': {
										backgroundColor: '#db3c4b',
									}
								}}
								onClick={handleClose} 
								variant="contained"
							>
                Cancel
              </Button>
              
							<Button
								sx={{
									backgroundColor: '#7FA2A8',
									'&:hover': {
										backgroundColor: '#417f88',
									}
								}}
								type="submit" 
								variant="contained" 
								style={{ marginLeft: '16px' }}
								>
                Send
              </Button>
            </div>
          </form>
        </FeedbackModal>
      </Modal>
    </>
  );
};
