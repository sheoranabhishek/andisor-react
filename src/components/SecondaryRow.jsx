import _ from "lodash";
import React, { useEffect, useState } from "react";
import useEditController from "../hooks/useEditController";
import EditRowButton from "./EditRowButton";
import ProductProperties from "./ProductProperties";
import EditableField from "./utility/EditableField";

function SecondaryRow({ row, mainProductId, primaryRowId, secondaryRowId }) {
	const { isEditable, toggleIsEditable } = useEditController(false);
	const [editedData, setEditedData] = useState(row);

	let sessionKey = `sec_${mainProductId}_${primaryRowId}_${secondaryRowId}`;

	function handleEditData(fieldName, data) {
		setEditedData((prevData) => ({
			...prevData,
			[fieldName]: data,
		}));
	}

	useEffect(() => {
		row = _.merge(row, editedData);
	}, [editedData]);

	function saveDataToSessions() {
		sessionStorage.setItem(sessionKey, JSON.stringify(editedData));
	}

	return (
		<tr className="bg-slate-200">
			<td className="px-4 py-4 text-sm font-medium whitespace-nowrap"></td>
			<td className="px-12 py-4 font-medium">
				<div className="flex items-start">
					<div className="ml-36 pl-4">
						{isEditable ? (
							<EditableField
								handleEditData={handleEditData}
								keyValue="name"
								defaultValue={row.name}
							/>
						) : (
							<h4 className="text-grey-400 text-md">{row.name}</h4>
						)}
					</div>
				</div>
			</td>
			<ProductProperties
				key={row.id}
				row={row}
				secondary_variant_name={row.secondary_variant_name}
				isEditable={isEditable}
			/>
			<td className="px-4 py-4 text-sm whitespace-nowrap">
				<EditRowButton
					isEditable={isEditable}
					toggleIsEditable={toggleIsEditable}
					saveDataToSessions={saveDataToSessions}
				/>
			</td>
		</tr>
	);
}

export default SecondaryRow;
