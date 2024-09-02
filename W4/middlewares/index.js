const express = require('express');
const userRoutes = require('./src/routes/users');
const path = require('path')

const app = express();

const port = process.env.PORT || 3000;

app.use(userRoutes);

app.use('/public', express.static(path.join(__dirname, 'assets')), (req, res) => {
})

app.get('', (req, res) => {
    const url = path.join(__dirname, 'src', 'views', 'index.html')
    res.sendFile(url)
})

app.listen(port, () => {
    console.log(`API is running in port ${port}`)
})

app.get('', (req, res) => {
    const url = path.join(__dirname, 'src', 'views', 'index.html')
    res.sendFile(url)
})