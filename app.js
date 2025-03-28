const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require ("body-parser");

const PORT = 8000; // Porta TCP do servidor HTTP da aplicação

const app = express();

const db = new sqlite3.Database("user.db");

db.serialize( () => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, 
         username TEXT, password TEXT, email TEXT, celular TEXT, cpf TEXT, rg TEXT)`);
});

app.use("/static", express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//nst index= "<a href='/sobre'>Sobre</a><a href='/info'>Info</a>";
// const sobre = 'Vc está na pagina "Sobre"<br><a href="/">Voltar</a>';
// const login = 'Vc está na pagina "Login"<br><a href="/">Voltar</a>';
const cadastro = 'Vc está na pagina "Casdatro"<br><a href="/">Voltar</a>';

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/sobre",(req,res) => {
    res.send(sobre);
})

app.get("/login",(req,res) => {
    res.send(login);
})

app.post("/login",(req, res) => {
    res.send("Login ainda não implementado.");
});


app.get("/cadastro",(req,res) => {
    res.send(cadastro);
});

app.post("/cadastro",(req,res) => {
    req.body
    ? console.log(JSON.stringify(req.body))
    : console.log(`Body vazio: ${req.body}`);
    res.send (
        `Bem vindo usuario: ${req.body.username}, seu email é ${req.body.email}`
    );
});


// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () =>{
    console.log(`Servidor sendo executado na porta ${PORT}!`);
});
