// rota clientes
import express from "express";
const rota = express.Router();

rota.get("/clientes", (req, res) =>{
    const clientes = [
        {nome: "Luiz", cpf: "123.456.789-00"},
        {nome: "Letícia", cpf: "321.123.456-90"},
        {nome: "Pedro", cpf: "222.333.444-55"},
        {nome: "Tamashirp", cpf: "555.555.555-55"}
    ];
    res.render('clientes', {
        clientes: clientes,
    });
});

export default rota;