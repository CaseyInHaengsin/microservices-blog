const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};


app.get('/posts/:id/comments', (req, res) => {
    
});

app.post('/posts/:id/comments', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

});


app.listen(4001, () => {
    console.log('listening on 4001');
})