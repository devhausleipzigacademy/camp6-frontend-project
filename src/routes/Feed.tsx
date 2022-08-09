import { useEffect, useState } from "react";

import { data } from "autoprefixer";
import { Searchbar } from "../components/buttons/Feed/SearchBar";
import SearchedFeed from "../components/buttons/Feed/Youtube/SearchedFeed";

export function requestPost(searchText: string, numberOfPosts: number) {
	fetch(
		`https://www.reddit.com/search.json?limit=${numberOfPosts}&q=${searchText}`
	).then((result) => {
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

export default function Feed() {
	const [articles, setArticles] = useState([]);
	const [query, setQuery] = useState([]);
	const [cats, setCats] = useState([]);
	const [rabbits, setRabbits] = useState([]);
	const [searchText, setSearchText] = useState("");

	const [subReddit, setSubReddit] = useState("memes");
	const cat = [];

	// @ts-ignore

	return (
		<>
			<div className="pt-28">
				<Searchbar query={query} setQuery={setQuery} />
				<SearchedFeed />
			</div>
		</>
	);
}
function setArticles(children: any) {
	throw new Error("Function not implemented.");
}
