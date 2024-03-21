import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CommercialPaper = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [selectedstartDate, setSelectedstartDate] = useState<Date | null>(null);
  const [selectedendDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedissueDate, setSelectedIssueDate] = useState<Date | null>(null);
  const [selectedSsl, setSelectedSsl] = useState("1");
  const dealInput = useRef<any>("");
  const issueInput = useRef<any>("");
  const maturityInput = useRef<any>("");
  const yieldInput = useRef<any>("");
  const tenorInput = useRef<any>("");
  const amtInput = useRef<any>("");
  const discInput = useRef<any>("");
  const interestInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      deal: dealInput.current.value,
      issue: issueInput.current.value,
      maturity: maturityInput.current.value,
      yield: yieldInput.current.value,
      tenor: tenorInput.current.value,
      amt: amtInput.current.value,
      disc: discInput.current.value,
      interest: interestInput.current.value,
    };
    setSData((prev: any) => [...prev, data]);
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
  const handleIssueDateChange = (date: Date | null) => {
    setSelectedIssueDate(date);
  };
  const handleSsl = (e: any) => {
    setSelectedSsl(e.target.value);
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
    const filename = `Commercial_Paper_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  return (<>
  <h3>Commercial Paper</h3>
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
              className="fa-solid fa-download fa-fade buttonColorPrimary"
            ></i>
          </button>
        </div>
          <div className="" style={{ overflow: "auto",
                            marginTop: "10px",
                            maxHeight: "80vh",
                          }}>
                          
              <table className="table table-bordered">
                <thead
                  className="tableHeader"
                >
                
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">Deal Date</th>
                  <th scope="col">Issue Date</th>
                  <th scope="col">Maturity</th>
                  <th scope="col">Yield</th>
                  <th scope="col">Tenor</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Disc</th>
                  <th scope="col">Interest</th>
                </tr>
                </thead>
                <tbody>
                  {isShowAddSanction ? (
                    <tr>
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
                      <DatePicker
                      selected={selectedissueDate}
                      onChange={handleIssueDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      wrapperClassName="date-picker-wrapper" 
                    />
                      </td>
                      <td>
                        <input
                          ref={yieldInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                        </td>
                        <td>
                        <input
                          ref={tenorInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                        </td>
                        <td>
                        <input
                          ref={amtInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                        </td>
                        <td>
                        <input
                          ref={discInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                        </td>
                        <td>
                        <input
                          ref={interestInput}
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
                            style={{ marginRight: '5px' }} // Add margin to the right of the button
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <button
                            onClick={handleSanctionSaveBtn}
                            className="btn btn-primary"
                          >
                            <i className="fa-regular fa-floppy-disk fa-shake" style={{fontSize:'25px',color:''}}></i>
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
                        <td>{val.deal}</td>
                        <td>{val.issue}</td>
                        <td>{val.maturity}</td>
                        <td>{val.yield}</td>
                        <td>{val.tenor}</td>
                        <td>{val.amt}</td>
                        <td>{val.disc}</td>
                        <td>{val.interest}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
          </div>

      </div>
    </div></>
  );
};

export default CommercialPaper;
