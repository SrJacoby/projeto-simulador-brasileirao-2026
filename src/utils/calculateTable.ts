import type { Round } from "../types/round";
import type { TeamStats } from "../types/table";

import teams from "../data/teams.json"

export function calculateTable(rounds: Round[]){
    const table: TeamStats[] = teams.map(t => ({
        name: t.name,

        points: 0,
        games: 0,

        wins: 0,
        draws: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        goalDiff: 0,
    }))

    function getTeam(name: string){
        return table.find(t => t.name === name)!
    }

    // Distribuição dos dados do jogo para a tabela

    rounds.forEach(round => {
        round.matches.forEach(match => {
            if(
                match.homeGoals === null || match.awayGoals === null
            ) return

            const home = getTeam(match.homeTeam)
            const away = getTeam(match.awayTeam)

            home.games++
            away.games++

            home.goalsFor += match.homeGoals
            home.goalsAgainst += match.awayGoals

            away.goalsFor += match.awayGoals
            away.goalsAgainst += match.homeGoals

            if(match.homeGoals > match.awayGoals){
                home.wins++
                away.losses++

                home.points +=3
            } else if(match.homeGoals < match.awayGoals){
                away.wins++
                home.losses++

                away.points +=3
            } else{
                home.draws++
                away.draws++

                home.points +=1
                away.points +=1
            }
        })
    })

    // Critérios de Desempate

    table.forEach(t=> {
        t.goalDiff = t.goalsFor - t.goalsAgainst
    })

    table.sort((a, b) => {
        if(b.points !== a.points)
            return b.points - a.points

        if(b.wins !== a.wins)
            return b.wins - a.wins

        if(b.goalDiff !== a.goalDiff)
            return b.goalDiff - a.goalDiff

        if(b.goalsFor !== a.goalsFor)
            return b.goalsFor - a.goalsFor

        return 0
    })

    return table
}