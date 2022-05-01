const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/style.css'))
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/script.js'))
})

const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});