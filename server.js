const express = require('express');
const app = express();

require('dotenv').config
// const cors =require('cors')

// app.use(cors({ origin: '*'}))

app.use(express.urlencoded({ extended: false}))
app.use(express.json)

const models = require('./models')


app.get('/', (req, res) => {
    console.log('hello');
    res.send('hello from root')
})

app.use('/bounties',require('./controllers/bountiesController'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log((`Server started on ${PORT}`));
})

