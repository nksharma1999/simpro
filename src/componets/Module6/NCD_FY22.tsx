import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NCD = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  // const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [selectedstartDate, setSelectedstartDate] = useState<Date | null>(null);
  const [selectedendDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedSsl, setSelectedSsl] = useState("1");
  const [selectedUsl, setSelectedUsl] = useState("1");
  const drawdownInput = useRef<any>("");
  const maturityInput = useRef<any>("");
  const amountInput = useRef<any>("");
  const roiInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      drawdown: drawdownInput.current.value,
      maturity: maturityInput.current.value,
      amount: amountInput.current.value,
      roi: roiInput.current.value,
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

  // const handleCompanyNameChange = (
  //   e: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setSelectedCompanyName(e.target.value);
  // };
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
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const currentDate = new Date();
    const formattedDate =
      currentDate.toISOString().slice(0, 10).replace(/-/g, "-") +
      "_" +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const filename = `NCD_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  return (
    <>
      <h3>NCD FY</h3>
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
            className=""
            style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
          >
            <table className="table table-bordered">
              <thead className="tableHeader">
                <tr className="tableHeaderStyle" style={{ textAlign: "center" }}>
                  <th scope="col">Drawdown</th>
                  <th scope="col">Maturity</th>
                  <th scope="col">Amount</th>
                  <th scope="col">ROI</th>
                </tr>
              </thead>
              <tbody>
                {isShowAddSanction ? (
                  <tr className="tableFirstThStyle">
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
                      <input
                        ref={amountInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <input
                        ref={roiInput}
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
                    <td colSpan={4}>
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
                    <tr className="tableFirstThStyle" key={index}>
                      <td>{val.drawdown}</td>
                      <td>{val.maturity}</td>
                      <td>{val.amount}</td>
                      <td>{val.roi}</td>
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

export default NCD;
