const express = require("express");
// dot env file for security purpose to hide database connection password username url etc
const dotenv = require('dotenv');
const dbConnection = require('./config/db');

// cors for cross origin. It means that connect frontend and backend in different ports
var cors = require('cors');

// import schema which was defined in modal
const WeightController = require("./modal/weightModal");

// env file to run it and access all secure keys.
dotenv.config();
let db = dbConnection();

const app = express();
app.use(express.json());
app.use(cors());

// api request to store weight
app.post("/api/weight", async (req, res) => {
    let data = {
        weight: req.body.data
    };
    const newWeight = await WeightController.create(data);
    const responseWeight = await WeightController.findOne({
        _id: newWeight._id
    })

    res.json(responseWeight);
})

// api post request to remove weight by id
app.post('/api/remove/:id', async (req, res) => {
    let id = req.params.id;
    let data = await WeightController.remove({_id: id});
    if(data.acknowledged) {
        const data = await WeightController.find({});
        res.json(data)
    }
})

// remove all
app.post('/api/removeall', async (req, res)=> {
    let data = await WeightController.deleteMany({})

    res.json(data);
})

// api request to fetch all stored weights.
app.get('/api/weights', async (req, res) => {
    const data = await WeightController.find({});
    res.json( data )
})

const server = app.listen(5000, console.log("now server has been started on port "));

const io = require('socket.io')(server, {
    pingTimeout: 5000,
    cors:{
        origin: 'http://localhost:4200',
    },
});

io.on("connection", (socket)=>{
    // console for testing when socket connected or not!
    console.log("backend connected with socket");

    // socket.emit('changeState', { message: 'Hello from the server!' });
    setInterval(() => {
        // Simulate weight value
        let time = new Date().getTime() % 30000;
        let weight = ((time < 15000) ? (time / 15000) * 200 : 200 - ((time - 15000) / 15000) * 200).toFixed(3);
        let newStr = String(weight).replace(/\./g, ",");
        
        // Send weight value over the socket
        socket.emit('changeState', { weight: weight });

    }, 1000);

    socket.off("setup", ()=>{
        console.log("user disconnected !", LoggedUser._id);
        socket.leave(LoggedUser._id)
    })
})

