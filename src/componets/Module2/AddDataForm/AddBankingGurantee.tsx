import React, { useState } from "react";

import DatePicker from "react-datepicker";
interface props {
  handleShowBtn: (event: boolean) => void;
  // type: string;
}
export const AddBankingGurantee: React.FC<props> = ({ handleShowBtn }) => {
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
              <p style={{ fontSize: "20px" }}> Banking Guarantee Info </p>
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
                    <option value="ABCD">ABCD</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">
                    Subsidiary company
                  </label>
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
                    <option value="Axis">Axis</option>
                    <option value="HDFC">HDFC</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Bank Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={ProjectnameInput}
                  />
                  <label htmlFor="floatingPassword2">Project Name</label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="form-floating ">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={ContractValueInput}
                  />
                  <label htmlFor="floatingPassword2">Contract Value</label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="form-floating ">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="INR">INR</option>
                    <option value="FCY">FCY</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Currency(Cr)</label>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
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
                  As at (Start)
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
                className="col-lg-3 col-md-6 "
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
                  As at (End)
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
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={BeneficiaryNameInput}
                  />
                  <label htmlFor="floatingPassword2">Beneficiary Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={BGNoInput}
                  />
                  <label htmlFor="floatingPassword2">B.G No.</label>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={AmendmentInput}
                  />
                  <label htmlFor="floatingPassword2">Amendment</label>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 "
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
                  Validity From
                </label>
                <DatePicker
                  id="startDate"
                //   selected={startDate}
                  onChange={handleStartDateChange}
                //   selectsStart
                //   startDate={startDate}
                //   endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control DatePicker"
                />
              </div>
              <div
                className="col-lg-3 col-md-6 "
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
                  BG Validity
                </label>
                <DatePicker
                  id="endDate"
                //   selected={endDate}
                  onChange={handleEndDateChange}
                //   selectsEnd
                //   startDate={startDate}
                //   endDate={endDate}
                //   minDate={startDate}
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
                    <option value="PBG">PBG</option>
                    <option value="APG">APG</option>
                    <option value="TBG">TBG</option>
                    <option value="RBG">RBG</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type of BG</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea">Remaks</label>
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
