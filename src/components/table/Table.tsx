import teams from "../../data/teams.json"
import "../../styles/table.css"
import matches from "../../data/matches.json"
import { calculateTable } from "../../utils/calculateTable"

export default function Table() {
    const tableData = calculateTable(matches)

    function getTeam(name: string){
        return teams.find(t => t.name === name)
    }

  return (
    <div className="table">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>P</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                </tr>
            </thead>

            <tbody>
                {tableData.map((team, index) =>{
                    const info = getTeam(team.name)
                    return(
                    <tr key={team.name}>
                        <td>{index +1}</td>
                        <td className="teamCell">
                            <img src={info?.logo} />
                            {team.name}
                        </td>
                        <td>{team.points}</td>
                        <td>{team.games}</td>
                        <td>{team.wins}</td>
                        <td>{team.draws}</td>
                        <td>{team.losses}</td>
                        <td>{team.goalsFor}</td>
                        <td>{team.goalsAgainst}</td>
                        <td>{team.goalDiff}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    </div>
  )
}