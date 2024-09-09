// This is a server built in Express.js instead of HTTP

import express from 'express';

const app = express();

// everything passes from top to bottom kinda like a switch statement
// with routes, once the route is found, then it returns and skips the rest
// with middleware, you can run requests through multiple functions with use before the routes

app.use((req, res, next) => {
    console.log('Hey there from first USE');
    next();
})
app.use((req, res, next) => {
    console.log('Hey there from second USE');
    next();
})

app.get('/', (req, res) => {
    res.send('getting root')
})
app.get('/profile', (req, res) => {
    res.send('getting profile')
})
app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user)
})
app.listen(3000)

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());