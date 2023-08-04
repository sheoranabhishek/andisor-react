import { useState } from "react";

function useEditController() {
	const [isEditable, setIsEditable] = useState(false);

	function toggleIsEditable() {
		setIsEditable((isEditable) => !isEditable);
	}
	return { isEditable, toggleIsEditable };
}

export default useEditController;
