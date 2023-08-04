import _ from "lodash";
import React, { useEffect, useState } from "react";
import themeConstants from "../assets/themeConstants/themeConstants";
import useEditController from "../hooks/useEditController";
import useOpenController from "../hooks/useOpenController";
import EditRowButton from "./EditRowButton";
import ExpandableButton from "./ExpandableButton";
import ProductProperties from "./ProductProperties";
import SecondaryRow from "./SecondaryRow";
import ActiveStatusBadge from "./utility/ActiveStatusBadge";
import EditableField from "./utility/EditableField";

function PrimaryVariantRow({ row, primaryRowId, mainProductId }) {
	const { isOpen, toggle } = useOpenController(false);
	const { isEditable, toggleIsEditable } = useEditController(false);
	const [editedData, setEditedData] = useState(row);

	let sessionKey = `primary_${mainProductId}_${primaryRowId}`;

	function saveDataToSessions() {
		sessionStorage.setItem(sessionKey, JSON.stringify(editedData));
	}

	function handleEditData(fieldName, data) {
		setEditedData((prevData) => ({
			...prevData,
			[fieldName]: data,
		}));
	}

	useEffect(() => {
		row = _.merge(row, editedData);
	}, [editedData]);

	const secondaryVariantsList = row.secondary_variants;
	return (
		<>
			<tr className="bg-slate-100">
				<td className="px-4 py-4 text-sm font-medium whitespace-nowrap"></td>
				<td className="px-12 py-4 font-medium">
					<div className="ml-24 flex items-start">
						<div
							className={`w-6 h-6 -mx-1 border-2 rounded-full`}
							style={{
								backgroundColor: themeConstants.colorMap[row.name],
							}}></div>
						<div className="pl-4">
							{isEditable ? (
								<EditableField
									handleEditData={handleEditData}
									keyValue="name"
									defaultValue={row.name}
								/>
							) : (
								<h4 className="text-grey-400 text-md">{row.name}</h4>
							)}
							<div className="flex">
								<p className="text-slate-400 text-sm">
									{secondaryVariantsList.length > 0
										? `${secondaryVariantsList.length} ${row.secondary_variant_name}s`
										: ""}{" "}
								</p>
								<ActiveStatusBadge isRowActive={row.active} />
							</div>
							<ExpandableButton
								key={row.id}
								isOpen={isOpen}
								toggle={toggle}
							/>
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
						key={row.id}
						isEditable={isEditable}
						toggleIsEditable={toggleIsEditable}
						saveDataToSessions={saveDataToSessions}
					/>
				</td>
			</tr>
			{isOpen && secondaryVariantsList.length > 0 ? (
				<>
					{secondaryVariantsList.map((secondaryVariantRow, idx) => (
						<SecondaryRow
							mainProductId={mainProductId}
							primaryRowId={primaryRowId}
							secondaryRowId={idx}
							row={secondaryVariantRow}
						/>
					))}
				</>
			) : (
				<></>
			)}
		</>
	);
}

export default PrimaryVariantRow;
