import axios from "axios";
import { useState, useEffect } from 'react';

function TeamStat(){
    const [team, setTeam] = useState([]);
 
  
    useEffect(() => {
      axios.get(`http://localhost:3001/getTeamStats`)
        .then(response => setTeam(response.data))
        .catch(error => console.error(error));
    }, []);
  
return(

    <div className="team-stat-container">
        <div className="schedule">
            <h2>Футбольний розклад</h2>

        </div>
        
    {team.map(Teams => {
         return <div key={Teams._id} className="scheduleStats">
        <div className="TimeDate">
           <p className="TimeDate_Item">{Teams.category}</p>
            <p className="TimeDate_Item">{Teams.hour}</p>
            <p className="TimeDate_Item">{Teams.date}</p>
        </div>
        <div className="Goals">
            <p className="Goals_Item_name">{Teams.team1}</p>    
            <div className="div_goals">       
            <p className="Goals_Item">{Teams['number of goals team1']}:</p>
            <p className="Goals_Item">{Teams['number of goals team2']}</p>
            </div>  
            <p className="Goals_Item_name">{Teams.team2}</p>
        </div>
         </div>
      }          
      )}
    </div>
)
}

export default TeamStat