import React, { useState } from "react";
import DatePicker from "react-datepicker";
interface props {
  handleShowBtn: (event: boolean) => void;
  type: string;
}
export const AddEquityInfo: React.FC<props> = ({ handleShowBtn, type }) => {
  const [selectedType, setSelectedType] = useState<string>("ICD");
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
  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
      // File is a PDF, you can perform further actions here
      console.log('Selected PDF file:', file);
    } else {
      // File is not a PDF, you can provide feedback to the user
      console.error('Please select a PDF file.');
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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleTypeSelection}
                    value={selectedType}
                  >
                    <option value="ICD">ICD</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type</label>
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
                    <option value="Simpro">Simpro</option>
                    <option value="L&T">L&T</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Company Name</label>
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
                    <option value="Simpro">Type1</option>
                    <option value="L&T">Type2</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type of holding</label>
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
                  Date of Investment
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
              {/* <div
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
                  To Date:
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
              </div> */}

              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={investmentAmountInput}
                  />
                  <label htmlFor="floatingPassword2">Investment Amount</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
              <div style={{ marginTop: "10px" }}>
                <div className="input-group">
                  {/* <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload
              </label> */}
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
