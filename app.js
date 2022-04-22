const express = require('express');
const path = require('path')
const app = express();
const port = 3040;
/* Middlewares */
app.use(express.static('public'))
/* routes */
app.get('/', (req, res)=> res.sendFile (path.resolve(__dirname, 'views', 'home.html')))
app.get('/register', (req, res)=> res.sendFile (path.resolve(__dirname, 'views', 'register.html')))
app.get('/login', (req, res)=> res.sendFile (path.resolve(__dirname, 'views', 'login.html')))
/* server */
app.listen(port, () => console.log(`Server running in http://localhost:${port}`))

