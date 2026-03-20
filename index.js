const express = require("express");
const app = express();

app.get("/" , ( rel, res) => { 
    res.send("hello word");

});

app.listen(3005, () => {
    console.log("Servidor on");

});

//qualquercoisai
