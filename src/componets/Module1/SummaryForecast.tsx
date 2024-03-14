import React, { useState, ChangeEvent } from "react";
import * as XLSX from "xlsx";
const data = [
  {
    Particulars: "Order Book",
    FYpre: 100,
    FYcurrent: 120,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Order Inflow",
    FYpre: 100,
    FYcurrent: 10,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Sales",
    FYpre: 100,
    FYcurrent: 160,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "EBITDA",
    FYpre: 100,
    FYcurrent: 170,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "% margin",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Other Income",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Depreciation",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "PBIT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "% Margin(including other income)",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Interest",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "PBT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "PAT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "% Margin (including other income)",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 50,
    Q2FYCurrent_A: 50,
    Q3FYCurrent_A: 50,
    Q4FYCurrent_A: 50,
    Q1FYCurrent_B: 50,
    Q2FYCurrent_B: 50,
    Q3FYCurrent_B: 50,
    Q4FYCurrent_B: 50,
  },
];

const SummaryForecast = () => {
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
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(filterData());
    XLSX.utils.book_append_sheet(wb, ws1, "P&L Summary Forecast");
    const currentDate = new Date();
    const formattedDate =
      currentDate.toISOString().slice(0, 10).replace(/-/g, "-") +
      "_" +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const filename = `${formattedDate}.xlsx`;
    XLSX.writeFile(wb, `P&L_Summary_Forecast_${selectedFY}_${filename}.xlsx`);
  };
  const findGrowth = (cfy: number, pfy: number) => {
    const growth = ((cfy - pfy) / pfy) * 100;
    if (growth >= 0) {
      return { value: growth, isUp: true };
    } else {
      return { value: growth, isUp: false };
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
      <h3>P&L summary report and forecast</h3>
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
          <button className="clear-button buttonColorPrimary"style={{backgroundColor:'#0A6862',color:'white'}} onClick={clearFilters}>
            Clear Filters
          </button>
          <button
            onClick={exportToExcel}
            style={{
              backgroundColor: "white",
              borderWidth: "0",
              marginRight: "15px",
              marginLeft:'10px'
            }}
          >
            <i
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className="fa-solid fa-download fa-fade buttonColorPrimary"
            ></i>
          </button>
        </div>
        <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered table-striped">
            <thead
              className="table-format tableHeader"
            >
              <tr>
                <th rowSpan={2}>Particulars</th>
                <th rowSpan={2}>FY{Number(selectedFY) - 1}</th>
                <th colSpan={2}>Q1 FY{selectedFY}</th>
                <th colSpan={2}>Q2 FY{selectedFY}</th>
                <th colSpan={2}>Q3 FY{selectedFY}</th>
                <th colSpan={2}>Q4 FY{selectedFY}</th>
                <th rowSpan={2}>FY{Number(selectedFY)}</th>
                <th rowSpan={2}>Growth %</th>
              </tr>
              <tr>
                <th scope="col">
                  Q1 FY{selectedFY}
                  {selectedQtr[0]}
                </th>
                <th scope="col">
                  Q1 FY{selectedFY}
                  {selectedQtr[1]}
                </th>
                <th scope="col">
                  Q2 FY{selectedFY}
                  {selectedQtr[0]}
                </th>
                <th scope="col">
                  Q2 FY{selectedFY}
                  {selectedQtr[1]}
                </th>
                <th scope="col">
                  Q3 FY{selectedFY}
                  {selectedQtr[0]}
                </th>
                <th scope="col">
                  Q3 FY{selectedFY}
                  {selectedQtr[1]}
                </th>
                <th scope="col">
                  Q4 FY{selectedFY}
                  {selectedQtr[0]}
                </th>
                <th scope="col">
                  Q4 FY{selectedFY}
                  {selectedQtr[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData().map((val, index) => {
                const info = findGrowth(val.FYcurrent, val.FYpre);
                const isSalesOrMargin =
                  val.Particulars === "Sales" || val.Particulars === "% Margin";
                const isSelectedEntity = val.Particulars.toLowerCase().includes(
                  selectedEntity.toLowerCase()
                );

                return (
                  <tr
                    key={index}
                    className={isSelectedEntity ? "highlight-row" : ""}
                  >
                    <th
                      scope="row"
                      className={isSalesOrMargin ? "bold-text" : ""}
                    >
                      {val.Particulars.includes("Margin") ? (
                        <>
                          % Margin{" "}
                          <sub style={{ fontSize: "smaller" }}>
                            (including other income)
                          </sub>
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
                    <td>{val.FYcurrent}</td>
                    <td>
                      {info.value}%{" "}
                      {info.isUp ? (
                        <i
                          style={{ color: "green" }}
                          className="fa-solid fa-arrow-trend-up fa-fade"
                        ></i>
                      ) : (
                        <i
                          style={{ color: "red" }}
                          className="fa-solid fa-arrow-trend-down fa-fade"
                        ></i>
                      )}
                    </td>
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

export default SummaryForecast;
