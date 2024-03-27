import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ICBMovement = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [selectedstartDate, setSelectedstartDate] = useState<Date | null>(null);
  const [selectedendDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedSsl, setSelectedSsl] = useState("1");
  const [selectedUsl, setSelectedUsl] = useState("1");
  const icdInput = useRef<any>("");
  const companyInput = useRef<any>("");
  const valueInput = useRef<any>("");
  const maturityInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      ICD: icdInput.current.value,
      company: companyInput.current.value,
      value: valueInput.current.value,
      maturity: maturityInput.current.value,
    };
    setSData((prev: any) => [...prev, data]);
  };

  const handleSsl = (e: any) => {
    setSelectedSsl(e.target.value);
  };
  const handleUsl = (e: any) => {
    setSelectedUsl(e.target.value);
  };

  const handleCompanyInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompanyName(e.target.value);
  };
  const handleSanctionInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };
  const handlestartDateChange = (date: Date | null) => {
    setSelectedstartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const exportToExcel = () => {
    const table = document.getElementById("ICBMovement");
    const ws = XLSX.utils.table_to_sheet(table);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ICBMovement" );
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
    XLSX.writeFile(wb, `ICBMovement${filename}.xlsx`);
  };

  return (
    <>
      <h3>ICD-ICB Movement</h3>
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
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="fa-solid fa-download fa-fade"
              ></i>
            </button>
          </div>
          <div
            className=""
            style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
          >
            <table className="table table-bordered" id='ICBMovement'>
              <thead className="tableHeader">
                <tr className="tableHeaderStyle" style={{ textAlign: "center" }}>
                  <th scope="col">ICD</th>
                  <th scope="col">S&A Company</th>
                  <th scope="col">Values in Rs Cr.</th>
                  <th scope="col">Maturity day</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {isShowAddSanction ? (
                  <tr>
                    <td>
                    <input
                        // ref={valueInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>

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
                          L&T Sapura Shipping
                        </option>
                        <option value="L&T Geostructure Pvt. Ltd.">
                          L&T HE LLC
                        </option>
                        <option value="L&T Special Steel & Heavy Forgings Pvt. Ltd.">
                          L&T Special Steel
                        </option>
                        <option value="L&T Innovation Campus">
                          L&T Geostructure P.Ltd
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        ref={valueInput}
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          onClick={() => handleSanctionInputFormView(false)}
                          className="btn btn-primary"
                          style={{ marginRight: "5px" }} // Add margin to the right of the button
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <button
                          onClick={handleSanctionSaveBtn}
                          className="btn btn-primary"
                        >
                          <i
                            className="fa-regular fa-floppy-disk fa-shake"
                            style={{ fontSize: "25px", color: "" }}
                          ></i>
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
                          onClick={() => handleSanctionInputFormView(true)}
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
                      <td>{val.icd}</td>
                      <td>{val.company}</td>
                      <td>{val.value}</td>
                      <td>{val.maturity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICBMovement;
