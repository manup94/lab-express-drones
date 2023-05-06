mongoose = require('mongoose')
Dron = require('./../models/Drone.model')

MONGO_URI = "mongodb://127.0.0.1:27017/lab-express-drones"



const drones = [
    {
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18
    },
    {
        name: "El empepinador 3000",
        propellers: 17,
        maxSpeed: 666
    }
];


mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
        return Dron.create(drones)
    })
    .then(dronsFromDB => {
        console.log(`Created ${dronsFromDB.length} drones`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log('DB connection closed!')
    })
    .catch(err => {
        console.log(`An error occurred while creating drones from the DB: ${err}`)
    })

