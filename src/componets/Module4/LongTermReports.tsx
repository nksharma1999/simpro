import { Outlet } from "react-router-dom";

const LongTermReports = () => {
  return (
    <>
      <h3>All Long Term Reports</h3>
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
           
          </div>
          {/* <div style={{ marginRight: "10px", marginTop: "10px" }}>
              <button
                // onClick={showAddNewDataEntryView}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-plus fa-fade"
                ></i>
              </button>
            </div> */}
        </div>
        <div style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}></div>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <div
            className="accordion"
            id="accordionExample"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="fundRaising">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#fundRaising-Collapse"
                  aria-expanded="true"
                  aria-controls="fundRaising-Collapse"
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Fund Raising
                </button>
              </h2>
              <div
                id="fundRaising-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="fundRaising"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
                        <tr style={{ textAlign: "center" }}>
                          <th
                            scope="col"
                            style={{ width: "250px", whiteSpace: "wrap" }}
                          >
                            ISIN No.
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Security Description
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
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
                        <tr style={{ textAlign: "center" }}>
                          <th
                            scope="col"
                            style={{ width: "250px", whiteSpace: "wrap" }}
                          >
                            LRN No.
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Bank Name
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
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
                        <tr style={{ textAlign: "center" }}>
                          <th
                            scope="col"
                            style={{ width: "250px", whiteSpace: "wrap" }}
                          >
                            Loan Ref. No.
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Bank Name
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
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
              </div>
            </div>
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="maturities-m4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#maturities-m4-Collapse"
                  aria-expanded="true"
                  aria-controls="maturities-m4-Collapse"
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Maturities
                </button>
              </h2>
              <div
                id="maturities-m4-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="maturities-m4"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
                        <tr style={{ textAlign: "center" }}>
                          <th
                            scope="col"
                            style={{ width: "250px", whiteSpace: "wrap" }}
                          >
                            ISIN No.
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Security Description
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
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
                        <tr style={{ textAlign: "center" }}>
                          <th
                            scope="col"
                            style={{ width: "250px", whiteSpace: "wrap" }}
                          >
                            LRN No.
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Bank Name
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
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
                        <tr style={{ textAlign: "center" }}>
                          <th
                            scope="col"
                            style={{ width: "250px", whiteSpace: "wrap" }}
                          >
                            Loan Ref. No.
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Bank Name
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
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
              </div>
            </div>
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="loan-taken-m4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#loan-taken-m4-Collapse"
                  aria-expanded="true"
                  aria-controls="loan-taken-m4-Collapse"
                  // style={{
                  //   backgroundColor: "transparent",
                  //   color: "white",
                  //   paddingLeft: "10px",
                  // }}
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Loans Taken
                </button>
              </h2>
              <div
                id="loan-taken-m4-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="loan-taken-m4"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
                      ICB <i className="fa-solid fa-arrow-right"></i>
                    </p>

                    <table className="table table-bordered">
                      <thead className="tableHeader">
                        <tr style={{ textAlign: "center" }}>
                          <th scope="col">Company Name</th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Loan Start Data
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Maturity Date
                          </th>
                          <th scope="col">ROI (Average)</th>
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
              </div>
            </div>
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="interestPayment-m4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#interestPayment-m4-Collapse"
                  aria-expanded="true"
                  aria-controls="interestPayment-m4-Collapse"
                  // style={{
                  //   backgroundColor: "transparent",
                  //   color: "white",
                  //   paddingLeft: "10px",
                  // }}
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Interest Payment
                </button>
              </h2>
              <div
                id="interestPayment-m4-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="interestPayment-m4"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
                      ICB <i className="fa-solid fa-arrow-right"></i>
                    </p>

                    <table className="table table-bordered">
                      <thead className="tableHeader">
                        <tr style={{ textAlign: "center" }}>
                          <th scope="col">Company Name</th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Interest From Data
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Interest To Date
                          </th>
                          <th scope="col">Interest Amount</th>
                          <th scope="col">ROI (Average)</th>
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
              </div>
            </div>
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="loanGiven-m4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#loanGiven-m4-Collapse"
                  aria-expanded="true"
                  aria-controls="loanGiven-m4-Collapse"
                  // style={{
                  //   backgroundColor: "transparent",
                  //   color: "white",
                  //   paddingLeft: "10px",
                  // }}
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Loan Given During The Year
                </button>
              </h2>
              <div
                id="loanGiven-m4-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="loanGiven-m4"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
                            Loan Start Data
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Maturity Date
                          </th>
                          <th scope="col">ROI (Average)</th>
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
              </div>
            </div>
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="interestReceived-m4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#interestReceived-m4-Collapse"
                  aria-expanded="true"
                  aria-controls="interestReceived-m4-Collapse"
                  // style={{
                  //   backgroundColor: "transparent",
                  //   color: "white",
                  //   paddingLeft: "10px",
                  // }}
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Interest Received During The Year
                </button>
              </h2>
              <div
                id="interestReceived-m4-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="interestReceived-m4"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
                            Interest From Data
                          </th>
                          <th
                            scope="col"
                            style={{ width: "200px", whiteSpace: "wrap" }}
                          >
                            Interest To Date
                          </th>
                          <th scope="col">Interest Amount</th>
                          <th scope="col">ROI (Average)</th>
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
              </div>
            </div>
            <div
              className="accordion-item"
              // style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <h2 className="accordion-header" id="equityPref-m4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#equityPref-m4-Collapse"
                  aria-expanded="true"
                  aria-controls="equityPref-m4-Collapse"
                  // style={{
                  //   backgroundColor: "transparent",
                  //   color: "white",
                  //   paddingLeft: "10px",
                  // }}
                >
                  <i
                    className="fa-solid fa-chart-simple"
                    style={{ marginRight: "10px" }}
                  ></i>{" "}
                  Equity/Pref. Investment During The Year
                </button>
              </h2>
              <div
                id="equityPref-m4-Collapse"
                className="accordion-collapse collapse"
                aria-labelledby="equityPref-m4"
                // data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={{ padding: "0px" }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongTermReports;
