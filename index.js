const express = require('express');
const app = express();
app.use(express.json());

app.get('/user', (req, res) => {
    res.json({ "id": 13, "name": "KUCP23CC013" });
});

app.post('/user', (req, res) => {
    res.json({message: 'created', data: req.body });
});


app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..');
});