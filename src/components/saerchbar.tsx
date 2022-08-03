import React, { useState } from "react";

export function Searchbar() {
	const [boom, setBoom] = useState("");

	function boomMaker() {
		setBoom("hidden");
	}
	return (
		<div
			id="searchBar"
			className={`flex   flex-col  relative      justify-center`}
		>
			<button
				onClick={boomMaker}
				id="makeBom"
				className="btn absolute right-0 top-0 animate-pulse duration-200  btn-circle"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<div id="searchBar" className="grid grid-flow-col ">
				<div className="form-control">
					<div className="input-group  ">
						<input
						onChange={()=>{ }}
							type="text"
							placeholder="Reddit/r/..."
							className="input w-[30rem] text-black text-xl input-bordered"
						/>
						<button className="btn btn-square">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 active:bg-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
						<div className="form-control">
							<div className="input-group">
								<select className="select select-bordered">
									<option>MeMes</option>
									<option>Cats</option>
									<option>HERE COMES THE TASK</option>
									<option>HERE COMES THE TASK</option>
								</select>
								<button className="btn">Go</button>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	);
}
