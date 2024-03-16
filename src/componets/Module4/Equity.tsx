import { useState } from "react";
import { AddEquityInfo } from "./AddDataForm/AddEquityInfo";

export const Equity =() =>{
  const [showAddNew, setShowAddNew] = useState<boolean>(false);
  const handleShowBtn = (action: boolean) => {
    setShowAddNew(action);
  };
    return (
        <>
          <h3>Equity/Pref. Investment During The Year</h3>
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
                    onClick={()=> handleShowBtn(true)}
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
                    <p
                      style={{
                        color: "#0A6862",
                        fontWeight: "bold",
                        marginLeft: "10px",
                        marginTop: "-5px",
                        marginBottom: "0px",
                      }}
                    >
                      ICD <i className="fa-solid fa-arrow-right"></i>
                    </p>

                    <table className="table table-bordered">
                      <thead className="tableHeader">
                        <tr style={{ textAlign: "center" }}>
                          <th scope="col">Company Name</th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Type of holding
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Date of Investment
                          </th>
                          <th scope="col">Investment Amount</th>
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
          {showAddNew && (
        <AddEquityInfo handleShowBtn={handleShowBtn} type="Add Equity Info"/>
      )}
        </>
      );
}