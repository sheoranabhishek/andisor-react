import React from "react";

function InventorySearchBar({ filterText, setFilterText }) {
	return (
		<div className="relative flex items-center mt-4 md:mt-0">
			<span className="absolute">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5 mx-3 text-gray-400">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</span>
			<input
				type="text"
				value={filterText}
				onChange={(e) => {
					setFilterText(e.target.value);
				}}
				placeholder="Search product"
				className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"></input>
		</div>
	);
}

export default InventorySearchBar;
