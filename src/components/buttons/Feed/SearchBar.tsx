import React, { useState } from "react";
import { requestPost } from "../../../routes/Feed";

export function Searchbar({ query, setQuery }: any) {
	const [search, setSearch] = useState("");
	function clickHandler() {
		const bar = document.querySelector("#bar");

		function clickHandler(e) {
			e.preventDefault();
			// console.log(query);
			setQuery(search);
		}
	}

	return (
		<>
			<div className="flex flex-row  justify-between">
				<div className="inline-block relative w-64">
					<select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						<option>tasks</option>
						<option> 2</option>
						<option> 3</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				<form className="w-full max-w-sm">
					<div className="flex items-center border-b border-teal-500 py-2">
						<input
							onChange={(e.target.value) => setSearch(e)}
							id="bar"
							className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							placeholder="Reddit/r/..."
							value={query}
						/>
						<input
							onClick={clickHandler}
							id="bar"
							placeholder="search"
							type="submit"
							className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
						></input>
					</div>
				</form>
			</div>
		</>
	);
}
