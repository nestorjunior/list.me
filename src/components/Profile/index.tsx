import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";

export function Profile() {
	return (
		<>
			<Card
				sx={{
					maxWidth: 800,
					margin: "auto",
					marginTop: 4,
					padding: 2,
					borderRadius: 4,
					boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
				}}
			>
				<CardContent>
					<Typography
						variant="h5"
						align="center"
						gutterBottom
						sx={{ color: "#212529bf" }}
					>
						Profile Picture
					</Typography>
					<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
						<Avatar
							alt="User Avatar"
							src="https://i.pravatar.cc/150"
							sx={{ width: 100, height: 100, color: "2px solid #dfedf0" }}
						/>
					</Box>
					<Typography
						variant="body2"
						align="center"
						color="text.secondary"
						gutterBottom
					>
						JPG or PNG no larger than 5 MB
					</Typography>
					<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
						<Button variant="contained" style={{ backgroundColor: "#ff3f25" }}>
							Upload new image
						</Button>
					</Box>
				</CardContent>
				<CardContent>
					<Typography
						variant="h5"
						align="center"
						gutterBottom
						sx={{ color: "#212529bf" }}
					>
						Account Details
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Username"
								variant="outlined"
								size="small"
								placeholder="Enter your username"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Email address"
								variant="outlined"
								size="small"
								type="email"
								placeholder="Enter your email address"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="First name"
								variant="outlined"
								size="small"
								placeholder="Enter your first name"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Last name"
								variant="outlined"
								size="small"
								placeholder="Enter your last name"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Organization name"
								variant="outlined"
								size="small"
								placeholder="Enter your organization name"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Location"
								variant="outlined"
								size="small"
								placeholder="Enter your location"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Phone number"
								variant="outlined"
								size="small"
								type="tel"
								placeholder="Enter your phone number"
								margin="normal"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Birthday"
								variant="outlined"
								size="small"
								type="text"
								placeholder="Enter your birthday"
								margin="normal"
							/>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
					<Button variant="contained" style={{ backgroundColor: "#ff3f25" }}>
						Submit
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
