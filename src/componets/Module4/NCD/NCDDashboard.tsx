import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../../utils/excelFileDataToJson";
import { BankingFacilitiesTemplate } from "../../../utils/BankingFacilitiesTemplate";
interface metaData {
  // company: string;
  ISIN : string;
  bond : string;
  issue : number;
  maturity : number;
  amount : number;
}

const NCDDashboard = () => {
  const [sData, setSData] = useState<metaData[]>([]);
  const [uData, setUData] = useState<metaData[]>([]);
  const [bData, setBData] = useState<metaData[]>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [isShowAddUtilized, setShowAddUtilized] = useState(false);
  const [selectedSsl, setSelectedSsl] = useState("1");
  const [selectedUsl, setSelectedUsl] = useState("1");
  // const [selectedCompany, setSelectedCompany] = useState("Simpro");
  //Comfort Input
  const sISINInput = useRef<any>("");
  const sbondInput = useRef<any>("");
  const sissueInput = useRef<any>("");
  const smaturityInput = useRef<any>("");
  const samountInput = useRef<any>("");
  // Corporate input
  const uISINInput = useRef<any>("");
  const ubondInput = useRef<any>("");
  const uissueInput = useRef<any>("");
  const umaturityInput = useRef<any>("");
  const uamountInput = useRef<any>("");

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(BankingFacilitiesTemplate);
    const ws2 = XLSX.utils.json_to_sheet(BankingFacilitiesTemplate);
    XLSX.utils.book_append_sheet(wb, ws1, "Sanctioned limits");
    XLSX.utils.book_append_sheet(wb, ws2, "Utilisation of limits");
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
    XLSX.writeFile(wb, `NCD_Dashboard_${filename}.xlsx`);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: "binary" });
      const sheetName1 = workbook.SheetNames[0];
      const worksheet1 = workbook.Sheets[sheetName1];
      const sheetName2 = workbook.SheetNames[1];
      const worksheet2 = workbook.Sheets[sheetName2];
      const inportedData1: any[] = XLSX.utils.sheet_to_json(worksheet1, {
        header: 1,
      });
      const inportedData2: any[] = XLSX.utils.sheet_to_json(worksheet2, {
        header: 1,
      });

      const jsonResult1: metaData[] = excelFileDataToJson(inportedData1);
      setSData((prev) => [...prev, ...jsonResult1]);
      const jsonResult2: metaData[] = excelFileDataToJson(inportedData2);
      setUData((prev) => [...prev, ...jsonResult2]);
    };

    reader.readAsBinaryString(file);
  };
const removeSInput = () => {
    sISINInput.current.value = 0;
    sbondInput.current.value = 0;
    sissueInput.current.value = 0;
    smaturityInput.current.value = 0;
    samountInput.current.value = 0;
  };
  const removeUInput = () => {
    uISINInput.current.value = 0;
    ubondInput.current.value = 0;
    uissueInput.current.value = 0;
    umaturityInput.current.value = 0;
    uamountInput.current.value = 0;
  };   
  const handleSanctionSaveBtn = () => {
    const data: metaData = {
           ISIN: sISINInput.current.value,
      bond: sbondInput.current.value,
      issue: sissueInput.current.value,
      maturity: smaturityInput.current.value,
      amount: samountInput.current.value,
    };
    setSData((prev) => [...prev, data]);
    removeSInput();
  };
  const handleUtilizationSaveBtn = () => {
    const data: metaData = {
      ISIN: uISINInput.current.value, 
      bond: ubondInput.current.value,
      issue: uissueInput.current.value,
      maturity: umaturityInput.current.value,
      amount: uamountInput.current.value,
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
  const handleSanctionInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };
  const handleUtilizedInputFormView = (op: boolean) => {
    setShowAddUtilized(op);
  };

  return (
    <>
      <div>
        <h3>NCD Dashboard</h3>
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div
            style={{
              // padding: "0px 0px",
              paddingBottom: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: 'flex-end',
              alignItems: "center",
            }}
          >
            <div
              style={{ marginRight: "10px", marginTop: "10px" }}
              title="Download Template"
            >
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
                    style={{
                      backgroundColor: "transparent",
                      color: "Black",
                      paddingLeft: "10px",
                    }}
                  >
                    <i
                      className="fa-solid fa-chart-simple"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    NCD Outstanding dashboard
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
                      <table className="table table-bordered">
                        <thead
                          style={{
                            color: "black",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                         
                          <tr style={{ textAlign: "center" }} className="tableFreezeOptionSecondHeader">
                          <th rowSpan={3}>ISIN no</th>
                            <th
                              scope="col"
                              style={{ width: "250px", whiteSpace: "wrap" }}
                            >
                              Bond discription
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Issue Date
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Maturity Date
                            </th>
                            <th scope="col">Principal Amount(Cr)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddSanction ? (
                            <tr>
                              <th>
                              <input
                                  ref={sISINInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </th>
                              <td>
                                <input
                                  ref={sbondInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sissueInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={smaturityInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={samountInput}
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
                              <tr key={index}>
                                <th>{val.ISIN}</th>
                                <td>{val.bond}</td>
                                <td>{val.issue}</td>
                                <td>{val.maturity}</td>
                                <td>{val.amount}</td>
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
                     style={{
                      backgroundColor: "transparent",
                      color: "Black",
                      paddingLeft: "10px",
                    }}
                  >
                    <i
                      className="fa-solid fa-chart-simple"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    NCD Issued during particular period
                  </button>
                </h2>
                <div
                  id="Utilisation-Collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="UtilisationHeader"
                  
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
                      <table className="table table-bordered">
                        <thead
                          style={{
                            color: "#black",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          <tr style={{ textAlign: "center" }} className="tableFreezeOptionSecondHeader">
                            <th rowSpan={3}>ISIN no</th>
                            <th
                              scope="col"
                              style={{ width: "250px", whiteSpace: "wrap" }}
                            >
                              Bond discription
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Issue Date
                            </th>
                            <th
                              scope="col"
                              style={{ width: "200px", whiteSpace: "wrap" }}
                            >
                              Maturity Date
                            </th>
                            <th scope="col">Principal Amount(Cr)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddUtilized ? (
                            <tr>
                              <th>
                                <input
                                  ref={uISINInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </th>
                              <td>
                                <input
                                  ref={ubondInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uissueInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={umaturityInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uamountInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>

                              <td></td>
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
                              <tr key={index}>
                                <th>{val.ISIN}</th>
                                <td>{val.bond}</td>
                                <td>{val.issue}</td>
                                <td>{val.maturity}</td>
                                <td>{val.amount}</td>
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
               
              >
                <h2 className="accordion-header" id="availableHeader">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#available-Collapse"
                    aria-expanded="true"
                    aria-controls="available-Collapse"
                     style={{
                      backgroundColor: "transparent",
                      color: "Black",
                      paddingLeft: "10px",
                    }}
                  >
                    <i
                      className="fa-solid fa-chart-simple"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    NCD Matured during particular period
                  </button>
                </h2>
                <div
                  id="available-Collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="availableHeader"
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
                      <table className="table table-bordered">
                        <thead
                          style={{
                            color: "#black",
                            backgroundColor: "#f6f0f7",
                          }}
                        >
                          <tr style={{ textAlign: "center" }} className="tableFreezeOptionSecondHeader">
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
                          </tr>
                        </thead>
                        <tbody>
                          {isShowAddUtilized ? (
                            <tr>
                              <th>
                              <input
                                  ref={uISINInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </th>
                              <td>
                                <input
                                  ref={ubondInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uissueInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={umaturityInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uamountInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td></td>
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
                              <tr key={index}>
                                <th>{val.ISIN}</th>
                                <td>{val.bond}</td>
                                <td>{val.issue}</td>
                                <td>{val.maturity}</td>
                                <td>{val.amount}</td>
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
    </>
  );
};

export default NCDDashboard;
