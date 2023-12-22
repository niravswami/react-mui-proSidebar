import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProSidebarContext } from "../context/SidebarContext";

function AppHeader() {
	const { setCollapsed, breakPoint, setToggled } = useProSidebarContext();
	return (
		<AppBar position="sticky" sx={styles.appBar}>
			<Toolbar>
				<IconButton
					onClick={() =>
						breakPoint
							? setToggled((prev) => !prev)
							: setCollapsed((prev) => !prev)
					}
					color="secondary"
				>
					<MenuIcon />
				</IconButton>
				<Box
					component={"img"}
					sx={styles.logo}
					src="/src/assets/react.svg"
				></Box>
				<Box sx={{ flexGrow: 1 }}></Box>
				<IconButton title="Notification" color="secondary">
					<Badge badgeContent={4} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton title="Settings" color="secondary">
					<SettingsIcon />
				</IconButton>
				<IconButton title="Logout" color="secondary">
					<LogoutIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

/** @type {import("@mui/material").SxProps } */
const styles = {
	appBar: {
		bgcolor: "secondary.dark",
	},
	logo: { borderRadius: 2, height: 40, ml: 2, cursor: "pointer" },
};

export default AppHeader;
