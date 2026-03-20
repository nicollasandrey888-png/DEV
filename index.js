const express = require("express");
const app = express();

app.get("/", (req, res) => { 
    res.send("Hello World!"); // Mensagem corrigida para "Hello World!"
});

app.listen(3005, () => {
    console.log("Servidor rodando na porta 3005"); // Mensagem de log mais descritiva
});

//qualquercoisai