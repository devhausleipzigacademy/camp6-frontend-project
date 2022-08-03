import { useEffect, useState } from "react";

import { data } from "autoprefixer";
import { Searchbar } from "./saerchbar";
export default function Api() {
	const [articles, setArticles] = useState([]);
	const [cats, setCats] = useState([]);
	const [rabbits, setRabbits] = useState([]);

	const [subReddit, setSubReddit] = useState("memes");
	const cat = [];
	useEffect(() => {
		fetch(`https://www.reddit.com/r/${subReddit}/top.json?limit=30`).then(
			(result) => {
				if (result.status != 200) {
					console.log("ERRPORR, BRUVVV");
				}
				result.json().then((datas) => {
					if (datas != null) {
						console.log(datas.data.children);
						setArticles(datas.data.children);
					}
				});
			}
		);
	});
	useEffect(() => {
		fetch(`https://www.reddit.com/r/babies/top.json?limit=30`).then(
			(result) => {
				if (result.status != 200) {
					console.log("ERRPORR, BRUVVV");
				}
				result.json().then((datas) => {
					if (datas != null) {
						setRabbits(datas.data.children);
					}
				});
			}
		);
	});

	useEffect(() => {
		fetch(`https://www.reddit.com/r/developers/new.json?limit=10`).then(
			(result) => {
				if (result.status != 200) {
					console.log("ERRPORR, BRUVVV");
				}
				result.json().then((datas) => {
					if (datas != null) {
						setCats(datas.data.children);
					}
				});
			}
		);
	});
	// @ts-ignore
	function createCanvas() {
		return (
			<>
				<canvas width="400" height="300" id="canVas">
					{" "}
					MegaWoman{" "}
				</canvas>
			</>
		);
	}

	return (
		<div className="flex bg-gradient-to-r   from-cyan-200 via-purple-300  to-blue-600   flex-col overflow-hidden  h-full w-full ">



			<div className="flex flex-col  no-scrollbar  p-10 gap-6 h-[30rem] w-[100%]  overflow-x-scroll flex-wrap border-b-4 border-opacity-30 border-black   ">
				{articles.map((article, idx) => (
					<div className="h-full  hover:overflow-y-clip  cursor-move  active:z-auto border-2 scrollbar-hide   active:scale-150 border-purple-500 rounded-3xl">
						<img
							// @ts-ignore
							alt={article.data.url}
							className=" object-cover  static object-center h-full  snap-center hover:scale-[102%]  duration-150 rounded-lg"
							src={
								// @ts-ignore
								article.data.is_video
									? // @ts-ignore
									  article.data.thumbnail
									: // @ts-ignore
									  article.data.url
							}
						/>
					</div>
				))}

			</div>
				<Searchbar/>
			<div className="flex flex-row gap-10 snap-x    no-scrollbar  p-10  h-ful w-[100%]  overflow-x-scroll flex-wrap  ">
				{cats.map((c) => (<div className="flex flex-col text-xl">
					<p className="text-center  font-bold ">{c.data.title}</p>
					<p>{c.data.selftext}</p>
					</div>



				))}
			</div>


		</div>
	);
}
