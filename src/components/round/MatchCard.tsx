import teams from "../../data/teams.json"
import type { Match } from "../../types/match"

interface Props {
    match: Match
}

export default function MatchCard({match}: Props) {
    const home = teams.find(t => t.name === match.homeTeam)
    const away = teams.find(t => t.name === match.awayTeam)

    const stadium = home?.stadium

    const result = match.homeGoals === null ? "X" : `${match.homeGoals} X ${match.awayGoals}`

    function formatDate(date: string | null){
        if (!date) return "Data não definida"

        const parts = date.split("-")

        const year = parts[0]
        const month = parts[1]
        const day = parts[2]

        return `${day}/${month}/${year}`
    }

    return (
        <div className="matchCard">
            <div className="date">
                {formatDate(match.date)}
            </div>

            <div className="teams">
                <span className="teamName">
                    {home?.shortName}
                </span>
                <img src={home?.logo} />

                <span className="result">{result}</span>

                <img src={away?.logo} />
                <span className="teamName">
                    {away?.shortName}
                </span>
            </div>
            
            <div className="stadium">
                {stadium}
            </div>
        </div>
    )
}