const mongoose = require('mongoose');

function connmongo() {
    mongoose.connect("mongodb://localhost/fseletro",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB conectado com sucesso!")
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = connmongo()