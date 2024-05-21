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
					backgroundColor: '#ff3f25', 
					color: '#fff',
					'&:hover': {
						backgroundColor: '#ff3f25',
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
							sx={{
								'& .MuiOutlinedInput-root': {
									'&.Mui-focused fieldset': {
										borderColor: '#5e646b',
									},
									'&.Mui-focused input': {
										color: '#5e646b', 
									},
									'& input::placeholder': {
										color: '#5e646b', 
										opacity: 1, 
									},
								},
								'& .MuiInputLabel-root': {
									'&.Mui-focused': {
										color: '#5e646b', 
									},
								},
							}}
            />
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
								sx={{
									backgroundColor: '#ff3f25',
									'&:hover': {
										backgroundColor: '#ff3f25',
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
