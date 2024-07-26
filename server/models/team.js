const mongoose = require('mongoose');

const TeamStatsSchema = new mongoose.Schema({
    _id: String,
    team1: String,
    team2: String,
    'possession team1': String,
    'possession team2': String,
    possession_in_contest: String,
    'number of goals team1': Number,
    'number of goals team2': Number,
    date: String,
    hour: String,
    category: String,
});

const TeamStatsModel = mongoose.model('matches', TeamStatsSchema);

module.exports = TeamStatsModel;