const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const connmongo = require('./mongoconn');
const comentario = require('./models/Contato');

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro",
})

server.get("/produtos", (req, res) => {
    connection.query("SELECT * FROM produtos JOIN categorias ON produtos.id_categoria = categorias.id_categoria", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.json(result)
        }
    })
});

server.get("/comentarios", async (req, res) => {
    const resultado = await comentario.find()

    res.json(resultado)
})


server.post("/comentarios" , async (req, res) => {
    const { nome, msg } = req.body;

    let resultado = await comentario.create({ nome, msg })

    res.json(resultado)
});

// server.get("/comentarios", (req, res) => {
//     connection.query("SELECT * FROM comentarios", (error, result) => {
//         if (error) {
//             res.send(error)
//         } else {
//             res.json(result)
//         }
//     })
// });

// server.post("/comentarios" , (req, res) => {
//     const { nome, msg } = req.body;
//     connection.query(`INSERT INTO comentarios(nome,msg) values ('${nome}','${msg}')`, (error, result) => {
//         if (error) {
//             res.send(error)
//         } else {
//             res.status(201).json("Mensagem enviada com sucesso!")
//         }
//     })
// });

server.listen(3333);