const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://salesorder:Thanu2003.@cluster0.eh9l6mq.mongodb.net/mern-voluntee'


// useNewUrlParser :
// The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.
// Note that if you specify useNewUrlParser: true, you must specify a port in your connection string, like mongodb://localhost:27017/dbname.
// The new url parser does not support connection strings that do not have a port, like mongodb://localhost/dbname.

// useUnifiedTopology:
// False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true, except for the unlikely case that it prevents you from maintaining a stable connection.


mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=> {
    console.log('Mongo DB connection Successful!')
})


module.exports = mongoose