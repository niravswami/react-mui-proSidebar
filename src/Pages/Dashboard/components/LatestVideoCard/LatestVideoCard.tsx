import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from "@mui/material";
import { FC } from "react";

const LatestVideoCard: FC = (props) => {
	return (
		<Card {...props}>
			<CardHeader title="Latest Video Performance" />
			<CardContent>
				<Box sx={styles.latestVideoContainer}>
					<Box
						sx={styles.latestVideoThumbnail}
						component={"img"}
						src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*I0UVrUln6YqXGPSegytbqw.png"
					></Box>
					<Typography sx={styles.latestVideoTitle}>React MUI</Typography>
				</Box>
				<Typography variant="h6" sx={styles.latestVideoTimeLabel}>
					First 6 hours:{" "}
				</Typography>
				<Box sx={styles.latestVideoStatsRow}>
					<Typography variant="h6" sx={styles.latestVideoStatsRowKey}>
						Views
					</Typography>
					<Typography variant="h6" sx={styles.latestVideoStatsRowVal}>
						225
					</Typography>
				</Box>
				<Box sx={styles.latestVideoStatsRow}>
					<Typography variant="h6" sx={styles.latestVideoStatsRowKey}>
						Watch Time
					</Typography>
					<Typography variant="h6" sx={styles.latestVideoStatsRowVal}>
						30
					</Typography>
				</Box>
				<Box sx={styles.latestVideoStatsRow}>
					<Typography variant="h6" sx={styles.latestVideoStatsRowKey}>
						Likes
					</Typography>
					<Typography variant="h6" sx={styles.latestVideoStatsRowVal}>
						35
					</Typography>
				</Box>

				<Divider sx={styles.divider}></Divider>
				<Button variant="text">GO TO VIDEO ANALYTICS</Button>
				<br />
				<Button variant="text">SEE COMMENTS(12)</Button>
			</CardContent>
		</Card>
	);
};

/** @type {import("@mui/material").SxProps } */
const styles = {
	latestVideoContainer: {
		width: "100%",
		position: "relative",
	},
	latestVideoThumbnail: {
		width: "100%",
		mt: 2,
		display: "block",
	},
	latestVideoTitle: {
		position: "absolute",
		color: "secondary.light",
		bottom: 0,
		left: 0,
		right: 0,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "1rem",
		mb: 2,
	},
	latestVideoTimeLabel: {
		color: "secondary.dark",
		mt: 2,
	},
	latestVideoStatsRow: {
		display: "flex",
		justifyContent: "space-between",
		mt: 2,
	},
	latestVideoStatsRowKey: {},
	latestVideoStatsRowVal: {
		color: "secondary.dark",
	},
	ctaSection: {
		display: "flex",
		flexDirection: "column",
	},
	cta: {
		mt: 2,
	},
	divider: {
		my: 2,
	},
};

export default LatestVideoCard;
