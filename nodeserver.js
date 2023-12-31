const express = require('express')
const app = express()

// const data = [
//     {
//         _id: 1,
//         body: "User 1"
//     },
//     {
//         _id2: 2,
//         body: "User 2"
//     }
// ];

// app.use(function (request, response) {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

const data = 'Hello user!'

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
});

app.listen(8089, () => {
    console.log('Server started!')
});
