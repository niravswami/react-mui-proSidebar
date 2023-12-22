import { createTheme } from "@mui/material";
import { green, grey, indigo } from "@mui/material/colors";

let theme = createTheme({
	palette: {
		primary: {
			main: indigo[500],
			dark: indigo["A700"],
			light: indigo[50],
		},
		secondary: {
			dark: grey[900],
			light: grey[50],
			main: grey[200],
			contrastText: grey[700],
		},
		success: {
			main: green[800],
		},
	},
});

theme = createTheme(theme, {
	typography: {
		link: {
			fontSize: "0.8rem",
			[theme.breakpoints.up("md")]: {
				fontSize: "0.9rem",
			},
			fontWeight: 500,
			color: theme.palette.primary.main,
			display: "block",
			cusor: "pointer",
		},
		cardTitle: {
			fontSize: "1.2rem",
			fontWeight: 500,
			display: "block",
		},
		h6: {
			fontSize: "1rem",
		},
		h7: {
			fontSize: "0.8rem",
		},
		h8: {
			fontSize: "0.7rem",
		},
	},
});

export default theme;
