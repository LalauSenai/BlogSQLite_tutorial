const express = require("express");

const PORT = 8000; // Porta TCP do servidor HTTP da aplicação

const app = express();

app.get('|', (req, res) => {
    res.send("Olá SESI!");
});

// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () =>{
    console.log(`Servidor sendo executado na porta ${PORT}!`);
});

