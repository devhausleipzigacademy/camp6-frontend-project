import { useEffect, useState } from "react";
import { Task } from "../../database/TypesNConsts";
import { data } from "autoprefixer";
import { Searchbar } from "./SearchBar";
import { setInterval } from "timers/promises";
import { Youtube } from "./Youtube/YoutubeConfig";
import { moveCursor } from "readline";
import { taskDummy, tasksDummies } from "../../database/Dummies";
import { tracksDummies } from "../../database/newDummies";

import { Console } from "console";
import { Post } from "./Post";

export default function SearchedFeed({ task }: any) {
	const [articles, setArticles] = useState([] as Array);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState(tracksDummies[0].title);
	const [limit, setLimit] = useState("100");
	const [save, setSave] = useState("");
	const [isHidden, setIsHidden] = useState(true);
	const [opacity, setOpacity] = useState(0.1);
	function randomize(arr: Array<any>): Array<any> {
		var i, j, tmp;
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}
		console.log(arr);
		return arr;
	}
	useEffect(() => {
		console.log(articles);
	}, [articles]);
	useEffect(() => {
		if (query === "Random") {
			Promise.all(
				tracksDummies.map((item, idx) =>
					fetch(`https://www.reddit.com/search.json?limit=20&q=${item}&top`)
				)
			).then((listOfResponses) => {
				Promise.all(
					listOfResponses.map(async (response) => {
						console.log(response);

						return await response.json().then((responseObj) => {
							return responseObj.data.children;
						});
					})
				).then((posts) => setArticles(randomize(posts.flat())));
			});
		} else {
			fetch(`https://www.reddit.com/search.json?limit=${limit}&q=${query}&top
		`).then((result) => {
				if (result.status != 200) {
					console.log("ERRPORR, BRUVVV");
				}

				result.json().then((datas) => {
					if (datas != null) {
						setArticles(datas.data.children);
					}
				});
			});
		}
	}, [query]);

	let color = "";
	function colorChange() {
		color = "fill-red-300";

		console.log(color);
	}
	colorChange();
	function searchBar(e: any) {
		setSearch(e.target.value);
		e.preventDefault();
	}
	function submit(event: any) {
		event.preventDefault();
		setQuery(search);
	}

	function dropDown() {
		const drop = document.getElementById("dropDown");
	}

	return (
		<div className=" ">
			<Youtube />
			<div className="flex flex-row mt-10 items-end justify-between">
				<div className="inline-block   relative w-64">
					<p>Filter by Tracks</p>
					<select
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						className=" appearance-none w-full    px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
					>
						<option value="">Select Track</option>
						<option value="Random">Random</option>
						{tracksDummies.map((track) => (
							<option value={track.title}>{track.title}</option>
						))}
					</select>
					<div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-black text-black text mt-6 h-6 w-9"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				<form onSubmit={submit} className="w-full max-w-sm">
					<div className="flex items-center  border-b border-teal-500 py-2">
						<input
							onChange={searchBar}
							className="appearance-none bg-transparent border-none w-full text-gray-800  text-l font-medium mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="search"
							placeholder=" Reddit/r/..."
						/>
						<button
							className="flex-shrink-0 bg-teal-500
						hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
							type="submit"
						>
							Search
						</button>
					</div>
				</form>
			</div>

			<div className="flex  relative flex-col  pl-10 h-full w-full mt-20 no-scrollbar items-center justify-evenly  gap-20">
				{articles
					.filter((post: any) =>
						post.data.post_hint === "image" ? true : false
					)
					.map((post: any) => (
						<Post data={post.data} />
					))}
			</div>
		</div>
	);
}
