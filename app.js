const express = require('express');
const app = express();


app.get('/', (req, res) => res.json({
    msg:"Welconend"
}))

app.listen(4000)