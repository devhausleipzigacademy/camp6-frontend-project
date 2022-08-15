import { useEffect, useState } from "react";

import { data } from "autoprefixer";

import SearchedFeed from "../components/Feed/SearchedFeed";
import { Youtube } from "../components/Feed/Youtube/YoutubeConfig";

export default function Feed() {
	return (
		<>
			<div className="">
				<SearchedFeed />
			</div>
		</>
	);
}
