import _ from "lodash";
import React, { useEffect, useState } from "react";
import useEditController from "../hooks/useEditController";
import useOpenController from "../hooks/useOpenController";
import EditRowButton from "./EditRowButton";
import ExpandableButton from "./ExpandableButton";
import PrimaryVariantRow from "./PrimaryVariantRow";
import ProductProperties from "./ProductProperties";
import ActiveStatusBadge from "./utility/ActiveStatusBadge";
import EditableField from "./utility/EditableField";

function MainProductRow({ row }) {
	const { isOpen, toggle } = useOpenController(false);
	const { isEditable, toggleIsEditable } = useEditController(false);
	const [editedData, setEditedData] = useState(row);

	function saveDataToSessions() {
		sessionStorage.setItem(`main_${row.id}`, JSON.stringify(editedData));
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

	let primaryVariantRows = row.primary_variants;

	return (
		<>
			<tr key={row.id}>
				<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
					<div>
						<h2 className="font-medium text-gray-800 ">{row.id}</h2>
					</div>
				</td>
				<td className="px-12 py-4 font-medium">
					<div className="flex items-start">
						<img
							src={row.image}
							className="w-16"
							alt=""
						/>
						<div className="pl-4 w-full">
							{isEditable ? (
								<EditableField
									handleEditData={handleEditData}
									keyValue="title"
									defaultValue={row.title}
								/>
							) : (
								<h4 className="text-grey-400 text-md">{row.title}</h4>
							)}
							<div className="flex">
								<p className="text-slate-400 text-sm">
									{row.primary_variants.length > 0
										? `${row.primary_variants.length} ${row.primary_variant_name}s`
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
					isEditable={isEditable}
					handleEditData={handleEditData}
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

			{isOpen && primaryVariantRows.length > 0 ? (
				<>
					{primaryVariantRows.map((primaryVariantRow, idx) => (
						<PrimaryVariantRow
							key={primaryVariantRow.name}
							mainProductId={row.id}
							primaryRowId={idx}
							row={primaryVariantRow}
							saveDataToSessions={saveDataToSessions}
						/>
					))}
				</>
			) : (
				<></>
			)}
		</>
	);
}

export default MainProductRow;
