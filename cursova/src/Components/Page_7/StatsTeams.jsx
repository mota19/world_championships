import { useState, useEffect } from "react";
import axios from "axios";

function StatsTeams() {
  const [teams, setTeams] = useState([]);
  const [sortBy, setSortBy] = useState("Position");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/getTeams?sortBy=${sortBy}&sortOrder=${sortOrder}`
      )
      .then((response) => {
        const filteredTeams = response.data.filter((team) =>
          team.Team.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTeams(filteredTeams);
      })
      .catch((error) => console.error(error));
  }, [sortBy, sortOrder, searchTerm]);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="Sorted">
        <label htmlFor="sortSelect">Sort by: </label>
        <select
          id="sortSelect"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Position">Position</option>
          <option value="Games Played">Games Played</option>
          <option value="Win">Win</option>
          <option value="Draw">Draw</option>
          <option value="Loss">Loss</option>
          <option value="Goals For">Goals for</option>
          <option value="Goals Against">Goals Against</option>
          <option value="Goal Difference">Goal Difference</option>
          <option value="Points">Points</option>
        </select>

        <button onClick={handleSort}>Sort</button>

        <input
          type="text"
          placeholder="Search by team..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {teams.map((team) => {
        return (
          <div className="Group_stage" key={team._id}>
            <table>
              <thead className="table_header_Group">
                <tr>
                  <th colSpan="9">{team.Team}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table_row_Group">
                  <th>Position</th>
                  <th>Games Played</th>
                  <th>Win</th>
                  <th>Draw</th>
                  <th>Loss</th>
                  <th>Goals for</th>
                  <th>Goals Against</th>
                  <th>Goal Difference</th>
                  <th>Points</th>
                </tr>
                <tr className="table_row_Group">
                  <td>{team.Position}</td>
                  <td>{team["Games Played"]}</td>
                  <td>{team.Win}</td>
                  <td>{team.Draw}</td>
                  <td>{team.Loss}</td>
                  <td>{team["Goals For"]}</td>
                  <td>{team["Goals Against"]}</td>
                  <td>{team["Goal Difference"]}</td>
                  <td>{team.Points}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default StatsTeams;
