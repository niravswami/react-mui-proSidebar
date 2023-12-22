import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from "@mui/material";

function ChannelAnalytics() {
	return (
		<Card>
			<CardHeader title="Channel Analytics" />
			<CardContent>
				<Box sx={styles.postStats}>
					<Typography variant="body2">Likes</Typography>
					<Typography variant="body2">Current Subscriber</Typography>
					<Typography variant="h4">4,441</Typography>
					<Typography variant="h6" sx={styles.currentSubs}>
						<Typography variant="h5" style={{ color: "green" }}>
							+77
						</Typography>
						<Typography variant="h6">in last 28 days</Typography>
					</Typography>
				</Box>
				<Divider sx={styles.divider}></Divider>
				<Typography variant="h6">summary</Typography>
				<Typography variant="h6" sx={styles.summaryText}>
					Last 28 days
				</Typography>
				<Divider sx={styles.divider}></Divider>

				<Box sx={styles.videoStatsRow}>
					<Typography variant="h6" sx={styles.videoStatsLabel}>
						Views
					</Typography>
					<Typography variant="h6" sx={styles.summaryText}>
						225
					</Typography>
				</Box>
				<Box sx={styles.videoStatsRow}>
					<Typography variant="h6" sx={styles.videoStatsLabel}>
						Watch Times (hours)
					</Typography>
					<Typography variant="h6" sx={styles.summaryText}>
						30
					</Typography>
				</Box>
				<Box sx={styles.videoStatsRow}>
					<Typography variant="h6" sx={styles.videoStatsLabel}>
						Estimated Revenue
					</Typography>
					<Typography variant="h6" sx={styles.summaryText}>
						$450
					</Typography>
				</Box>

				<Divider sx={styles.divider}></Divider>

				<Button variant="text">GO TO VIDEO ANALYTICS TAB</Button>
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
	summaryText: {
		color: "success.main",
	},
	currentSubs: {
		display: "flex",
		gap: "4px",
		alignItems: "flex-end",
	},
	videoStatsRow: {},
	videoStatsLabel: {},
};

export default ChannelAnalytics;
