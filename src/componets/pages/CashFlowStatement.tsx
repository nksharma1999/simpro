import { useState } from "react";
import * as XLSX from "xlsx";
const data = [
  {
    Particulars: "Net Worth",
    FYpre: 100,
    FYcurrent: 120,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Debt",
    FYpre: 100,
    FYcurrent: 10,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Sources of Funds",
    FYpre: 100,
    FYcurrent: 160,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Net Fixed Assets",
    FYpre: 100,
    FYcurrent: 170,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Non-Current Assets",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
];

const CashFlowStatement = () => {
  const [allActivity, setAllActivity] = useState(data);
  const [selectedFY, setSelectedFY] = useState("23");
  const handleFY = (e: any) => {
    // console.log(e.target.value);
    setSelectedFY(e.target.value);
  };
  const findGrowth = (cfy: number, pfy: number) => {
    const growth = ((cfy - pfy) / pfy) * 100;
    if (growth >= 0) {
      return { value: growth, isUp: true };
    } else {
      return { value: growth, isUp: false };
    }
  };
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(allActivity);
    XLSX.utils.book_append_sheet(wb, ws1, "Bids Submitted");
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
    XLSX.writeFile(wb, `Cash_Flow_Statement_FY${selectedFY}_${filename}.xlsx`);
  };
  return (
    <div>
      <h3>Cash Flow Statement</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
           style={{
            padding: "10px",
            borderRadius: "0.3px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <div className="row g-2">
            <div className="col-md"> */}
          <div className="form-floating" style={{ width: "600px" }}>
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              onChange={handleFY}
              value={selectedFY}
            >
              <option disabled>---Select---</option>
              <option value="23">2022-2023</option>
              <option value="24">2023-2024</option>
              <option value="25">2024-2025</option>
            </select>
            <label htmlFor="floatingSelectGrid">Select FY</label>
          </div>
          <div style={{ marginRight: "10px", marginTop: "10px" }}>
              <button
                onClick={exportToExcel}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-download fa-fade"
                ></i>
              </button>
            </div>
        </div>
        {/* <div
          style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
        ></div> */}
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">Particulars</th>
                <th scope="col">FY{Number(selectedFY) - 1} (A)</th>
                <th scope="col">Q1 FY{selectedFY} (A)</th>
                <th scope="col">Q1 FY{selectedFY} (B)</th>
                <th scope="col">Q2 FY{selectedFY} (A)</th>
                <th scope="col">Q2 FY{selectedFY} (B)</th>
                <th scope="col">Q3 FY{selectedFY} (A)</th>
                <th scope="col">Q3 FY{selectedFY} (B)</th>
                <th scope="col">Q4 FY{selectedFY} (A)</th>
                <th scope="col">Q4 FY{selectedFY} (B)</th>
                <th scope="col">FY{selectedFY} (A)</th>
                <th scope="col">FY{selectedFY} (B)</th>
                <th scope="col">
                  Budget v/s Actual FY{Number(selectedFY) - 1}-{selectedFY}
                </th>
                <th scope="col">
                  Year on Year FY{selectedFY} - FY{Number(selectedFY) - 1}
                </th>
              </tr>
            </thead>
            <tbody>
              {allActivity.map((val: any, index: number) => {
                const info = findGrowth(val.FYcurrent, val.FYpre);
                return (
                  <tr key={index}>
                    <th scope="row">{val.Particulars}</th>
                    <td>{val.FYpre}</td>
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
                    <td>{val.Q1FYCurrent}</td>
                    <td>{val.Q2FYCurrent}</td>
                    <td>{val.Q3FYCurrent}</td>
                    <td>{val.Q4FYCurrent}</td>
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

export default CashFlowStatement;
