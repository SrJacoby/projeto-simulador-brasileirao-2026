import { useState } from "react"

import RoundViewer from "../components/round/RoundViewer"
import Table from "../components/table/Table"

import matchesData from "../data/matches.json"
import type { Round } from "../types/round"

import "../styles/styles.css"

const TablePage = () => {

  const [rounds, setRounds] = useState<Round[]>(JSON.parse(JSON.stringify(matchesData)))

  return (
    <div className="page">
      <div className="titleBar">
        <img className="titleIcon" src="/brasileirao.png" />
        <h1 className="titleText">
          Simulador Brasileirão 2026
        </h1>
    </div>

      <div className="layout">

        <div className="left">
          <Table rounds={rounds} />
        </div>

        <div className="right">
          <RoundViewer rounds={rounds} setRounds={setRounds} originalRounds={matchesData as Round[]}/>
        </div>

      </div>

    </div>
  )
}

export default TablePage