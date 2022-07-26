const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const gymSchema = new Schema({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

const Gym = model("Gym", gymSchema);

module.exports = Gym;
