const express = require("express");
require("dotenv").config()

// create a new server
const server = express();

// routes 
server.get("/", (request, response)  => {

    response.send({
        message: "Server works fine"
    })


})


//listening to request 
server.listen(process.env.PORT, () => console.log(`Server is listening on http://0.0.0.0:${process.env.PORT}`))