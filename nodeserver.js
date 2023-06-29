const express = require('express')
const app = express()

const data = [
    {
        _id: 1,
        body: "User 1"
    },
    {
        _id2: 2,
        body: "User 2"
    }
];

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
});

app.listen(8089, () => {
    console.log('Server started!')
});
