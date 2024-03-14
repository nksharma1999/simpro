import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
interface props {
  closeAddComponent: () => void;
}
export const AddDataForProjectUpdate: React.FC<props> = ({
  closeAddComponent,
}) => {
  const [selectedStatus, setSelectedStatus] = useState("Ongoing");
  const projectNameInput = useRef<any>("");
  const projectDetailsInput = useRef<any>("");
  const Original_Contract_ValueInput = useRef<any>("");
  const Project_Completion_pre = useRef<any>("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStatusSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
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
        style={{  maxHeight: "100vh" }}
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
              <p style={{ fontSize: "20px" }}> Add New Data </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Customer Name"
                    ref={projectNameInput}
                  />
                  <label htmlFor="floatingInput1">Project Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Project"
                    ref={projectDetailsInput}
                  />
                  <label htmlFor="floatingPassword2">Project Details</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="Value"
                    ref={Original_Contract_ValueInput}
                  />
                  <label htmlFor="floatingPassword3">Original Contract Value</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Bid Submission Qtr."
                    ref={Project_Completion_pre}
                  />
                  <label htmlFor="floatingPassword4">% of Project Completion</label>
                </div>
              </div>
            </div>
            <div className="row ">
            <div className="col-lg-3 col-md-6 mb-3" style={{position:'relative'}}>
                    <label htmlFor="startDate" className="form-label" style={{position:'absolute',top:4,zIndex:1,fontSize:'13px',left:'25px'}}>
                      Start Date:
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
                  <div className="col-lg-3 col-md-6 mb-3" style={{position:'relative'}}>
                    <label htmlFor="endDate" className="form-label"  style={{position:'absolute',top:4,zIndex:1,fontSize:'13px',left:'25px'}}>
                      Target Date:
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
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleStatusSelection}
                    value={selectedStatus}
                  >
                    <option disabled>---Select---</option>
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Status</label>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={closeAddComponent}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button style={{ width: "100%" ,backgroundColor:'#0A6862'}}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
