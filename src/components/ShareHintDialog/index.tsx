import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
	ListItemButton,
  Checkbox
} from '@mui/material';


interface User {
	id: number;
	name: string;
}

interface ShareHintDialog {
	open: boolean;
	onClose: () => void;
	onShare: (users: User[]) => void;
	users: User[];
}

export function ShareHintDialog({ open, onClose, onShare, users }: ShareHintDialog) {
	const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

	const handleToggle = (user: User) => {
		const currentIndex = selectedUsers.findIndex(u => u.id === user.id);
		const newSelectedUsers = [...selectedUsers];

		if (currentIndex === -1) {
			newSelectedUsers.push(user);
		}else {
			newSelectedUsers.splice(currentIndex, 1)
		}
		setSelectedUsers(newSelectedUsers)
	}

	const handleShare = () => {
		onShare(selectedUsers);
		onClose();
	}

	return(
		<>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Share with users</DialogTitle>
				<DialogContent>
					<List>
						{users.map((user) => (
							<ListItemButton key={user.id} onClick={() => handleToggle(user)}>
								<Checkbox
									checked={selectedUsers.some(u => u.id === user.id)}
								/>
								<ListItemText primary={user.name} />
							</ListItemButton>
						))}
					</List>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button onClick={handleShare} color="primary">Share</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}