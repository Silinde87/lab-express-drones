// Iteration #1
const drones = [
	{ name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
	{ name: "Racer 57", propellers: 4, maxSpeed: 20 },
	{ name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const Drone = require("../models/Drone.model");
const mongoose = require('mongoose');
const DB_NAME = 'express-drones-dev';

mongoose
    .connect(`mongodb://localhost/${DB_NAME}`)
    .then(() => {
        console.log("Connected to database. Creating the seed info.");

        Drone.insertMany(drones).then((drones) => {
            console.log(`${drones.length} drones inserted`);
            mongoose.connection.close();
        })
    })
    .catch((error) => console.error(error));