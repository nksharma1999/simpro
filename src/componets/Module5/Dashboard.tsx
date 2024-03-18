import { useState } from "react";

export const DividendDashborad = () => {
  const [showAddNew, setShowAddNew] = useState<boolean>(false);
  const handleShowBtn = (action: boolean) => {
    setShowAddNew(action);
  };
  return (
    <>
      <h3>Dividend Income</h3>
      <div className={"card "} style={{ maxHeight: "83vh", padding: "10px" }}>
        <div
          style={{
            paddingBottom: "10px",
            borderRadius: "0.3px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <div className="row g-2">
            <div className="col-md"> */}
          <div className="form-floating" style={{ width: "170px" }}>
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              style={{ height: "36px", paddingTop: "5px" }}
              //   onChange={handleFY}
              //   value={selectedFY}
            >
              <option value="selectFY" selected>
                ---Select FY---
              </option>
              <option value="23">2022-2023</option>
              <option value="24">2023-2024</option>
              <option value="25">2024-2025</option>
            </select>
            {/* <label htmlFor="floatingSelectGrid">Select FY</label> */}
          </div>
          <div style={{ marginRight: "10px", marginTop: "0px" }}>
            <button
              //   onClick={exportToExcel}
              style={{
                backgroundColor: "white",
                borderWidth: "0",
                marginRight: "10px",
              }}
            >
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="fa-solid fa-download fa-fade buttonColorPrimary"
              ></i>
            </button>
            <button
              onClick={() => handleShowBtn(true)}
              style={{ backgroundColor: "white", borderWidth: "0" }}
            >
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="fa-solid fa-plus fa-fade buttonColorPrimary"
              ></i>
            </button>
          </div>
        </div>
        <div style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}></div>
        <div
          className="ActionTakenDashboard"
          style={{
            overflow: "auto",
            marginTop: "10px",
            maxHeight: "80vh",
          }}
        >
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Company Name</th>
                <th scope="col">Type</th>
                <th scope="col">Type of holding</th>
                <th scope="col">Type of dividend</th>
                <th scope="col">Share holding %</th>
                <th scope="col">No. of Shares</th>
                <th scope="col">Dividend per share</th>
                <th scope="col">Gross Dividend</th>
                <th scope="col">Div. Dist. Tax</th>
                <th scope="col">Net Dividend</th>
                <th scope="col">Date of receipt</th>
                <th scope="col">Quarter</th>
              </tr>
            </thead>
            <tbody>
              {/* {uData.map((val, index) => {
                            return (
                              <tr key={index}>
                                <td>{val.sl}</td>
                                <td>{val.onbehalf}</td>
                                <td>{val.to}</td>
                                <td>{val.for}</td>
                                <td>{val.facility}</td>
                              </tr>
                            );
                          })} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
