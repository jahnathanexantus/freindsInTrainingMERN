const { Schema, model } = require("mongoose");


const gymSchema = new Schema({
	
	gym_name: {
		type: String,
		// allowNull: false,
		// unique: true,
	},
});

const Gym = model("Gym", gymSchema);

module.exports = Gym;
