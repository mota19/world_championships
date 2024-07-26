const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const EmployeeModel = require('./models/Employee')
const TeamsModel = require('./models/teams')
const TeamStatsModel = require('./models/team')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee")

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        res.json("Success");
                    } else {
                        res.json("The password is incorrect");
                    }
                });
            } else {
                res.json("No record exists");
            }
        });
});

app.post('/register', (req, res) => {
    const { password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.json(err);
        } else {
            EmployeeModel.create({ ...req.body, password: hash })
                .then(employees => res.json(employees))
                .catch(err => res.json(err));
        }
    });
});

app.get('/getTeamStats', (req, res) => {
    const sortBy = req.query.sortBy || 'Position';
    const sortOrder = req.query.sortOrder || 'asc';
  
    TeamStatsModel.find().sort({ [sortBy]: sortOrder })
      .then(team => res.json(team))
      .catch(err => res.json(err))
});

app.get('/getTeams', (req, res) => {
    const sortBy = req.query.sortBy || 'Position';
    const sortOrder = req.query.sortOrder || 'asc';
  
    TeamsModel.find().sort({ [sortBy]: sortOrder })
      .then(teams => res.json(teams))
      .catch(err => res.json(err))
});


app.listen(3001,()=>{
    console.log("server is running")
})

