const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is the first page of the server");
});

app.listen(8080, () => {
    console.log("Server runnig again.....");
});

