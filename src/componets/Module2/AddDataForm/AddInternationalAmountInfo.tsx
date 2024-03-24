import React, { useState } from "react";

import DatePicker from "react-datepicker";
interface props {
  handleShowBtn: (event: boolean) => void;
  // type: string;
}
export const AddInternationalAmountInfo: React.FC<props> = ({
  handleShowBtn,
}) => {
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
              <p style={{ fontSize: "20px" }}> International Amount Info </p>
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
                  <label htmlFor="floatingSelectGrid2">Company Name</label>
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
                    <option value="21">FY20-21</option>
                    <option value="22">FY21-22</option>
                    <option value="23">FY22-23</option>
                    <option value="24">FY23-24</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">FY</label>
                </div>
              </div>
              <div >

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  External Debt as at
                </label>
                <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Mar 23</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q1 June-23(A)</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q2 Sep-23(E)</label>
                  </div>
                </div>
                </div>
              </div>
              <div >

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  ICB from L&T as at
                </label>
                <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Mar 23</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q1 June-23(A)</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q2 Sep-23(E)</label>
                  </div>
                </div>
                </div>
              </div>
              <div >

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Cash/Investment as at
                </label>
                <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Mar 23</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q1 June-23(A)</label>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q2 Sep-23(E)</label>
                  </div>
                </div>
                </div>
              </div>
              <div >

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Equity from L&T as at
                </label>
                <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">Q1 June-23(A)</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Investment Amount"
                      // ref={odccInput}
                    />
                    <label htmlFor="floatingPassword2">FY-24 (B)</label>
                  </div>
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
