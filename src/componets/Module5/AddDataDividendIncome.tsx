import React, { useState } from "react";
import DatePicker from "react-datepicker";
interface props {
  handleShowBtn: (event: boolean) => void;
  // type: string;
}
export const AddDataDividendIncome: React.FC<props> = ({ handleShowBtn }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };
  return (
    <div className="popup">
      <div className="popup-inner" style={{ maxHeight: "100vh",overflowY:'auto' }}>
        <div className="card" style={{ padding: "10px", maxWidth: "700px" }}>
          <div
            //   className="card-body"
            style={{
              // padding: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              // alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "10px" }}>
              <i
                className="fa-solid fa-briefcase"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Dividend Income Entry Form </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="Simpro">Simpro</option>
                    <option value="L&T">L&T</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Company Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    //   onChange={handleTypeSelection}
                    //   value={selectedType}
                  >
                    <option value="ICD">S&A</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type</label>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="FinalDividend">Final dividend</option>
                    <option value="interimDividend">Interim dividend</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type of Dividend</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="EquityShares">Equity Shares</option>
                    <option value="prefShares">Pref. Shares</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type of holding</label>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={shareholding_PreImput}
                  />
                  <label htmlFor="floatingPassword2">Shareholding %</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={noOfSharesInput}
                  />
                  <label htmlFor="floatingPassword2">No. Of Shares</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={dividendPerShareInput}
                  />
                  <label htmlFor="floatingPassword2">Dividend Per Share</label>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12"
                style={{ position: "relative" }}
              >
                <label
                  htmlFor="startDate"
                  className="form-label"
                  style={{
                    position: "absolute",
                    top: 4,
                    zIndex: 1,
                    fontSize: "13px",
                    left: "25px",
                  }}
                >
                  Date of Receipt
                </label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="q1">Q1</option>
                    <option value="q2">Q2</option>
                    <option value="q3">Q3</option>
                    <option value="q4">Q4</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Quarter</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={ReceivedInBankInput}
                  />
                  <label htmlFor="floatingPassword2">Received In Bank</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={ReceiptInput}
                  />
                  <label htmlFor="floatingPassword2">Receipt</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={utrInput}
                  />
                  <label htmlFor="floatingPassword2">URT</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={emailInitimationFromInput}
                  />
                  <label htmlFor="floatingPassword2">Email Initimation From</label>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12"
                style={{ position: "relative" }}
              >
                <label
                  htmlFor="startDate"
                  className="form-label"
                  style={{
                    position: "absolute",
                    top: 4,
                    zIndex: 1,
                    fontSize: "13px",
                    left: "25px",
                  }}
                >
                  Email Initimation Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              <div
                className="col-lg-6 col-md-12"
                style={{ position: "relative" }}
              >
                <label
                  htmlFor="startDate"
                  className="form-label"
                  style={{
                    position: "absolute",
                    top: 4,
                    zIndex: 1,
                    fontSize: "13px",
                    left: "25px",
                  }}
                >
                  Next Dividend Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={sAndaContactInput}
                  />
                  <label htmlFor="floatingPassword2">S&A Contact</label>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div style={{ marginTop: "10px" }}>
                  <div className="input-group">
                    
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      accept="application/pdf"
                      //   onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={() => handleShowBtn(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button style={{ width: "100%", backgroundColor: "#0A6862" }}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
