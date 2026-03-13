interface Props {
    round: number
    onPrev: () => void
    onNext: () => void
}

export default function RoundHeader({
    round,
    onPrev,
    onNext
}: Props){
    return (
        <div className="roundHeader">
        <button onClick={onPrev}>◀</button>
        <h2>Rodada {round}</h2>
        <button onClick={onNext}>▶</button>
        </div>
    )
}