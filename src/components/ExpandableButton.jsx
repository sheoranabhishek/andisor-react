import React from "react";

function ExpandableButton({ isOpen, toggle }) {
	return (
		<>
			<button
				className="text-sm text-slate-900 flex items-center mt-2 bg-slate-100 rounded-full py-1 px-2"
				onClick={toggle}>
				<i
					className="edit"
					style={{
						transform: `rotate(${isOpen ? 180 : 0}deg)`,
						transition: `ease 0.25s`,
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-4 h-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</i>
			</button>
		</>
	);
}

export default ExpandableButton;
