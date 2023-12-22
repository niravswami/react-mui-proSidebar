import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Content from "../Pages/Content/Content";
import Analytics from "../Pages/Analytics/Analytics";
import Customization from "../Pages/Customization/Customization";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/content" element={<Content />} />
			<Route path="analytics" element={<Analytics />} />
			<Route path="/customization" element={<Customization />} />
		</Routes>
	);
}

export default AppRoutes;
