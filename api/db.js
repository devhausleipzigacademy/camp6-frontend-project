const tracksData = require("./dummyData/trackDummies");

const topicsData = tracksData.reduce((accum, track) => {
	const topics = track.topics.map((topic) => {
		topic.trackId = track.id;
		return topic;
	});
	delete track["topics"];

	accum.push(...topics);
	return accum;
}, []);

const tasksData = topicsData.reduce((accum, topic) => {
	const tasks = topic.tasks.map((task) => {
		task.topicId = topic.id;
		return task;
	});
	delete topic["tasks"];

	accum.push(...tasks);
	return accum;
}, []);

const data = {
	users: require("./dummyData/userDummies"),
	resources: require("./dummyData/resourceDummies"),
	topics: topicsData,
	tasks: tasksData,
	tracks: tracksData,
};

module.exports = () => {
	return data;
};
