import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";
import { ProSidebarProvider } from "./context/SidebarContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ProSidebarProvider>
					<BrowserRouter>
						<CssBaseline />
						<AppHeader />
						<Box sx={styles.container}>
							<SideNav />
							<Box component={"main"} sx={styles.mainSection}>
								<AppRoutes />
							</Box>
						</Box>
					</BrowserRouter>
				</ProSidebarProvider>
			</ThemeProvider>
		</>
	);
}

/** @type {import("@mui/material").SxProps } */
const styles = {
	container: {
		display: "flex",
		bgcolor: "secondary.light",
		height: "calc(100% - 64px)",
	},
	mainSection: {
		p: 4,
		width: "100%",
		height: "100%",
		overflow: "auto",
	},
};

export default App;
