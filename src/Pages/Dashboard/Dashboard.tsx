import { Box, Typography } from "@mui/material";
import LatestVideoCard from "./components/LatestVideoCard/LatestVideoCard";
import LatestPost from "./components/LatestPost/LatestPost";
import ChannelAnalytics from "./components/ChannelAnalytics/ChannelAnalytics";

function Dashboard() {
	return (
		<Box>
			<Typography sx={styles.pageTitle} variant="h5">
				Channel Dashboard
			</Typography>
			<Box sx={styles.columnContainer}>
				<LatestVideoCard />
				<LatestPost />
				<ChannelAnalytics />
			</Box>
		</Box>
	);
}

/** @type {import("@mui/material").SxProps } */
const styles = {
	pageTitle: {
		my: 2,
	},
	columnContainer: {
		columns: "280px 3",
		maxWidth: 1400,
	},
	item: {
		mb: 2,
	},
};

export default Dashboard;
