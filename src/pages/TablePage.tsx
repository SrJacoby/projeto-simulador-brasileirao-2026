import RoundViewer from "../components/round/RoundViewer"
import Table from "../components/table/Table"
import "../styles/styles.css"

const TablePage = () => {
  return (
    <div>
        <div className="page">
          <h1 className="title">
            Simulador Brasileirão 2026
          </h1>

          <div className="layout">
            <div className="left">
              <Table/>
            </div>
            <div className="right">
              <RoundViewer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TablePage