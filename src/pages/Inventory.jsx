import axios from "axios";
import React, { useEffect, useState } from "react";
import themeConstants from "../assets/themeConstants/themeConstants";
import MainProductRow from "../components/MainProductRow";
import InventorySearchBar from "../components/utility/InventorySearchBar";

function Inventory() {
	const [filterText, setFilterText] = useState("");
	const [inventory, setInventory] = useState([]);
	const url = "https://mocki.io/v1/bba42ac4-c683-45f1-9316-babbb7fe53e9";

	useEffect(() => {
		axios.get(url).then((response) => {
			// Preprocess the data.
			let data = response.data;

			data.forEach((mainProduct, i) => {
				let colorNames = [];
				let sizeNames = new Set();
				if (sessionStorage.getItem(`main_${mainProduct.id}`) != null) {
					mainProduct = JSON.parse(
						sessionStorage.getItem(`main_${mainProduct.id}`)
					);
				}
				mainProduct.primary_variants.forEach((primaryVariant, j) => {
					if (
						sessionStorage.getItem(`primary_${mainProduct.id}_${j}`) != null
					) {
						primaryVariant = JSON.parse(
							sessionStorage.getItem(`primary_${mainProduct.id}_${j}`)
						);
					}
					primaryVariant.secondary_variant_name =
						mainProduct.secondary_variant_name;
					colorNames.push(primaryVariant.name);
					primaryVariant.secondary_variants.forEach((secondaryVariant, k) => {
						if (
							sessionStorage.getItem(`sec_${mainProduct.id}_${j}_${k}`) != null
						) {
							secondaryVariant = JSON.parse(
								sessionStorage.getItem(`sec_${mainProduct.id}_${j}_${k}`)
							);
						}
						sizeNames.add(themeConstants.sizeMap[secondaryVariant.name]);
						primaryVariant.secondary_variants[k] = secondaryVariant;
					});
					mainProduct.primary_variants[j] = primaryVariant;
				});
				mainProduct.colorNames = colorNames;
				mainProduct.sizeNames = Array.from(sizeNames);
				data[i] = mainProduct;
			});
			setInventory(data);
		});
	}, []);

	return (
		<section className="container px-4 mx-auto">
			<div className="mt-6 md:flex md:items-center md:justify-between">
				<InventorySearchBar
					filterText={filterText}
					setFilterText={setFilterText}
				/>
			</div>

			<div className="flex flex-col mt-6">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden border border-gray-200 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500">
											<span>Id</span>
										</th>
										<th
											scope="col"
											className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500">
											<span>Product</span>
										</th>
										<th
											scope="col"
											className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-50">
											Price
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
											Discount
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
											Colour
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
											Sizes
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
											Inventory
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500">
											Lead Time
										</th>
										<th
											scope="col"
											className="relative py-3.5 px-4">
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{inventory
										.filter((row) => {
											if (
												row.title
													.toLowerCase()
													.indexOf(filterText.toLowerCase()) === -1
											) {
												return false;
											}
											return true;
										})
										.map((row) => (
											<MainProductRow
												key={row.id}
												row={row}
											/>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Inventory;
