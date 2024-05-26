import { useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, TextField, Box } from '@mui/material';

interface User {
	id: number;
	name: string;
	avatarUrl: string;
}

interface UserListProps {
	users: User[];
	onSelect: (user: User) => void;
}

export function UserList({ users, onSelect }:UserListProps) {

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

	const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

	return(
		<>
			<Box sx={{ border: '0', padding: '15px', width: '300px', borderRadius: '25px', backgroundColor: 'transparent',  }}>
				<TextField
					label="Search user"
					variant="outlined"
					fullWidth
					margin="normal"
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<List>
					{filteredUsers.map((user) => (
						<ListItem
							key={user.id}
							component="div"
							role="button"
							onClick={() => onSelect(user)}
							style={{ cursor: 'pointer' }}
						>
							<ListItemAvatar>
								<Avatar src={user.avatarUrl} />
							</ListItemAvatar>
							<ListItemText primary={user.name} />
						</ListItem>
					))}
				</List>
			</Box>
		</>
	)
}