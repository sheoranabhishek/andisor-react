import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function PrimaryButton(props) {
	return (
		<button className="primary-button bg-dark-blue text-white hover:bg-white hover:text-dark-blue hover:outline hover:outline-2 hover:outline-solid py-2 px-4 rounded-xl inline-flex items-center">
			<PlusCircleIcon height={30} />
			<span className="pl-2 text-sm">{props.text}</span>
		</button>
	);
}

export default PrimaryButton;
