import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import { BankingFacilitiesTemplate } from "../../utils/BankingFacilitiesTemplate";
interface metaData {
  company: string;
  bank: string;
  od: number;
  wcd: number;
  buyerCredit: number;
  packingCredit: number;
  bg: number;
  lc: number;
  fxLimit: number;
  cp: number;
  termLoan: number;
  ncd: number;
  ecb: number;
}

const BankingFacilities = () => {
  const [sData, setSData] = useState<metaData[]>([]);
  const [uData, setUData] = useState<metaData[]>([]);
  const [bData, setBData] = useState<metaData[]>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [isShowAddUtilized, setShowAddUtilized] = useState(false);
  const [selectedSBank, setSelectedSBank] = useState("HDFC");
  const [selectedUBank, setSelectedUBank] = useState("HDFC");
  const [selectedCompany, setSelectedCompany] = useState("Simpro");
  //Sanction Input
  const sODInput = useRef<any>('');
  const sWCDLInput = useRef<any>('');
  const sBuyerCreditInput = useRef<any>('');
  const sPackingCreditInput = useRef<any>('');
  const sBGInput = useRef<any>('');
  const sLCInput = useRef<any>('');
  const sFxLimitInput = useRef<any>('');
  const sCPInput = useRef<any>('');
  const sTermLoanInput = useRef<any>('');
  const sNCDINput = useRef<any>('');
  const sECBInput = useRef<any>('');
  //Utilization Input
  const uODInput = useRef<any>('');
  const uWCDLInput = useRef<any>('');
  const uBuyerCreditInput = useRef<any>('');
  const uPackingCreditInput = useRef<any>('');
  const uBGInput = useRef<any>('');
  const uLCInput = useRef<any>('');
  const uFxLimitInput = useRef<any>('');
  const uCPInput = useRef<any>('');
  const uTermLoanInput = useRef<any>('');
  const uNCDINput = useRef<any>('');
  const uECBInput = useRef<any>('');
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
    XLSX.writeFile(wb, `Banking_Facilities_${filename}.xlsx`);
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
      const inportedData1:any[] = XLSX.utils.sheet_to_json(worksheet1, { header: 1 });
      const inportedData2:any[] = XLSX.utils.sheet_to_json(worksheet2, { header: 1 });

      const jsonResult1:metaData[]= excelFileDataToJson(inportedData1);
      setSData((prev) => [...prev,...jsonResult1]);
      const jsonResult2:metaData[]= excelFileDataToJson(inportedData2);
      setUData((prev) => [...prev,...jsonResult2]);

    };

    reader.readAsBinaryString(file);
  };
  const removeSInput =() =>{
    sODInput.current.value=0;
    sWCDLInput.current.value=0;
    sBuyerCreditInput.current.value=0;
    sPackingCreditInput.current.value=0;
    sBGInput.current.value=0;
    sLCInput.current.value=0;
    sFxLimitInput.current.value=0;
    sCPInput.current.value=0;
    sTermLoanInput.current.value=0;
    sNCDINput.current.value=0;
    sECBInput.current.value=0;
  }
  const removeUInput =() =>{
    uODInput.current.value=0;
    uWCDLInput.current.value=0;
    uBuyerCreditInput.current.value=0;
    uPackingCreditInput.current.value=0;
    uBGInput.current.value=0;
    uLCInput.current.value=0;
    uFxLimitInput.current.value=0;
    uCPInput.current.value=0;
    uTermLoanInput.current.value=0;
    uNCDINput.current.value=0;
    uECBInput.current.value=0;
  }
  const handleSanctionSaveBtn = () => {
    const data: metaData = {
      company: selectedCompany,
      bank: selectedSBank,
      od: sODInput.current.value,
      wcd: sWCDLInput.current.value,
      buyerCredit: sBuyerCreditInput.current.value,
      packingCredit: sPackingCreditInput.current.value,
      bg: sBGInput.current.value,
      lc: sLCInput.current.value,
      fxLimit: sFxLimitInput.current.value,
      cp: sCPInput.current.value,
      termLoan: sTermLoanInput.current.value,
      ncd: sNCDINput.current.value,
      ecb: sECBInput.current.value,
    };
    setSData((prev) => [...prev, data]);
    removeSInput();
  };
  const handleUtilizationSaveBtn = () => {
    const data: metaData = {
      company: selectedCompany,
      bank: selectedUBank,
      od: uODInput.current.value,
      wcd: uWCDLInput.current.value,
      buyerCredit: uBuyerCreditInput.current.value,
      packingCredit: uPackingCreditInput.current.value,
      bg: uBGInput.current.value,
      lc: uLCInput.current.value,
      fxLimit: uFxLimitInput.current.value,
      cp: uCPInput.current.value,
      termLoan: uTermLoanInput.current.value,
      ncd: uNCDINput.current.value,
      ecb: uECBInput.current.value,
    };
    setUData((prev) => [...prev, data]);
    removeUInput();
  };
  const handleSBank = (e: any) => {
    setSelectedSBank(e.target.value);
  };
  const handleUBank = (e: any) => {
    setSelectedUBank(e.target.value);
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
  
  // const calculateTota =(val:metaData) =>{
  //   let sum =0;
  //   sum+=val.
  // }


  return (
    <>
      <div>
        <h3>Banking Facilities</h3>
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div style={{
              // padding: "0px 0px",
              paddingBottom:'10px',
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
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
            <div style={{ marginTop: "10px" }}>
              <div className="input-group">
                {/* <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload
              </label> */}
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div style={{ marginRight: "10px", marginTop: "10px" }} title="Download Template">
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
                              colSpan={2}
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
                              colSpan={7}
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
                            <th>Action</th>
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
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sWCDLInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sBuyerCreditInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sPackingCreditInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sBGInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sLCInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sFxLimitInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sCPInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sTermLoanInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={sNCDINput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>

                              <td>
                                <input
                                  ref={sECBInput}
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
                                      handleSanctionInputFormView(false)
                                    }
                                    className="btn"
                                    title="Remove"
                                  >
                                    <i className="fa-solid fa-xmark" style={{fontSize:'25px',color:'red'}}></i>
                                  </button>
                                  <button
                                    onClick={handleSanctionSaveBtn}
                                    className="btn"
                                    title="Save Data"
                                  >
                                    <i className="fa-regular fa-floppy-disk fa-shake" style={{fontSize:'25px',color:'green'}}></i>
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
                                    <i className="fa-solid fa-plus" style={{fontSize:'25px',color:'green'}}></i>
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
                                <td>{val.buyerCredit}</td>
                                <td>{val.packingCredit}</td>
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
                              colSpan={2}
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
                              colSpan={7}
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
                            <th>Action</th>
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
                                  onChange={handleUBank}
                                  value={selectedUBank}
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
                                  ref={uODInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uWCDLInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uBuyerCreditInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uPackingCreditInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uBGInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uLCInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uFxLimitInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uCPInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uTermLoanInput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>
                              <td>
                                <input
                                  ref={uNCDINput}
                                  type="number"
                                  className="form-control"
                                  style={{ minWidth: "100px" }}
                                />
                              </td>

                              <td>
                                <input
                                  ref={uECBInput}
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
                                    <i className="fa-solid fa-xmark" style={{fontSize:'25px',color:'red'}} ></i>
                                  </button>
                                  <button
                                    onClick={handleUtilizationSaveBtn}
                                    className="btn"
                                  >
                                    <i className="fa-regular fa-floppy-disk fa-shake" style={{fontSize:'25px',color:'green'}}></i>
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
                                    <i className="fa-solid fa-plus" style={{fontSize:'25px',color:'green'}}></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          {uData.map((val, index) => {
                            return (
                              <tr key={index}>
                                <td>{val.bank}</td>
                                <td>{val.od}</td>
                                <td>{val.wcd}</td>
                                <td>{val.buyerCredit}</td>
                                <td>{val.packingCredit}</td>
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
