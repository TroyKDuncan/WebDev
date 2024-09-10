// This is a server built in Express.js instead of HTTP

import express from 'express';

const app = express();

// everything passes from top to bottom kinda like a switch statement
// with routes, once the route is found, then it returns and skips the rest
// with middleware, you can run requests through multiple functions with use before the routes

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('getting root')
})
app.get('/profile', (req, res) => {
    res.send('getting profile')
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Success')
})
app.listen(3000)

