require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bountyHunters', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

mongoose.connection.once('open', () => {
    console.log((`Connected to MongoDB on ${mongoose.connection.host}:${mongoose.connection.port}`));
})

module.exports = {
    Bounty: require('./Bounty'),
    
}