import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from "@mui/material";

function LatestPost() {
	return (
		<Card>
			<CardHeader title="Latest Post" />
			<CardContent>
				<Box sx={styles.postAutherSection}>
					<Avatar
						sx={styles.avatar}
						alt="Remy Sharp"
						src="/src/assets/profile.jpg"
					/>
					<Typography sx={styles.postMeta}>React With Nirav</Typography>
					<Typography sx={styles.postMeta}>21 Dec, 2023</Typography>
				</Box>
				<Typography variant="body2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
					expedita beatae suscipit provident eveniet nobis molestiae maxime
					repellendus adipisci unde, et ullam impedit alias. Nisi quod quisquam
					molestiae temporibus totam!
				</Typography>
				<Divider sx={styles.divider}></Divider>
				<Box sx={styles.postStats}>
					<Typography variant="body2">Likes</Typography>
					<Typography variant="body2">Comments</Typography>
					<Typography variant="h6">12</Typography>
					<Typography variant="h6">6</Typography>
				</Box>
				<Divider sx={styles.divider}></Divider>
				<Button variant="text">GO TO COMMUNITY TAB</Button>
			</CardContent>
		</Card>
	);
}

/** @type {import("@mui/material").SxProps } */
const styles = {
	postAutherSection: {
		display: "flex",
		alignItems: "center",
		my: 3,
	},
	avatar: {
		width: "30px",
		height: "auto",
		mr: 1,
	},
	postMeta: {
		mr: 1,
		fontSize: "0.8rem",
		color: "secondary.contrastText",
	},
	postStats: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		my: 3,
	},
	cta: {
		mt: 3,
	},
	divider: {
		my: 2,
	},
};

export default LatestPost;
