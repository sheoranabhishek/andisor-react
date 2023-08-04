import React from "react";
import themeConstants from "../assets/themeConstants/themeConstants";
import EditableField from "./utility/EditableField";

function ProductProperties({ row, isEditable, handleEditData }) {
	return (
		<>
			<td className="px-4 py-4 text-sm whitespace-nowrap">
				<div className="flex flex-col items-center justify-center">
					{isEditable ? (
						<EditableField
							handleEditData={handleEditData}
							keyValue="price"
							defaultValue={row.price}
						/>
					) : (
						<h4 className="text-gray-700 ">${row.price}</h4>
					)}
					<h4 className="text-gray-400 line-through">
						$
						{Number(row.price) +
							(Number(row.discountPercentage) * Number(row.price)) / 100}
					</h4>
				</div>
			</td>
			<td className="px-4 py-4 text-sm whitespace-nowrap">
				<div className="flex justify-center">
					{isEditable ? (
						<EditableField
							handleEditData={handleEditData}
							keyValue="discountPercentage"
							defaultValue={row.discountPercentage}
						/>
					) : (
						<h4 className="text-gray-700 ">{row.discountPercentage}%</h4>
					)}
				</div>
			</td>
			<td className="px-4 py-4 text-sm whitespace-nowrap">
				{row.colorNames ? (
					<div className="flex items-center">
						{row.colorNames
							.slice(0, themeConstants.MAXIMUM_COLORS_DISPLAY_LIMIT)
							.map((colorName) => (
								<div
									className={`w-6 h-6 -mx-1 border-2 rounded-full`}
									key={colorName}
									style={{
										backgroundColor: themeConstants.colorMap[colorName],
									}}></div>
							))}
						{row.colorNames.length >
						themeConstants.MAXIMUM_COLORS_DISPLAY_LIMIT ? (
							<p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
								+
								{row.colorNames.length -
									themeConstants.MAXIMUM_COLORS_DISPLAY_LIMIT}
							</p>
						) : (
							""
						)}
					</div>
				) : (
					<></>
				)}
			</td>
			<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
				{row.sizeNames ? (
					<div className="flex items-center">
						{row.sizeNames
							.slice(0, themeConstants.MAXIMUM_SIZE_DISPLAY_LIMIT)
							.map((sizeName) => (
								<div
									className={`w-6 h-6 bg-slate-100 mr-1 text-center`}
									key={sizeName}>
									{sizeName}
								</div>
							))}

						{row.sizeNames.length >
						themeConstants.MAXIMUM_SIZE_DISPLAY_LIMIT ? (
							<p className="flex items-center justify-center w-6 h-6 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
								+
								{row.sizeNames.length -
									themeConstants.MAXIMUM_SIZE_DISPLAY_LIMIT}
							</p>
						) : (
							""
						)}
					</div>
				) : (
					<></>
				)}
			</td>
			<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
				<div className="flex justify-center">
					{isEditable ? (
						<EditableField
							handleEditData={handleEditData}
							keyValue="inventory"
							defaultValue={row.inventory}
						/>
					) : (
						<h2 className="font-medium text-gray-800">{row.inventory}</h2>
					)}
				</div>
			</td>
			<td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
				<div className="flex justify-center">
					{isEditable && row.leadTime ? (
						<EditableField
							handleEditData={handleEditData}
							keyValue="leadTime"
							defaultValue={row.leadTime}
						/>
					) : (
						<h2 className="font-medium text-gray-800">{row.leadTime}</h2>
					)}
				</div>
			</td>
		</>
	);
}

export default ProductProperties;
