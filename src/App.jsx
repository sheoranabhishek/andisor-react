import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/utility/Navbar";
import Analytics from "./pages/Analytics";
import Collections from "./pages/Collections";
import Inventory from "./pages/Inventory";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/collections"
					element={<Collections />}></Route>
				<Route
					path="/analytics"
					element={<Analytics />}></Route>
				<Route
					path="/inventory"
					element={<Inventory />}></Route>
				<Route
					path="*"
					element={
						<Navigate
							to="/inventory"
							replace
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
