import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-andisor.png";
import "../css/Navbar.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Navbar() {
	const [activeLink, setActiveLink] = useState("inventory");

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	const navLinks = [
		{ id: "inventory", text: "Inventory" },
		{ id: "collections", text: "Collections" },
		{ id: "analytics", text: "Analytics" },
	];

	return (
		<>
			<div className="w-full mt-5">
				<img
					className="w-64 mx-auto"
					src={logo}
					alt=""
				/>
			</div>
			<nav className="navbar flex justify-between m-10 px-5 w-100">
				<div className="tabs w-3/5">
					{navLinks.map((link) => (
						<Link
							to={`/${link.id}`}
							key={link.id}
							className={`font-heading nav-link ${
								activeLink === link.id ? "active" : ""
							} text-black`}
							onClick={() => handleLinkClick(link.id)}>
							{link.text}
						</Link>
					))}
				</div>

				<div className="action-links w-2/5 flex justify-end">
					<PrimaryButton
						url="/add-new-product"
						text="Add New Product"
						icon="add"
					/>
					<SecondaryButton
						url="/import-data"
						text="Import Data"
						icon="add"
					/>
					<SecondaryButton
						url="/export-csv"
						text="Export CSV"
						icon="add"
					/>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
