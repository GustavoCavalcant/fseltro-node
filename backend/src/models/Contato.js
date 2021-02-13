const { Schema, model } = require('mongoose')

const ContatoSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    },
    data: {
        type: Date,
        default: Date.now
    }
})

const modelo = model('comentario', ContatoSchema)

module.exports = modelo