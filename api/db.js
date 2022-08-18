const data = {
	users: require("./dummyData/userDummies"),
	resources: require("./dummyData/resourceDummies"),
	tracks: require("./dummyData/trackDummies")
};	

module.exports = () => {
	return data;
};
