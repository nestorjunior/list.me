import { Box, Typography, Card, CardContent } from '@mui/material';

export function Cookies() {
	return(
		<>
			<Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2, borderRadius: 4, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
				<CardContent>
					<Typography variant="h5" align="center" gutterBottom>
						Cookie Policy
					</Typography>
					<Box sx={{ textAlign: 'justify' }}>
						<Typography variant="body1" gutterBottom>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper euismod ante, ac posuere risus dictum sed. Ut efficitur nec turpis vel convallis. Proin ac pretium metus. Nam commodo eget felis ut eleifend. Donec non viverra magna. Mauris et justo velit. Nullam non arcu condimentum, convallis elit id, congue nunc. Cras ullamcorper, tortor a malesuada convallis, turpis nisl accumsan felis, vel scelerisque enim mauris in nunc. Vivamus bibendum lacus ut diam interdum, in malesuada libero varius.
						</Typography>
						<Typography variant="body1" gutterBottom>
							Fusce id pharetra dolor, id semper risus. In hac habitasse platea dictumst. In ac laoreet libero. Phasellus venenatis justo sit amet eros laoreet consectetur. Nullam nec tellus in leo posuere pellentesque. Integer vitae justo malesuada, fringilla leo a, fringilla metus. Proin at lectus fermentum, tincidunt odio et, vehicula justo. Sed tincidunt ligula eu mi accumsan, eget vehicula orci posuere.
						</Typography>
						<Typography variant="body1" gutterBottom>
							Quisque nec libero vitae purus aliquam auctor id eget magna. Vestibulum at lorem varius, mattis sapien sit amet, consequat ipsum. Nam ullamcorper, libero sit amet bibendum pellentesque, sapien arcu egestas ipsum, nec volutpat justo sapien et libero. Sed sit amet posuere dui. Sed sit amet turpis ac mi laoreet dictum. Sed fermentum auctor orci non ullamcorper. Sed vel leo enim. Nunc pretium, elit vel congue condimentum, felis purus consequat justo, eu sodales felis ligula id lectus.
						</Typography>
						<Typography variant="body1" gutterBottom>
							Quisque nec libero vitae purus aliquam auctor id eget magna. Vestibulum at lorem varius, mattis sapien sit amet, consequat ipsum. Nam ullamcorper, libero sit amet bibendum pellentesque, sapien arcu egestas ipsum, nec volutpat justo sapien et libero. Sed sit amet posuere dui. Sed sit amet turpis ac mi laoreet dictum. Sed fermentum auctor orci non ullamcorper. Sed vel leo enim. Nunc pretium, elit vel congue condimentum, felis purus consequat justo, eu sodales felis ligula id lectus.
						</Typography>
						<Typography variant="body1" gutterBottom>
							Quisque nec libero vitae purus aliquam auctor id eget magna. Vestibulum at lorem varius, mattis sapien sit amet, consequat ipsum. Nam ullamcorper, libero sit amet bibendum pellentesque, sapien arcu egestas ipsum, nec volutpat justo sapien et libero. Sed sit amet posuere dui. Sed sit amet turpis ac mi laoreet dictum. Sed fermentum auctor orci non ullamcorper. Sed vel leo enim. Nunc pretium, elit vel congue condimentum, felis purus consequat justo, eu sodales felis ligula id lectus.
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	)
}