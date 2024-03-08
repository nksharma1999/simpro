import React, { useState ,ChangeEvent} from "react";
const data = [
  {
    Particulars: "Sales",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 110,
    FYcurrent_B:200,
  },
  {
    Particulars: "Current Assets",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 280,
    FYcurrent_B:200,
  },
  {
    Particulars: "Accounts Receivable",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 390,
    FYcurrent_B:200,
  },
  {
    Particulars: "Inventory",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 240,
    FYcurrent_B:200,
  },
  {
    Particulars: "WIP",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 220,
    FYcurrent_B:200,
  },
  {
    Particulars: "Other Current Assets",
    FYpre: 100, 
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 270,
    FYcurrent_B:200,
  },
  {
    Particulars: "GWC",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 210,
    FYcurrent_B:200,
  },
  {
    Particulars: "GWC days",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 300,
    FYcurrent_B:200,
  },
  {
    Particulars: "Current Liabilities",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 320,
    FYcurrent_B:200,
  },
  {
    Particulars: "Vendor Balance",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 340,
    FYcurrent_B:200,
  },
  {
    Particulars: "Customer Advances",
    FYpre: 100, 
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 350,
    FYcurrent_B:200,
  },
  {
    Particulars: "Other Current  Liabilities",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 360,
    FYcurrent_B:200,
  },
  {
    Particulars: "NWC",
    FYpre: 100,
    Q1FYCurrent_A: 50,
    Q2FYCurrent_A: 50,
    Q3FYCurrent_A: 50,
    Q4FYCurrent_A: 50,
    Q1FYCurrent_B: 50,
    Q2FYCurrent_B: 50,
    Q3FYCurrent_B: 50,
    Q4FYCurrent_B: 50,
    FYcurrent_A: 150,
    FYcurrent_B:200,
  },
  {
    Particulars: "NWC %",
    FYpre: 100,
    Q1FYCurrent_A: 50,
    Q2FYCurrent_A: 50,
    Q3FYCurrent_A: 50,
    Q4FYCurrent_A: 50,
    Q1FYCurrent_B: 50,
    Q2FYCurrent_B: 50,
    Q3FYCurrent_B: 50,
    Q4FYCurrent_B: 50,
    FYcurrent_A: 170,
    FYcurrent_B:200,
  },
  
];


const WorkingCapital = () => {
  const [selectedFY, setSelectedFY] = useState("2023");
  const [selectedQtr, setSelectedQtr] = useState(["(A)", "(B)"]);
  const [selectedEntity, setSelectedEntity] = useState("");

  const handleFY = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFY(e.target.value);
  };

  const handleEntityFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedEntity(e.target.value);
  };

  const clearFilters = () => {
    setSelectedEntity("");
  };


  const findBudgetQtr = (fyA:number,fyB:number) =>{
    const budget = (((fyA-fyB)/fyB)*100);
    if(budget>=0){
        return {value: budget, isUp: true};
    }else{
        return {value: budget, isUp: false};
    }
  };

  const findBudgetFyr = (fyA:number,fyB:number) =>{
    const budget = (((fyA-fyB)/fyA)*100);
    if(budget>=0){
        return {value: budget, isUp: true};
    }else{
        return {value: budget, isUp: false};
    }
  };

  const filterData = () => {
    if (selectedEntity === "") {
      return data;
    } else {
      return data.filter((item) =>
        item.Particulars.toLowerCase().includes(selectedEntity.toLowerCase())
      );
    }
  };

  return (
    <div>
      <h3>Subsidiary wise working capital</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div className="d-flex justify-content-end mb-2">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              onChange={handleFY}
              value={selectedFY}
            >
              <option disabled>---Select---</option>
              <option value="2023">2022-2023</option>
              <option value="2024">2023-2024</option>
              <option value="2025">2024-2025</option>
            </select>
            <label htmlFor="floatingSelectGrid">Select FY</label>
          </div>
        <div className="Entity-filter">  
          <div className="form-floating">
            <select
              className="form-select"
              id="entityFilter"
              aria-label="Floating label select example"
              onChange={handleEntityFilter}
              value={selectedEntity}
            >
              <option value="">All Entities</option>
              {data.map((item) => (
                <option key={item.Particulars} value={item.Particulars}>
                {item.Particulars}
                </option>
              ))}
            </select>
            <label htmlFor="entityFilter">Select Entity</label>
          </div>
        </div>          
          <button className="clear-button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered table-striped">
            <thead className="table-format">
            <tr>
              <th rowSpan={2}>Particulars</th>
              <th rowSpan={2}>FY{Number(selectedFY) - 1}</th>
              <th colSpan={2}>Q1 FY{selectedFY}</th>
              <th colSpan={2}>Q2 FY{selectedFY}</th>
              <th colSpan={2}>Q3 FY{selectedFY}</th>
              <th colSpan={2}>Q4 FY{selectedFY}</th>
              <th rowSpan={2}>FY{Number(selectedFY)}{selectedQtr[0]}</th>
              <th rowSpan={2}>FY{Number(selectedFY)}{selectedQtr[1]}</th>
              <th rowSpan={2}>Budget v/s Actual {Number(selectedFY)}-{Number(selectedFY)-1}</th>
              <th rowSpan={2}>Year on Year {Number(selectedFY)}-{Number(selectedFY)-1}</th>
            </tr>
                <tr>
                  <th scope="col">Q1 FY{selectedFY}{selectedQtr[0]}</th>
                  <th scope="col">Q1 FY{selectedFY}{selectedQtr[1]}</th>
                  <th scope="col">Q2 FY{selectedFY}{selectedQtr[0]}</th>
                  <th scope="col">Q2 FY{selectedFY}{selectedQtr[1]}</th>
                  <th scope="col">Q3 FY{selectedFY}{selectedQtr[0]}</th>
                  <th scope="col">Q3 FY{selectedFY}{selectedQtr[1]}</th>
                  <th scope="col">Q4 FY{selectedFY}{selectedQtr[0]}</th>
                  <th scope="col">Q4 FY{selectedFY}{selectedQtr[1]}</th>
                 
                </tr>
            </thead>
            <tbody>
              {filterData().map((val, index) => {
                    const info = findBudgetQtr(val.FYcurrent_A, val.FYcurrent_B);
                    const fyr_info = findBudgetFyr(val.FYpre, val.FYcurrent_A)
    //const isSalesOrMargin = val.Particulars === "GWC" || val.Particulars === "GWC days" ||val.Particulars === "NWC"||val.Particulars === "NWC %";
    //const isSelectedEntity = val.Particulars.toLowerCase().includes(selectedEntity.toLowerCase());

    return (
      <tr key={index} /*className={isSelectedEntity ? "highlight-row" : ""}*/>
        <th scope="row" /*className={isSalesOrMargin ? "bold-text" : ""}*/>
          {val.Particulars.includes("Margin") ? (
            <>
              % Margin <sub style={{ fontSize: "smaller" }}>(including other income)</sub>
            </>
          ) : (
            val.Particulars
          )}
        </th>
        <td>{val.FYpre}</td>
        <td>{val.Q1FYCurrent_A}</td>
        <td>{val.Q2FYCurrent_A}</td>
        <td>{val.Q3FYCurrent_A}</td>
        <td>{val.Q4FYCurrent_A}</td>
        <td>{val.Q1FYCurrent_B}</td>
        <td>{val.Q2FYCurrent_B}</td>
        <td>{val.Q3FYCurrent_B}</td>
        <td>{val.Q4FYCurrent_B}</td>
        <td>{val.FYcurrent_A}</td>
        <td>{val.FYcurrent_B}</td>
        <td>{info.value}% {info.isUp ? <i style={{ color: "green" }} className="fa-solid fa-arrow-trend-up fa-fade"></i> : <i style={{ color: "red" }} className="fa-solid fa-arrow-trend-down fa-fade"></i>}</td>
        <td>{fyr_info.value}% {fyr_info.isUp ? <i style={{ color: "green" }} className="fa-solid fa-arrow-trend-up fa-fade"></i> : <i style={{ color: "red" }} className="fa-solid fa-arrow-trend-down fa-fade"></i>}</td>
      </tr>
    );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkingCapital;

