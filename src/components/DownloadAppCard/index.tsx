import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { Apple as AppleIcon, Android as AndroidIcon } from '@mui/icons-material';

export function DownloadAppCard() {
	return(
		<>
			<Card sx={{ maxWidth: 345, margin: '0 auto', padding: 2, borderRadius: '25px', border: '6px solid var(--white-100)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
				<CardContent>
					<Typography variant="h5" component="div" align="center">
						Baixe nosso aplicativo
					</Typography>
					<Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: 1 }}>
						Disponível na Apple Store e Google Play.
					</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
					<Button
						variant="contained"
						color="primary"
						startIcon={<AppleIcon />}
						sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: '#333' } }}
						onClick={() => {
							window.open('https://www.apple.com/app-store/', '_blank');
						}}
					>
						Apple Store
					</Button>
					<Button
						variant="contained"
						color="primary"
						startIcon={<AndroidIcon />}
						sx={{ backgroundColor: '#34A853', color: '#fff', '&:hover': { backgroundColor: '#2c8e42' } }}
						onClick={() => {
							window.open('https://play.google.com/store', '_blank');
						}}
					>
						Google Play
					</Button>
				</CardActions>
			</Card>
		</>
	)
}