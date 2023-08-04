import React from "react";

function EditableField({ handleEditData, keyValue, defaultValue }) {
	return (
		<input
			type="text"
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
			onChange={(e) => handleEditData(keyValue, e.target.value)}
			defaultValue={defaultValue}></input>
	);
}

export default EditableField;
