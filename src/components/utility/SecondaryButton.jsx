import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function SecondaryButton(props) {
	return (
		<button className="secondary-button bg-light-blue text-black hover:bg-white hover:text-dark-blue hover:outline hover:outline-2 hover:outline-solid py-2 px-4 rounded-xl inline-flex items-center">
			<PlusCircleIcon height={30} />
			<span className="pl-2 text-sm">{props.text}</span>
		</button>
	);
}

export default SecondaryButton;
