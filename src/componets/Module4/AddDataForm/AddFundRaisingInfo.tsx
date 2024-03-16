import React, { useState } from "react";
import DatePicker from "react-datepicker";
interface props {
  handleShowBtn: (event: boolean) => void;
  type: string;
}
export const AddFundRaisingInfo: React.FC<props> = ({
  handleShowBtn,
  type,
}) => {
  const [selectedType, setSelectedType] = useState<string>("NCD");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleTypeSelection = (e: any) => {
    setSelectedType(e.target.value);
  };
  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file.type === "application/pdf") {
      // File is a PDF, you can perform further actions here
      console.log("Selected PDF file:", file);
    } else {
      // File is not a PDF, you can provide feedback to the user
      console.error("Please select a PDF file.");
    }
  };
  return (
    <div className="popup">
      <div className="popup-inner" style={{ maxHeight: "100vh" }}>
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
              <p style={{ fontSize: "20px" }}> {type} </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleTypeSelection}
                    value={selectedType}
                  >
                    <option value="NCD">NCD</option>
                    <option value="ECB">ECB</option>
                    <option value="Term-Loan">Term Loan</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type</label>
                </div>
              </div>
              {selectedType === "NCD" && (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="ISIN No."
                      // ref={isinInput}
                    />
                    <label htmlFor="floatingInput1">ISIN No.</label>
                  </div>
                </div>
              )}
              {selectedType === "ECB" && (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="LRN No."
                      // ref={LRNInput}
                    />
                    <label htmlFor="floatingInput1">LRN No.</label>
                  </div>
                </div>
              )}
              {selectedType === "Term-Loan" && (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="Loan Ref. No."
                      // ref={LoanRefInput}
                    />
                    <label htmlFor="floatingInput1"> Loan Ref. No.</label>
                  </div>
                </div>
              )}
              {selectedType === "NCD" ? (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Security Description"
                      // ref={projectDetailsInput}
                    />
                    <label htmlFor="floatingPassword2">
                      Security Description
                    </label>
                  </div>
                </div>
              ) : (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelectGrid2"
                      aria-label="Floating label select example"
                      // onChange={handleTypeSelection}
                      // value={selectedType}
                    >
                      <option value="Axis">Axis</option>
                      <option value="HDFC">HDFC</option>
                      <option value="IDBI">IDBI</option>
                      <option value="SBI">SBI</option>
                    </select>
                    <label htmlFor="floatingSelectGrid2">Bank Name</label>
                  </div>
                </div>
              )}
            </div>
            <div className="row ">
              <div
                className="col-lg-3 col-md-6 mb-3"
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
                  {selectedType === "NCD" ? "Issue Date" : "Loan Start Date:"}
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
                className="col-lg-3 col-md-6 mb-3"
                style={{ position: "relative" }}
              >
                <label
                  htmlFor="endDate"
                  className="form-label"
                  style={{
                    position: "absolute",
                    top: 4,
                    zIndex: 1,
                    fontSize: "13px",
                    left: "25px",
                  }}
                >
                  Maturity Date:
                </label>
                <DatePicker
                  id="endDate"
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              {selectedType === "NCD" ? (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Issue Size"
                      // ref={IssueSizeInput}
                    />
                    <label htmlFor="floatingPassword2">Issue Size</label>
                  </div>
                </div>
              ) : (
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="ROI"
                      // ref={roiInput}
                    />
                    <label htmlFor="floatingPassword2">ROI</label>
                  </div>
                </div>
              )}
              <div className="col-12">
                <div className="input-group">
                  
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
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
