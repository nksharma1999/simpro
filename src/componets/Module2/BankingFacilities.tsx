import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

interface metaData {
  company: string;
  bank: string;
  od: string;
  wcd: string;
  buyerCreadit: string;
  packingCreadit: string;
  bg: string;
  lc: string;
  fxLimit: string;
  cp: string;
  termLoan: string;
  ncd: string;
  ecb: string;
}

const BankingFacilities = () => {
  const [sData, setSData] = useState<metaData[]>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [isShowAddUtilized, setShowAddUtilized] = useState(false);
  const [selectedSBank, setSelectedBank] = useState("HDFC");
  const [selectedCompany, setSelectedCompany] = useState("Simpro");
  const sODInput = useRef<any>("");
  const sWCDLInput = useRef<any>("");
  const sBuyerCreaditInput = useRef<any>("");
  const sPackingCreaditInput = useRef<any>("");
  const sBGInput = useRef<any>("");
  const sLCInput = useRef<any>("");
  const sFxLimitInput = useRef<any>("");
  const sCPInput = useRef<any>("");
  const sTermLoanInput = useRef<any>("");
  const sNCDINput = useRef<any>("");
  const sECBInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: metaData = {
      company: selectedCompany,
      bank: selectedSBank,
      od: sODInput.current.value,
      wcd: sWCDLInput.current.value,
      buyerCreadit: sBuyerCreaditInput.current.value,
      packingCreadit: sPackingCreaditInput.current.value,
      bg: sBGInput.current.value,
      lc: sLCInput.current.value,
      fxLimit: sFxLimitInput.current.value,
      cp: sCPInput.current.value,
      termLoan: sTermLoanInput.current.value,
      ncd: sNCDINput.current.value,
      ecb: sECBInput.current.value,
    };
    setSData((prev) => [...prev, data]);
  };
  const handleSBank = (e: any) => {
    setSelectedBank(e.target.value);
  };
  const handleCompany = (e: any) => {
    setSelectedCompany(e.target.value);
  };
  const handleSanctionInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };
  const handleUtilizedInputFormView = (op: boolean) => {
    setShowAddUtilized(op);
  };
  return (
    <>
      <div>
        <h3>Banking Facilities</h3>
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div className="d-flex justify-content-start mb-2">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleCompany}
                value={selectedCompany}
                style={{ width: "300px" }}
              >
                <option>---Select---</option>
                <option value="Simpro">Simpro</option>
                <option value="BACGD">BACGD</option>
                <option value="BSJGD">BSJGD</option>
              </select>
              <label htmlFor="floatingSelectGrid">Company</label>
            </div>
            {/* <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                //   onChange={handleFY}
                //   value={selectedFY}
                style={{width:'300px',marginLeft:'2px'}}
              >
                <option >---Select---</option>
                <option value="HDFC">HDFC</option>
                <option value="IDFC">IDFC</option>
                <option value="Axis">Axis</option>
              </select>
              <label htmlFor="floatingSelectGrid">Bank</label>
            </div> */}
            {/* <div className="Entity-filter">  
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
        </div>           */}
            {/* <button className="clear-button" onClick={clearFilters}>
            Clear Filters
          </button> */}
            {/* <button
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
              className="fa-solid fa-download fa-fade"
            ></i>
          </button> */}
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
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
                <h2 className="accordion-header" id="SanctionedHeader">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Sanctioned-Collapse"
                    aria-expanded="true"
                    aria-controls="Sanctioned-Collapse"
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
                    Sanctioned Limits
                  </button>
                </h2>
                <div
                  id="Sanctioned-Collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="SanctionedHeader"
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
                      <table className="table table-bordered">
                        <thead
                          style={{
                            color: "#FC5C7D",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          <tr>
                            {/* <th rowSpan={3}>Company Name</th> */}
                            <th rowSpan={3}>Bank Name</th>
                            <th colSpan={8} style={{ textAlign: "center" }}>
                              Short Term
                            </th>
                            <th colSpan={3} style={{ textAlign: "center" }}>
                              Long Term
                            </th>
                            <th
                              colSpan={1}
                              style={{ textAlign: "center" }}
                            ></th>
                          </tr>
                          <tr>
                            <th colSpan={4} style={{ textAlign: "center" }}>
                              Fund Based
                            </th>
                            <th colSpan={2} style={{ textAlign: "center" }}>
                              Non- Fund Based
                            </th>
                            <th
                              colSpan={6}
                              style={{ textAlign: "center" }}
                            ></th>
                          </tr>
                          <tr style={{ textAlign: "center" }}>
                            <th
                              scope="col"
                              style={{ width: "250px", whiteSpace: "wrap" }}
                            >
                              OD/CC
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              WCDL/STL
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Buyers Credit
                            </th>
                            <th scope="col">
                              Packing Credit( PCFC/PCRE) /FCNR
                            </th>
                            <th scope="col" style={{ width: "200px" }}>
                              BG{" "}
                            </th>
                            <th scope="col" style={{ width: "200px" }}>
                              LC{" "}
                            </th>
                            <th scope="col" style={{ width: "200px" }}>
                              Fx limits{" "}
                            </th>
                            <th scope="col" style={{ width: "500px" }}>
                              CP{" "}
                            </th>
                            <th scope="col" style={{ width: "200px" }}>
                              Term Loan{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              NCD{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              ECB{" "}
                            </th>
                            <th scope="col">Total (W/O ECB) </th>
                          </tr>
                        </thead>
                        <tbody>
                        {isShowAddSanction ? (
                            <tr>
                              <td>
                                <select
                                  className="form-select"
                                  onChange={handleSBank}
                                  value={selectedSBank}
                                  style={{ width: "200px" }}
                                >
                                  <option>---Select---</option>
                                  <option value="HDFC">HDFC</option>
                                  <option value="IDFC">IDFC</option>
                                  <option value="Axis">Axis</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  ref={sODInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sWCDLInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sBuyerCreaditInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sPackingCreaditInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sBGInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sLCInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sFxLimitInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sCPInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sTermLoanInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sNCDINput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>

                              <td>
                                <input
                                  ref={sECBInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <button
                                    onClick={() =>
                                      handleSanctionInputFormView(false)
                                    }
                                    className="btn btn-primary"
                                  >
                                    <i className="fa-solid fa-xmark"></i>
                                  </button>
                                  <button
                                    onClick={handleSanctionSaveBtn}
                                    className="btn btn-primary"
                                  >
                                    <i className="fa-regular fa-floppy-disk"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tr>
                              <td colSpan={13}>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  <button
                                    onClick={() =>
                                      handleSanctionInputFormView(true)
                                    }
                                    className="btn btn-primary"
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          {sData.map((val, index) => {
                            return (
                              <tr key={index}>
                                <td>{val.bank}</td>
                                <td>{val.od}</td>
                                <td>{val.wcd}</td>
                                <td>{val.buyerCreadit}</td>
                                <td>{val.packingCreadit}</td>
                                <td>{val.bg}</td>
                                <td>{val.lc}</td>
                                <td>{val.fxLimit}</td>
                                <td>{val.cp}</td>
                                <td>{val.termLoan}</td>
                                <td>{val.ncd}</td>
                                <td>{val.ecb}</td>
                              </tr>
                            );
                          })}
                          
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
                <h2 className="accordion-header" id="UtilisationHeader">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Utilisation-Collapse"
                    aria-expanded="true"
                    aria-controls="Utilisation-Collapse"
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
                    Utilisation of limits
                  </button>
                </h2>
                <div
                  id="Utilisation-Collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="UtilisationHeader"
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
                      <table className="table table-bordered">
                        <thead
                          style={{
                            color: "#FC5C7D",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          <tr>
                            {/* <th rowSpan={3}>Company Name</th> */}
                            <th rowSpan={3}>Bank Name</th>
                            <th colSpan={8} style={{ textAlign: "center" }}>
                              Short Term
                            </th>
                            <th colSpan={3} style={{ textAlign: "center" }}>
                              Long Term
                            </th>
                            <th
                              colSpan={1}
                              style={{ textAlign: "center" }}
                            ></th>
                          </tr>
                          <tr>
                            <th colSpan={4} style={{ textAlign: "center" }}>
                              Fund Based
                            </th>
                            <th colSpan={2} style={{ textAlign: "center" }}>
                              Non- Fund Based
                            </th>
                            <th
                              colSpan={6}
                              style={{ textAlign: "center" }}
                            ></th>
                          </tr>
                          <tr style={{ textAlign: "center" }}>
                            <th
                              scope="col"
                              style={{ width: "250px", whiteSpace: "wrap" }}
                            >
                              OD/CC
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              WCDL/STL
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Buyers Credit
                            </th>
                            <th scope="col">
                              Packing Credit( PCFC/PCRE) /FCNR
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              BG{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              LC{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Fx limits{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              CP{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Term Loan{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              NCD{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              ECB{" "}
                            </th>
                            <th scope="col">Total (W/O ECB) </th>
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddUtilized ? (
                            <tr>
                              <td>
                                {/* <div className="form-floating"> */}
                                <select
                                  className="form-select"
                                  //   id="floatingSelectGrid"
                                  //   aria-label="Floating label select example"
                                  //   onChange={handleFY}
                                  //   value={selectedFY}
                                  style={{ width: "200px" }}
                                >
                                  <option>---Select---</option>
                                  <option value="HDFC">HDFC</option>
                                  <option value="IDFC">IDFC</option>
                                  <option value="Axis">Axis</option>
                                </select>
                                {/* <label htmlFor="floatingSelectGrid">Bank</label> */}
                                {/* </div> */}
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <button
                                    onClick={() =>
                                      handleUtilizedInputFormView(false)
                                    }
                                    className="btn btn-primary"
                                  >
                                    <i className="fa-solid fa-xmark"></i>
                                  </button>
                                  <button
                                    //   onClick={() =>
                                    //     handleUtilizedInputFormView(false)
                                    //   }
                                    className="btn btn-primary"
                                  >
                                    <i className="fa-regular fa-floppy-disk"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tr>
                              <td colSpan={13}>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  <button
                                    onClick={() =>
                                      handleUtilizedInputFormView(true)
                                    }
                                    className="btn btn-primary"
                                  >
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
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
                <h2 className="accordion-header" id="availableHeader">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#available-Collapse"
                    aria-expanded="true"
                    aria-controls="available-Collapse"
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
                    Balance limits available
                  </button>
                </h2>
                <div
                  id="available-Collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="availableHeader"
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
                      <table className="table table-bordered">
                        <thead
                          style={{
                            color: "#FC5C7D",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          <tr>
                            {/* <th rowSpan={3}>Company Name</th> */}
                            <th rowSpan={3}>Bank Name</th>
                            <th colSpan={8} style={{ textAlign: "center" }}>
                              Short Term
                            </th>
                            <th colSpan={3} style={{ textAlign: "center" }}>
                              Long Term
                            </th>
                            <th
                              colSpan={1}
                              style={{ textAlign: "center" }}
                            ></th>
                          </tr>
                          <tr>
                            <th colSpan={4} style={{ textAlign: "center" }}>
                              Fund Based
                            </th>
                            <th colSpan={2} style={{ textAlign: "center" }}>
                              Non- Fund Based
                            </th>
                            <th
                              colSpan={6}
                              style={{ textAlign: "center" }}
                            ></th>
                          </tr>
                          <tr style={{ textAlign: "center" }}>
                            <th scope="col">OD/CC</th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              WCDL/STL
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Buyers Credit
                            </th>
                            <th scope="col">
                              Packing Credit( PCFC/PCRE) /FCNR
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              BG{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              LC{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Fx limits{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              CP{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Term Loan{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              NCD{" "}
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              ECB{" "}
                            </th>
                            <th scope="col">Total (W/O ECB) </th>
                          </tr>
                        </thead>
                        {/* <tbody>
                  {filterData(projectUpdateData).map(
                    (val: any, index: number) => {
                      return (
                        <tr key={index}>
                          <th>{val.Project_name}</th>
                          <td>{val.Project_details}</td>
                          <td>{val.Original_Contract_Value}</td>

                          <td>{val.Start_Date}</td>
                          <td>{val.Completion_Date}</td>
                          <td>{val.Project_Completion_pre}</td>
                          <td style={{ textAlign: "center", color: "green" }}>
                            {val.Status}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody> */}
                      </table>
                    </div>
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

export default BankingFacilities;
