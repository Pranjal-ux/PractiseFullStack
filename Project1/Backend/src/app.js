require('dotenv').config();
const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.route')

app.get('/', (req, res) => {
    res.send('Hello')
})
app.use('/ai',aiRoutes)





module.exports = app;