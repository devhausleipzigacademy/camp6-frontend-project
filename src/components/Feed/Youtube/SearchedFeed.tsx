import {useEffect, useState} from "react";

import {data} from "autoprefixer";
import {Searchbar} from "../SearchBar";
import {setInterval} from "timers/promises";
import { Youtube } from "./YoutubeConfig";
import { moveCursor } from "readline";

export default function SearchedFeed() {
	const [articles, setArticles] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("food");
	const[limit,setLimit]=useState('3')

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


function searchBar(e:any){
setSearch(e.target.value)
e.preventDefault();
}
function submit(event:any){
	event.preventDefault()
setQuery(search)

}

let display=''

function dropDown(){
const drop=document.getElementById('dropDown')
}




const[opacity,setOpacity]=useState("100")
return (
<div className="">
<Youtube/>
<div id="drop-down" className={`duration-150  ${display}  h-20 w-20 bg-black rounded-lg grid grid-flow-col grid-cols-1 grid-rows-2 border-2  border-white`}>
<p className="text-white border-b-2">SAVE</p>
<p className="text-white">Cancel</p>

</div>
			<div className="flex flex-row mt-10 items-end justify-end">
				<div className="inline-block hidden  relative w-64">
					<select className=" appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						<option>tasks</option>
						<option> 2</option>
						<option> 3</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg className="fill-black text-black h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				<form  onSubmit={submit} className="w-full max-w-sm">
					<div className="flex items-center border-b border-teal-500 py-2">
						<input onChange={searchBar}   className="appearance-none bg-transparent border-none w-full text-gray-800  text-l font-medium mr-3 py-1 px-2 leading-tight focus:outline-none" type="search" placeholder=" Reddit/r/..."/>
						<button  className="flex-shrink-0 bg-teal-500
						hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" >
							Search
						</button>
					</div>
				</form>
			</div>

			<div className="flex grow relative flex-col pl-10 w-full mt-7 no-scrollbar items-center justify-evenly  gap-14">

	{articles.filter((x)=>x.data.is_video ||x.data.url).map((x)=>(


	<div className="relative">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 hover:fill-green-400 active:fill-purple-500 right-12 top-5 z-10 absolute w-6" fill="gray" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
	<iframe className="border-2 relative hover:scale-[100.8%] duration-200 rounded-xl flex  border-black border-opacity-25   shadow-inner shadow-black " id="reddit-embed embed-responsive"  src={`https://www.redditmedia.com/${x.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true;&autoplay=false` } sandbox="allow-scripts allow-orientation-lock allow-same-origin"  height="600" width="900"   do-not-allow="autoplay" scrolling="no">




	</iframe>

</div>]
	))}</div>



		</div>
	);
}



// this is safecode let it stay here for while. I dont trust iframe at all and  I dont want to lost the code below and being have write it again
{/* <div>	{articles
					.filter((post) => !post.data.is_gallery && !(post.data.post_hint==="link"?true:false) &&post.data.post_hint &&!(post.data.post_hint==="self"?true:false)&&!(post.data.domain==="i.imgur.com"?true:false)&&!(post.data.type==="i.imgur.com"?true:false))
					.flatMap((post) => (<>
					<div className="text-center flex flex-col  p-4 border-opacity-25  scrollbar-hide w-[60%] border-black shadow-black rounded-xl border-2  justify-center  bg-purple-200 ">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 self-end hover:fill-green-600 w-6" fill='' viewBox="0 0 24 24" stroke="" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
							<h1>{post.data.title}</h1>
						{
							post.data.is_video && !post.data.media.is_gif ? <figure className="h-[20vh] w-[max] "><iframe className="h-full w-full" id="reddit-embed" src={`https://www.redditmedia.com/${post.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true` } sandbox="allow-scripts allow-same-origin allow-popups"  height="full]" width="full" scrolling="no"></iframe></figure> : <img src={post.data.url_overridden_by_dest} />}
						</div>
						</>
					))}</div> */}