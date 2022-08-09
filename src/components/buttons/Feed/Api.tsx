import { useEffect, useState } from "react";

import { data } from "autoprefixer";
import { Searchbar } from "./SearchBar";

import SearchedFeed from "./Youtube/SearchedFeed";
import { Youtube } from "./Youtube/YoutubeConfig";
export default function Api() {
	const [articles, setArticles] = useState([]);
	const [cats, setCats] = useState([]);
	const [rabbits, setRabbits] = useState([]);

	const [subReddit, setSubReddit] = useState("memes");
	const cat = [];
	useEffect(() => {
		fetch(`https://www.reddit.com/r/${subReddit}/top.json?limit=5`).then(
			(result) => {
				if (result.status != 200) {
					console.log("ERRPORR, BRUVVV");
				}
				result.json().then((datas) => {
					if (datas != null) {
						setArticles(datas.data.children);
					}
				});
			}
		);
	});
	useEffect(() => {
		fetch(`https://www.reddit.com/r/babies/top.json?limit=5`).then((result) => {
			if (result.status != 200) {
				console.log("ERRPORR, BRUVVV");
			}
			result.json().then((datas) => {
				if (datas != null) {
					setRabbits(datas.data.children);
				}
			});
		});
	});

	// @ts-ignore

	return (
		<>
			<div className="">
				<Searchbar subReddit={subReddit} setSubReddit={setSubReddit} />
				<SearchedFeed />
			</div>
		</>
	);
}
