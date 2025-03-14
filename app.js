const express = require("express");
const sqlite3 = require("sqlite3");

const PORT = 8000; // Porta TCP do servidor HTTP da aplicação

const app = express();

const db = new sqlite3.Database("user.db");
db.serialize( () => {
    db.run(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
    );
});

const index= "<a href='/sobre'>Sobre</a><a href='/info'>Info</a>";
const sobre = 'Vc está na pagina "Sobre"<br><a href="/">Voltar</a>';
const login = 'Vc está na pagina "Login"<br><a href="/">Voltar</a>';
const cadastro = 'Vc está na pagina "Casdatro"<br><a href="/">Voltar</a>';

app.get('/', (req, res) => {
    res.send(index);
});

app.get("/sobre",(req,res) => {
    res.send(sobre);
})

app.get("/login",(req,res) => {
    res.send(login);
})

app.get("/cadastro",(req,res) => {
    res.send(cadastro);
})
// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () =>{
    console.log(`Servidor sendo executado na porta ${PORT}!`);
});

