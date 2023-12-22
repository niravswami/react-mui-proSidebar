import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { useProSidebarContext } from "../context/SidebarContext";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
	const theme = useTheme();
	const { collapsed, toggled, setToggled, breakPoint, setBreakPoint } =
		useProSidebarContext();
	const location = useLocation();
	return (
		<Sidebar
			style={{ height: "100%", top: "auto" }}
			breakPoint="md"
			backgroundColor={theme.palette.secondary.light}
			collapsed={breakPoint ? !collapsed : collapsed}
			toggled={breakPoint ? !toggled : toggled}
			onBackdropClick={() => setToggled((prev) => !prev)}
			onBreakPoint={(a: boolean) => setBreakPoint(a)}
		>
			<Box sx={styles.avatarContainer}>
				<Avatar
					src="/src/assets/profile.jpg"
					sx={styles.avatar}
					alt="profile pic"
				/>
				{!breakPoint && collapsed ? null : (
					<>
						<Typography variant="body2" sx={styles.yourChannel}>
							Your channel
						</Typography>
						<Typography variant="overline">Some channel name</Typography>
					</>
				)}
			</Box>
			<Menu
				menuItemStyles={{
					button: ({ active }) => {
						return {
							backgroundColor: active
								? theme.palette.secondary.main
								: undefined,
						};
					},
				}}
			>
				<MenuItem
					active={location.pathname === "/"}
					component={<Link to="/" />}
					icon={<DashboardOutlinedIcon />}
				>
					<Typography variant="body2">Dashboard</Typography>
				</MenuItem>
				<MenuItem
					active={location.pathname === "/content"}
					component={<Link to="/content" />}
					icon={<SourceOutlinedIcon />}
				>
					<Typography variant="body2">Content</Typography>
				</MenuItem>
				<MenuItem
					active={location.pathname === "/analytics"}
					component={<Link to="/analytics" />}
					icon={<AnalyticsOutlinedIcon />}
				>
					<Typography variant="body2">Analytics</Typography>
				</MenuItem>
				<MenuItem
					active={location.pathname === "/customization"}
					component={<Link to="/customization" />}
					icon={<StyleOutlinedIcon />}
				>
					<Typography variant="body2">Customization</Typography>
				</MenuItem>
			</Menu>
		</Sidebar>
	);
}

/** @type {import("@mui/material").SxProps } */
const styles = {
	avatarContainer: {
		my: 5,
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	avatar: {
		width: "50%",
		height: "auto",
	},
	yourChannel: { mt: 1 },
};

export default SideNav;
