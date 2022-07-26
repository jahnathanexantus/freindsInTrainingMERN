const db = require("../config/connection");
const { Profile, Gym } = require("../models");
const gymData = require("./gymData.json");
const profileData = require("./profileData.json");

function seed() {
	// gymData.map(async(d)=>{

	//   let newGym =  await Gym.create(d);
	// console.log(newGym);
	// })
	profileData.map(async (d) => {
		let newProfile = await Profile.create(d);
		console.log(newProfile);
	});
}
db.once("open", () => {
	seed();
});
