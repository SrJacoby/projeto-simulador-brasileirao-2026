import { useState } from "react";
import matches from "../../data/matches.json"

import MatchCard from "./MatchCard";
import RoundHeader from "./RoundHeader";

import "../../styles/round.css"

export default function RoundViewer() {
    const [roundIndex, setRoundIndex] = useState(0)
    const round = matches[roundIndex]

    function next(){
        if(roundIndex < matches.length - 1)
            setRoundIndex(roundIndex + 1)
    }

    function prev() {
        if(roundIndex > 0)
            setRoundIndex(roundIndex - 1)
    }

    return (
        <div className="roundViewer">
            <RoundHeader
                round={round.round}
                onPrev={prev}
                onNext={next}
            />

            {round.matches.map((m, i) => (
                <MatchCard key={i} match={m}/>
            ))}
        </div>
    )
}
