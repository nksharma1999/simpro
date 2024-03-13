import React, { useRef, useState } from "react";
import * as xlsx from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BankingGuarantee = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [selectedBankName, setSelectedBankName] = useState("");
  const [selectedstartDate, setSelectedstartDate] = useState<Date | null>(null);
  const [selectedendDate, setSelectedEndDate] = useState<Date | null>(null);

  const projectInput = useRef<any>("");
  const contractValueInput = useRef<any>("");
  const AsAtValueInput = useRef<any>("");
  const benfNameInput = useRef<any>("");
  const bgnumInput = useRef<any>("");
  const remarksValInput = useRef<any>("");
  const validityInput = useRef<any>("");
  const ammendmentInput = useRef<any>("");
  const bgvalInput = useRef<any>("");
  const typeOfBgINput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      name: selectedCompanyName,
      project: projectInput.current.value,
      contractValue: contractValueInput.current.value,
      startAt: selectedstartDate,
      endAt: selectedendDate,
      bgnum: bgnumInput.current.value,
      bankname: selectedBankName,
      benfname: benfNameInput.current.value,
      remarks: remarksValInput.current.value,
      validity: validityInput.current.value,
      ammendment: ammendmentInput.current.value,
      Bgvalidity: bgvalInput.current.value,
      type_of_bg: typeOfBgINput.current.value,
    };
    setSData((prev: any) => [...prev, data]);
  };

  const handleCompanyInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };

  const handleCompanyNameChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCompanyName(e.target.value);
  };

  const handlebankNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBankName(e.target.value);
  };

  const handlestartDateChange = (date: Date | null) => {
    setSelectedstartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };
  const exportToExcel = () => {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(sData);
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    const currentDate = new Date();
    const formattedDate =
      currentDate.toISOString().slice(0, 10).replace(/-/g, "-") +
      "_" +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const filename = `Banking_Guarantee_${formattedDate}.xlsx`;
    xlsx.writeFile(wb, filename);
  };

  return (
    <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            onClick={exportToExcel}
            style={{
              backgroundColor: "white",
              borderWidth: "0",
              marginRight: "15px",
              marginLeft: "10px",
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
          </button>
        </div>

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
              className="tableHeader"
            >
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Name of subsidiary company</th>
                <th scope="col">Project name</th>
                <th scope="col">Contract Value (Cr) INR/FCY</th>
                <th scope="col">As at (Start)</th>
                <th scope="col">As at (End)</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Beneficiary Name</th>
                <th scope="col">B.G No.</th>
                <th scope="col">Remarks</th>
                <th scope="col">Validity From</th>
                <th scope="col">Amendment</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  BG Validity
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Type of BG (PBG/APG/TBG/RBG)
                </th>
              </tr>
            </thead>
            <tbody>
              {isShowAddSanction ? (
                <tr>
                  <td>
                    <select
                      value={selectedCompanyName}
                      onChange={handleCompanyNameChange}
                      className="form-select"
                      style={{ width: "200px" }}
                    >
                      <option value="" disabled>
                        ---Select Company---
                      </option>
                      <option value="Nabha Power Limited">
                        Nabha Power Limited
                      </option>
                      <option value="L&T Geostructure Pvt. Ltd.">
                        L&T Geostructure Pvt. Ltd.
                      </option>
                      <option value="L&T Special Steel & Heavy Forgings Pvt. Ltd.">
                        L&T Special Steel & Heavy Forgings Pvt. Ltd.
                      </option>
                      <option value="L&T Innovation Campus">
                        L&T Innovation Campus
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref={projectInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={contractValueInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <DatePicker
                      selected={selectedstartDate}
                      onChange={handlestartDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      wrapperClassName="date-picker-wrapper" 
                    />
                  </td>
                  <td>
                    <DatePicker
                      selected={selectedendDate}
                      onChange={handleEndDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      wrapperClassName="date-picker-wrapper" 
                    />
                  </td>
                  
                  <td>
                    <select
                      value={selectedBankName}
                      onChange={handlebankNameChange}
                      className="form-select"
                      style={{ width: "200px" }}
                    >
                      <option value="" disabled>
                        ---Select Bank---
                      </option>
                      <option value="State Bank of India">
                        State Bank of India
                      </option>
                      <option value="RBL Bank Ltd">RBL Bank Ltd.</option>
                      <option value="Yes Bank">Yes Bank</option>
                      <option value="Bank of India">Bank of India</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref={bgnumInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={benfNameInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={remarksValInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={validityInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={ammendmentInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={bgvalInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>

                  <td>
                    <input
                      ref={typeOfBgINput}
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
                        onClick={() => handleCompanyInputFormView(false)}
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-xmark" ></i>
                      </button>
                      <div style={{ marginRight: "10px" }}></div>
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
                        onClick={() => handleCompanyInputFormView(true)}
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              )}
              {sData.map((val: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>{val.name}</td>
                    <td>{val.project}</td>
                    <td>{val.contractValue}</td>
                    <td>{val.startAt}</td>
                    <td>{val.endAt}</td>
                    <td>{val.bgnum}</td>
                    <td>{val.bankname}</td>
                    <td>{val.benfname}</td>
                    <td>{val.remarks}</td>
                    <td>{val.validity}</td>
                    <td>{val.ammendment}</td>
                    <td>{val.Bgvalidity}</td>
                    <td>{val.type_of_bg}</td>
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

export default BankingGuarantee;
