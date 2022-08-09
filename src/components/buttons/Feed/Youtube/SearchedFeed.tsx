import { useEffect, useState } from "react";

import { data } from "autoprefixer";
import { Searchbar } from "../SearchBar";
export default function SearchedFeed() {
	const [articles, setArticles] = useState([]);
	const [cats, setCats] = useState([]);
	const [rabbits, setRabbits] = useState([]);

	const [subReddit, setSubReddit] = useState("JavaSCript");
	const cat = [];
	useEffect(() => {
		fetch(`https://www.reddit.com/search.json?q={computer}`).then((result) => {
			if (result.status != 200) {
				console.log("ERRPORR, BRUVVV");
			}
			result.json().then((datas) => {
				if (datas != null) {
					setArticles(datas.data.children);
				}
			});
		});
	});

	return (
		<>
			<div className=" flex  flex-wrap h-[52rem] w-full">
				<div className="flex h-full flex-col w-[70%] no-scrollbar overflow-y-scroll mt-10 gap-5 place-self-center">
					{articles
						.filter((post) => !post.data.is_gallery)
						.flatMap((post) => (
							<div className="text-center flex flex-col p-4 border-opacity-25  border-black shadow-black flex-wrap rounded-xl border-2   h-fit bg-purple-200 ">
								<h1>{post.data.title}</h1>
								{/* <Image src={post.data.thumbnail} /> */}
								{post.data.is_video && !post.data.media.is_gif ? (
									<video
										controls
										autoPlay
										src={post.data.media.reddit_video.fallback_url}
									></video>
								) : (
									<img src={post.data.url} />
								)}
							</div>
						))}
				</div>
			</div>
		</>
	);
}
