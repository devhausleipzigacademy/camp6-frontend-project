import { useEffect, useState } from "react";
import { Task } from "../../database/TypesNConsts";
import { data } from "autoprefixer";
import { Searchbar } from "./SearchBar";
import { setInterval } from "timers/promises";
import { Youtube } from "./Youtube/YoutubeConfig";
import { moveCursor } from "readline";
import { taskDummy, tasksDummies, tracksDummies } from "../../database/Dummies";

export default function SearchedFeed({ task }: any) {
	const [articles, setArticles] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("photography");
	const [limit, setLimit] = useState("100");
	const [save, setSave] = useState("");

	useEffect(() => {
		fetch(`https://www.reddit.com/search.json?limit=${limit}&q=${query}&count=2
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

	console.log(query);

	function dropDown() {
		const drop = document.getElementById("dropDown");
	}
	let redditUrl = "https://www.reddit.com/";
	const [opacity, setOpacity] = useState("100");
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
						className=" appearance-none w-full  hover:bg-purple-200 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
					>
						<option value="">Select Track</option>
						{tracksDummies.map((track, ix) => (
							<option value={tracksDummies[ix]}>{tracksDummies[ix]}</option>
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
					.filter((post) =>
					post.data.post_hint==='image'?true:false


					)
					.map((post) => (
						<>
							<div className="h-full w-fit p-10 flex text-sm    rounded-2xl relative text-black flex-col  bg-white">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 absolute  hover:fill-green-500 active:fill-purple-500 -top-6 right-2 w -6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 absolute -left-2 -top-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
</svg>

<p className="absolute text-xsm  -top-6  left-4">{post.data.ups}  times Up voted </p>
							<p className="text-[9px] absolute right-10 -top-4">{post.data.subreddit_name_prefixed}</p>
							<p className="  absolute top-1 text-[10px]">posted by u/{post.data.author}</p>
								<p className="font-medium ">{post.data.title}</p>
								<p>{post.data.selftext}</p>
								<a href={redditUrl + post.data.permalink}>
									<img
										className="h-6 hover:scale-[105%] absolute right-3 top-2"
										src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
										alt=""
									/>
								</a>
								<img
									className="h-[30rem]  self-center    rounded-2xl p-4 "
									src={post.data.url_overridden_by_dest}
									alt=""
								/>
								<p>{post.data.selftext}</p>
							<a href={redditUrl + post.data.permalink}>	<p className="text-center hover:scale-[105%] hover:underline mt-2">{post.data.num_comments} <br/> comments </p></a>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 self-center  w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
</svg>
							</div>
						</>
					))}
			</div>
		</div>
	);
}

// 	<div className="relative">
// <svg xmlns="http://www.w3.org/2000/svg" className="h-6 hover:fill-green-400 active:fill-purple-500 right-12 top-5 z-10 absolute w-6" fill="gray" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
// </svg>
// 	<iframe className="border-2 relative hover:scale-[100.8%] duration-200 rounded-xl flex  border-black border-opacity-25   shadow-inner shadow-black " id="reddit-embed embed-responsive"  src={`https://www.redditmedia.com/${x.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true;&autoplay=false` } sandbox="allow-scripts allow-orientation-lock allow-same-origin"  height="600" width="900"   do-not-allow="autoplay" scrolling="no"></iframe>

//

// </div>
//))}

{
	/* <iframe
className="border-2    relative  rounded-2xl flex   "
id="reddit-embed embed-responsive"
src={`https://www.redditmedia.com/${post.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true;&autoplay=false`}
sandbox="allow-scripts allow-orientation-lock allow-same-origin"
height="520"
width="900"
do-not-allow="autoplay"
scrolling="no"
></iframe> */
}
