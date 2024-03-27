import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import { BankingFacilitiesTemplate } from "../../utils/BankingFacilitiesTemplate";
interface metaData {
  // company: string;
  sl: number;
  onbehalf: string;
  to: string;
  for: string;
  facility: string;
}

const ComfortGurantee = () => {
  const [sData, setSData] = useState<metaData[]>([]);
  const [uData, setUData] = useState<metaData[]>([]);
  const [bData, setBData] = useState<metaData[]>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [isShowAddUtilized, setShowAddUtilized] = useState(false);
  const [selectedSsl, setSelectedSsl] = useState("1");
  const [selectedUsl, setSelectedUsl] = useState("1");
  const [selectedTableId, setTableId] = useState("ComfortLetters");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  // const [selectedCompany, setSelectedCompany] = useState("Simpro");
  //Comfort Input
  const sonbehalfInput = useRef<any>("");
  const stoInput = useRef<any>("");
  const sforInput = useRef<any>("");
  const sfacilityInput = useRef<any>("");
  // Corporate input
  const uonbehalfInput = useRef<any>("");
  const utoInput = useRef<any>("");
  const uforInput = useRef<any>("");
  const ufacilityInput = useRef<any>("");

  const exportToExcel = () => {
    const table = document.getElementById(selectedTableId);
    const ws = XLSX.utils.table_to_sheet(table);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Confort_Gurantee" );
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
    XLSX.writeFile(wb, `Confort_Gurantee_${selectedTableId}_${filename}.xlsx`);
  };
  const showDownloadOption = (action: boolean) => {
    setShowPopup(action);
  };
  const handleTableIdSelection = (e:any) =>{
    setTableId(e.target.value);
  }
  // const handleFileChange = (e: any) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event: any) => {
  //     const binaryString = event.target.result;
  //     const workbook = XLSX.read(binaryString, { type: "binary" });
  //     const sheetName1 = workbook.SheetNames[0];
  //     const worksheet1 = workbook.Sheets[sheetName1];
  //     const sheetName2 = workbook.SheetNames[1];
  //     const worksheet2 = workbook.Sheets[sheetName2];
  //     const inportedData1: any[] = XLSX.utils.sheet_to_json(worksheet1, {
  //       header: 1,
  //     });
  //     const inportedData2: any[] = XLSX.utils.sheet_to_json(worksheet2, {
  //       header: 1,
  //     });

  //     const jsonResult1: metaData[] = excelFileDataToJson(inportedData1);
  //     setSData((prev) => [...prev, ...jsonResult1]);
  //     const jsonResult2: metaData[] = excelFileDataToJson(inportedData2);
  //     setUData((prev) => [...prev, ...jsonResult2]);
  //   };

  //   reader.readAsBinaryString(file);
  // };
  const removeSInput = () => {
    sonbehalfInput.current.value = 0;
    stoInput.current.value = 0;
    sforInput.current.value = 0;
    sfacilityInput.current.value = 0;
  };
  const removeUInput = () => {
    uonbehalfInput.current.value = 0;
    utoInput.current.value = 0;
    uforInput.current.value = 0;
    ufacilityInput.current.value = 0;
  };
  const handleSanctionSaveBtn = () => {
    const data: metaData = {
      // company: selectedCompany,
      sl: parseInt(selectedSsl),
      onbehalf: sonbehalfInput.current.value,
      to: stoInput.current.value,
      for: sforInput.current.value,
      facility: sfacilityInput.current.value,
    };
    setSData((prev) => [...prev, data]);
    removeSInput();
  };
  const handleUtilizationSaveBtn = () => {
    const data: metaData = {
      // company: selectedCompany,
      sl: parseInt(selectedUsl), // or parseFloat(selectedUsl) if it's a floating-point number
      onbehalf: uonbehalfInput.current.value,
      to: utoInput.current.value,
      for: uforInput.current.value,
      facility: ufacilityInput.current.value,
    };
    setUData((prev) => [...prev, data]);
    removeUInput();
  };

  const handleSsl = (e: any) => {
    setSelectedSsl(e.target.value);
  };
  const handleUsl = (e: any) => {
    setSelectedUsl(e.target.value);
  };
  // const handleCompany = (e: any) => {
  //   setSelectedCompany(e.target.value);
  // };
  const handleSanctionInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };
  const handleUtilizedInputFormView = (op: boolean) => {
    setShowAddUtilized(op);
  };

  // const calculateTota =(val:metaData) =>{
  //   let sum =0;
  //   sum+=val.
  // }

  return (
    <>
      <div>
        <h3>Comfort Guarantee</h3>
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div
            style={{
              // padding: "0px 0px",
              paddingBottom: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginRight: "10px" }}
              // title="Download Template"
            >
              <button
                onClick={() => showDownloadOption(true)}
                style={{ backgroundColor: "white", borderWidth: "0" }}
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
                    Comfort Letters
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
                      className="ActionTakenDashboard tableFreezeOption"
                      style={{
                        overflow: "auto",
                        marginTop: "10px",
                        maxHeight: "80vh",
                      }}
                    >
                      <table className="table table-bordered" id="ComfortLetters">
                        <thead
                        className="table-format tableHeader"
                        >
                      
                          <tr className=" tableFreezeOptionSecondHeader tableHeaderStyle" style={{ textAlign: "center" }}>
                          <th rowSpan={3}>SL</th>
                            <th
                              scope="col"
                              style={{ width: "250px", whiteSpace: "wrap" }}
                            >
                              Onbehalf
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              To
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              For
                            </th>
                            <th scope="col">Facility value</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddSanction ? (
                            <tr className="tableFirstThStyle">
                              <th>
                              <input
                                  // ref={sonbehalfInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </th>
                              <td>
                                <input
                                  ref={sonbehalfInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={stoInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sforInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sfacilityInput}
                                  type="number"
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
                                    className="btn"
                                    title="Remove"
                                  >
                                    <i
                                      className="fa-solid fa-xmark"
                                      style={{ fontSize: "25px", color: "red" }}
                                    ></i>
                                  </button>
                                  <button
                                    onClick={handleSanctionSaveBtn}
                                    className="btn"
                                    title="Save Data"
                                  >
                                    <i
                                      className="fa-regular fa-floppy-disk fa-shake"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tr>
                              <td colSpan={14}>
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
                                    className="btn "
                                  >
                                    <i
                                      className="fa-solid fa-plus"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          {sData.map((val, index) => {
                            return (
                              <tr className="tableFirstThStyle" key={index}>
                                <th>{val.sl}</th>
                                <td>{val.onbehalf}</td>
                                <td>{val.to}</td>
                                <td>{val.for}</td>
                                <td>{val.facility}</td>
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
                  >
                    <i
                      className="fa-solid fa-chart-simple"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    Corporate Gurantee
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
                      className="ActionTakenDashboard tableFreezeOption"
                      style={{
                        overflow: "auto",
                        marginTop: "10px",
                        maxHeight: "80vh",
                      }}
                    >
                      <table className="table table-bordered" id='CorporateGurantee'>
                        <thead
                          style={{
                            color: "#FC5C7D",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          <tr className="tableFreezeOptionSecondHeader tableHeaderStyle" style={{ textAlign: "center" }}>
                          <th rowSpan={3}>SL</th>
                            <th
                              scope="col"
                              style={{ width: "250px", whiteSpace: "wrap" }}
                            >
                              Onbehalf
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              To
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              For
                            </th>
                            <th scope="col">Facility value</th>
                            
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddUtilized ? (
                            <tr className="tableFirstThStyle">
                              <th>
                              <input
                                  // ref={sonbehalfInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </th>
                              <td>
                                <input
                                  ref={uonbehalfInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={utoInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uforInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={ufacilityInput}
                                  type="number"
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
                                    className="btn"
                                  >
                                    <i
                                      className="fa-solid fa-xmark"
                                      style={{ fontSize: "25px", color: "red" }}
                                    ></i>
                                  </button>
                                  <button
                                    onClick={handleUtilizationSaveBtn}
                                    className="btn"
                                  >
                                    <i
                                      className="fa-regular fa-floppy-disk fa-shake"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tr>
                              <td colSpan={14}>
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
                                    className="btn "
                                  >
                                    <i
                                      className="fa-solid fa-plus"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          {uData.map((val, index) => {
                            return (
                              <tr className='tableFirstThStyle' key={index}>
                                <th>{val.sl}</th>
                                <td>{val.onbehalf}</td>
                                <td>{val.to}</td>
                                <td>{val.for}</td>
                                <td>{val.facility}</td>
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
                    Comfort Letters / Corp. Guarantee - by LTIFZE
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
                      className="ActionTakenDashboard tableFreezeOption"
                      style={{
                        overflow: "auto",
                        marginTop: "10px",
                        maxHeight: "80vh",
                      }}
                    >
                      <table className="table table-bordered" id='LTIFZE'>
                        <thead
                          style={{
                            color: "#FC5C7D",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          
                          <tr className=" tableFreezeOptionSecondHeader tableHeaderStyle" style={{ textAlign: "center" }}>
                            <th rowSpan={3}>SL</th>
                            <th scope="col">Onbehalf</th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              To
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              For
                            </th>
                            <th scope="col">Facility value</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddUtilized ? (
                            <tr className="tableFirstThStyle">
                              <th>
                              <input
                                  // ref={sonbehalfInput}
                                  type="text"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </th>
                              <td>
                                <input
                                  ref={uonbehalfInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={utoInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uforInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={ufacilityInput}
                                  type="number"
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
                                    className="btn"
                                  >
                                    <i
                                      className="fa-solid fa-xmark"
                                      style={{ fontSize: "25px", color: "red" }}
                                    ></i>
                                  </button>
                                  <button
                                    onClick={handleUtilizationSaveBtn}
                                    className="btn"
                                  >
                                    <i
                                      className="fa-regular fa-floppy-disk fa-shake"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tr>
                              <td colSpan={14}>
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
                                    className="btn "
                                  >
                                    <i
                                      className="fa-solid fa-plus"
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          {uData.map((val, index) => {
                            return (
                              <tr className="tableFirstThStyle" key={index}>
                                <th>{val.sl}</th>
                                <td>{val.onbehalf}</td>
                                <td>{val.to}</td>
                                <td>{val.for}</td>
                                <td>{val.facility}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div
            className="popup-inner"
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <div className="card" style={{ padding: "10px" }}>
              <p style={{ fontSize: "20px" }}> Select Table </p>
              <div className="row">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelectGrid2"
                      aria-label="Floating label select example"
                      onChange={handleTableIdSelection}
                      value={selectedTableId}
                    >
                      <option value="ComfortLetters">Comfort Letters</option>
                      <option value="CorporateGurantee">Corporate Gurantee</option>
                      <option value="LTIFZE">Comfort Letters / Corp. Guarantee - by LTIFZE</option>
                    </select>
                    <label htmlFor="floatingSelectGrid2">
                      Selected Table
                    </label>
                  </div>
                </div>
                
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6 col-md-6 col-12">
                    <button
                      style={{ width: "100%", backgroundColor: "red" }}
                      onClick={() => showDownloadOption(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <button
                      style={{ width: "100%", backgroundColor: "#0A6862",whiteSpace:'nowrap' }}
                      onClick={exportToExcel}
                    >
                      Download
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComfortGurantee;
