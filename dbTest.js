require('dotenv').config();

const models = require('./models');

models.Bounty.create({
    name: 'Yosemite',
    wanted: 'Rootin and tootin',
    client: 'Walt Disney',
    reward: 100000,
    ship: 'Ship',
    hunters: [{name: "bugs bunny", origin: "earth"}],
    captured: false,
    lastSeen: '1982'
})