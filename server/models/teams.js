const mongoose = require('mongoose')

const TeamsSchema = new mongoose.Schema({
    _id: String,
    Position: Number,
    Team: String,
    'Games Played': Number,
    Win: Number,
    Draw: Number,
    Loss: Number,
    'Goals For': Number,
    'Goals Against': Number,
    'Goal Difference': Number,
    Points: Number,
})

const TeamsModel = mongoose.model("teams", TeamsSchema)

module.exports = TeamsModel