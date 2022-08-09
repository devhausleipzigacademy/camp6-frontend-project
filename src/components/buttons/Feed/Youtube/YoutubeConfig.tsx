let youtubeVideoKeys = [];

export function Youtube() {
	return (
		<iframe
			id="myVideo"
			className=" self-center mt-10"
			width="968"
			height="553"
			src="https://www.youtube.com/embed/75d_29QWELk?autoplay=0"
			allow="accelerometer; fullscreen; mute;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	);
}
