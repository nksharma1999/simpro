import { useState } from "react";
import { AddFundRaisingInfo } from "./AddDataForm/AddFundRaisingInfo";

export const Maturities = () => {
  const [showAddNew, setShowAddNew] = useState<boolean>(false);
  const handleShowBtn = (action: boolean) => {
    setShowAddNew(action);
  };
  return (
    <>
      <h3>Maturities</h3>
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
          <p
            style={{
              color: "#0A6862",
              fontWeight: "bold",
              marginLeft: "10px",
              marginTop: "-5px",
              marginBottom: "0px",
            }}
          >
            NCD <i className="fa-solid fa-arrow-right"></i>
          </p>
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr className="tableHeaderStyle" style={{ textAlign: "center" }}>
                <th scope="col" style={{ width: "250px", whiteSpace: "wrap" }}>
                  ISIN No.
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Security Description
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Issue Date
                </th>
                <th scope="col">Maturity Date</th>
                <th scope="col">Issue Size</th>
              </tr>
            </thead>
            <tbody>
              {/* {sData.map((val, index) => {
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
          <p
            style={{
              color: "#0A6862",
              fontWeight: "bold",
              marginLeft: "10px",
              marginTop: "-5px",
              marginBottom: "0px",
            }}
          >
            ECB <i className="fa-solid fa-arrow-right"></i>
          </p>

          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr className="tableHeaderStyle" style={{ textAlign: "center" }}>
                <th scope="col" style={{ width: "250px", whiteSpace: "wrap" }}>
                  LRN No.
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Bank Name
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Loan Start Date
                </th>
                <th scope="col">Maturity Date</th>
                <th scope="col">ROI</th>
              </tr>
            </thead>
            <tbody>
              {/* {sData.map((val, index) => {
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
          <p
            style={{
              color: "#0A6862",
              fontWeight: "bold",
              marginLeft: "10px",
              marginTop: "-5px",
              marginBottom: "0px",
            }}
          >
            Term Loan <i className="fa-solid fa-arrow-right"></i>
          </p>

          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr className="tableHeaderStyle" style={{ textAlign: "center" }}>
                <th scope="col" style={{ width: "250px", whiteSpace: "wrap" }}>
                  Loan Ref. No.
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Bank Name
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Loan Start Date
                </th>
                <th scope="col">Maturity Date</th>
                <th scope="col">ROI</th>
              </tr>
            </thead>
            <tbody>
              {/* {sData.map((val, index) => {
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
        <AddFundRaisingInfo handleShowBtn={handleShowBtn} type="Add Maturities Info"/>
      )}
    </>
  );
};
