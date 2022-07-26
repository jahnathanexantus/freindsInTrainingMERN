const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const exProfileSchema = new Schema({
	gender: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	fitness_level: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	availability: {
		type: String,
		required: true,
	},
});



const ExProfile = model("ExProfile", exProfileSchema);

module.exports = ExProfile;
