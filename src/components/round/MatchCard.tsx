import teams from "../../data/teams.json"
import type { Match } from "../../types/match"

interface Props {
    match: Match
    originalMatch: Match

    roundIndex: number
    matchIndex: number

    onUpdate: (
        roundIndex: number,
        matchIndex: number,
        homeGoals: number | null,
        awayGoals: number | null
    ) => void
}

export default function MatchCard({match, originalMatch, roundIndex, matchIndex, onUpdate}: Props) {
    const home = teams.find(t => t.name === match.homeTeam)
    const away = teams.find(t => t.name === match.awayTeam)

    const stadium = match.stadium ?? home?.stadium

    const editable = originalMatch.homeGoals === null || originalMatch.awayGoals === null

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

                <div className="result">
                    {editable ? (
                        <>
                            <input 
                                className="goalInput" 
                                type="number"
                                value={match.homeGoals ?? ""}
                                onChange={(e) => {
                                    let value = e.target.value
                                    if(value.length > 2)
                                        value = value.slice(0,2)
                                    
                                    const home = value === "" ? null : Number(value)

                                    onUpdate(
                                        roundIndex,
                                        matchIndex,
                                        home,
                                        match.awayGoals ?? null
                                    )
                                }}
                            />

                            <span>X</span>

                            <input 
                                className="goalInput" 
                                type="number"
                                value={match.awayGoals ?? ""}
                                onChange={(e) => {
                                    let value = e.target.value
                                    if(value.length > 2)
                                        value = value.slice(0,2)
                                    
                                    const away = value === "" ? null : Number(value)

                                    onUpdate(
                                        roundIndex,
                                        matchIndex,
                                        match.homeGoals ?? null,
                                        away,                               
                                    )
                                }}
                            />
                        </>
                    ): (
                        <span>{match.homeGoals} X {match.awayGoals}</span>
                    )}
                </div>

                

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