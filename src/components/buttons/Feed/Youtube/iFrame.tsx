export function Iframe() {
	var tag = document.createElement("script");
	tag.src = "https://www.youtube.com/iframe_api";
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var firstScriptTag = document.getElementsByTagName("script")[0];
	return (
		<>
			<div id="player"></div>
		</>
	);
}
