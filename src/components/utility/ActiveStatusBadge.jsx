import React from "react";

function ActiveStatusBadge({ isRowActive }) {
	return (
		<>
			{isRowActive === true ? (
				<span className="ml-4 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
					Active
				</span>
			) : (
				<span className="ml-4 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
					Inactive
				</span>
			)}
		</>
	);
}

export default ActiveStatusBadge;
