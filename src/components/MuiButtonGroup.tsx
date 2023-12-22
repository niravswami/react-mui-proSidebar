import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from "@mui/material";

export default function MuiButtonGroup() {
	return (
		<Card>
			<CardHeader
				title={
					<Typography variant="h4" gutterBottom>
						Button Group
					</Typography>
				}
			/>
			<CardContent>
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
				>
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</ButtonGroup>
			</CardContent>
		</Card>
	);
}
