import { useState } from "react";
import MatchCard from "./MatchCard";
import RoundHeader from "./RoundHeader";
import type { Round } from "../../types/round"

import "../../styles/round.css"

interface Props {
  rounds: Round[]
  setRounds: React.Dispatch<React.SetStateAction<Round[]>>
  originalRounds: Round[]
}

export default function RoundViewer({ rounds, setRounds, originalRounds }: Props) {
    const [roundIndex, setRoundIndex] = useState(() => {
        for(let i=0; i<rounds.length; i++){
            const allPlayed = rounds[i].matches.every(
                m => m.homeGoals !== null && m.awayGoals !== null
            )

            if(!allPlayed){
                return i
            }
        }

        return 0
    })
    const round = rounds[roundIndex]

    function next(){
        if(roundIndex < rounds.length - 1)
            setRoundIndex(roundIndex + 1)
    }

    function prev() {
        if(roundIndex > 0)
            setRoundIndex(roundIndex - 1)
    }

    function updateMatch(roundIndex: number, matchIndex: number, homeGoals: number | null, awayGoals: number | null){
        const newRounds = [...rounds]

        newRounds[roundIndex].matches[matchIndex].homeGoals = homeGoals
        newRounds[roundIndex].matches[matchIndex].awayGoals = awayGoals

        setRounds(newRounds)
    }

    return (
        <div className="roundViewer">
            <RoundHeader
                round={round.round}
                onPrev={prev}
                onNext={next}
            />

            {round.matches.map((m, i) => (
                <MatchCard key={i} match={m} roundIndex={roundIndex} matchIndex={i} onUpdate={updateMatch} originalMatch={originalRounds[roundIndex].matches[i]}/>
            ))}
        </div>
    )
}
