import React, { useState } from "react";
import DatePicker from "react-datepicker";
interface props {
  handleShowBtn: (event: boolean) => void;
  // type: string;
}
export const AddDataTermLoan: React.FC<props> = ({ handleShowBtn }) => {
  const [dealDate, setDealDate] = useState(null);
  const [loanStartDate, setLoanStartDate] = useState(null);
  const [loanEndDate, setLoanEndDate] = useState(null);
  const handleDealDateChange = (date: any) => {
    setDealDate(date);
  };
  const handleLoanStartDateChange = (date: any) => {
    setLoanStartDate(date);
  };
  const handleLoanEndDateChange = (date: any) => {
    setLoanEndDate(date);
  };
  return (
    <div className="popup">
      <div
        className="popup-inner"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
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
              <p style={{ fontSize: "20px" }}> Term Loan Info </p>
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
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                    //   onChange={handleFY}
                    //   value={selectedFY}
                  >
                    <option value="HDFC">HDFC</option>
                    <option value="Axis">Axis</option>
                    <option value="SBI">SBI</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Bank Name</label>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12"
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
                  Deal Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={dealDate}
                  onChange={handleDealDateChange}
                  selectsStart
                  startDate={dealDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12"
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
                  Start Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={loanStartDate}
                  onChange={handleLoanStartDateChange}
                  selectsStart
                  startDate={loanStartDate}
                  endDate={loanEndDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12"
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
                  End Date
                </label>
                <DatePicker
                  id="startDate"
                  selected={loanEndDate}
                  onChange={handleLoanEndDateChange}
                  selectsEnd
                  startDate={loanStartDate}
                  endDate={loanEndDate}
                  minDate={loanStartDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
             
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={principalInput}
                  />
                  <label htmlFor="floatingPassword2">Principal</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={interestRateInput}
                  />
                  <label htmlFor="floatingPassword2">Interest Rate</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={interestPaymentFrequencyInput}
                  />
                  <label htmlFor="floatingPassword2">Interest Payment Frequency</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={TermsInput}
                  />
                  <label htmlFor="floatingPassword2">Terms</label>
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
