export default function Header() {
	return (
		<>
			<div className="h-[8vh]  bg-slate-100 border-b-2 border-black border-opacity-40 w-full items-center text-5xl flex justify-between  flex-row">
				<p className="font-heading  font-extrabold ml-6">Logo</p>
				<div className="flex flex-row items-center gap-16 mr-9 justify-between">
					<div className="flex flex-row gap-2 space-x-5 pr-5 bg-blue-300 text-lg  p-1 rounded 3xl">
						<p className="font-heading">+</p>
						<p className="font-heading">Add Task</p>
					</div>
					<div className=" rounded-full">
						<img src="https://i.ytimg.com/vi/WQgYa8DhV5Y/maxresdefault.jpg" className="h-14 w-14 rounded-full" />
					</div>
				</div>
			</div>
		</>
	);
}
