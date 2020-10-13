const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is the first page of the server blab blab");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server runnig again.....");
});

