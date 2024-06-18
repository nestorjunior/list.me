import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Badge,
	Divider,
	IconButton,
	ListItemText,
	Menu,
	MenuItem,
} from "@mui/material";
import type React from "react";
import { useState } from "react";

const notifications = [
	{ id: 1, message: "John started following you" },
	{ id: 2, message: "Mariah liked your item" },
	{ id: 3, message: "Joanna sent you a HINT" },
	{ id: 4, message: "Deco started following you" },
	{ id: 5, message: "Eduardo sent a message" },
];

const NotificationBell = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget as HTMLElement);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton color="inherit" onClick={handleClick}>
				<Badge
					badgeContent={notifications.length}
					sx={{
						"& .MuiBadge-badge": {
							backgroundColor: "#ff3f25",
						},
						backgroundColor: "#bdbdbd",
						color: "#fff",
						borderRadius: "50%",
						padding: "8px",
					}}
				>
					<FontAwesomeIcon icon={faBell} />
				</Badge>
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				keepMounted
			>
				{notifications.map((notification, index) => (
					<div key={notification.id}>
						<MenuItem onClick={handleClose}>
							<ListItemText primary={notification.message} />
						</MenuItem>
						{index < notifications.length - 1 && <Divider />}
					</div>
				))}
			</Menu>
		</>
	);
};

export default NotificationBell;
