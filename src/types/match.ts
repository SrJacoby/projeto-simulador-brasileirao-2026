export interface Match{
    homeTeam: string
    awayTeam: string
    homeGoals: number | null
    awayGoals: number | null
    date: string | null
    stadium?: string
}