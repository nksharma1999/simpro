import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EditPopup } from "./EditActivity";
import * as XLSX from "xlsx";
const data = [
  {
    topic: "ABC",
    stepsIndentifed: "Other Data",
    currentUpdate: "Nothing",
    userName: "XYZ",
    taskStatus: "Completed",
  },
];

const ActionTakenReport: React.FC = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [allActivity, setAllActivity] = useState(data);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const topicInput = useRef<any>(null);
  const stepInput = useRef<any>(null);
  const currentUpdateInput = useRef<any>(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [editData,setEditData] = useState('');
  const [showEdit, setShowEdit] =useState<boolean>(false);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(allActivity);
    XLSX.utils.book_append_sheet(wb, ws1, "Action Taken Report");
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
    XLSX.writeFile(wb, `Action_Taken_Report_${filename}.xlsx`);
  };
  const handleEdit = (data:any) =>{
    // console.log(data);
    setEditData(data);
    setShowEdit(true);
  }
  const closeEditBox = () =>{
    setShowEdit(false);
    setEditData('');
  }
  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };
  const updateAddNewActivityView = () => {
    setShowAdd(!showAdd);
  };
  const handleUserSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedUser(e.target.value);
  };
  const handleStatusSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
  const handleAddNewActivity = () => {
    const inputData = {
      topic: topicInput.current.value,
      stepsIndentifed: stepInput.current.value,
      currentUpdate: currentUpdateInput.current.value,
      userName: selectedUser,
      taskStatus: selectedStatus,
    };
    // console.log(inputData);
    setAllActivity((prev) => [...prev, inputData]);
  };
  return (
    <div>
      <h3>ACTION TAKEN REPORT</h3>
      <div className="row flex-sm-row-reverse">
        {showAdd && (
          <div
            className={
              showAdd ? "col-lg-6 col-md-12 col-sm-12 card" : "col-12 card"
            }
            // style={{ overflowY:'auto',  maxHeight: "340px" }}
          >
            <div
              //   className="card-body"
              style={{
                padding: "10px",
                borderRadius: "0.3px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              <p style={{ fontSize: "20px" }}> Create Activity </p>
            </div>
            <div
              style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
            ></div>
            <div style={{ marginTop: "10px" }}>
              <div>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="Enter Topic Name"
                        ref={topicInput}
                      />
                      <label htmlFor="floatingInput1">Topic</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingPassword2"
                        placeholder="Steps Identifed"
                        ref={stepInput}
                      />
                      <label htmlFor="floatingPassword2">Steps Identifed</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingPassword3"
                        placeholder="Steps Identifed"
                        ref={currentUpdateInput}
                      />
                      <label htmlFor="floatingPassword3">Current Update</label>
                    </div>
                  </div>
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
                  
                </div>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                        onChange={handleUserSelection}
                        value={selectedUser}
                      >
                        <option disabled>---Select---</option>
                        <option value="User1">User1</option>
                        <option value="User2">User2</option>
                        <option value="User3">User3</option>
                      </select>
                      <label htmlFor="floatingSelectGrid">Assign User</label>
                    </div>
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
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Closed">Inprogress</option>
                      </select>
                      <label htmlFor="floatingSelectGrid2">
                        Activity Status
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            >
              <button
                onClick={handleAddNewActivity}
                style={{
                  border: "0px",
                  borderRadius: "5px",
                  height: "40px",
                  width: "100%",
                  backgroundColor: "#FC5C7D",
                  color: "white",
                }}
              >
                Add
              </button>
            </div>
          </div>
        )}
        <div
          className={
            showAdd ? "col-lg-6 col-md-12 col-sm-12 card " : "col-12 card "
          }
          style={{ maxHeight: "80vh" }}
        >
          <div
            style={{
              padding: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "20px" }}> Activity Tracker</p>
            {/* <div style={{ marginRight: "10px", marginTop: "10px" }}>
              
            </div> */}
            <div style={{ marginTop: "-10px", marginRight: "10px" }}>
            <button
                onClick={exportToExcel}
                style={{ backgroundColor: "white", borderWidth: "0" ,marginRight:'15px'}}
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
              <button
                onClick={updateAddNewActivityView}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-plus fa-fade"
                ></i>
              </button>
            </div>
            
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div
            className="ActionTakenDashboard"
            style={{ overflow: "auto", marginTop: "10px" }}
          >
            <table className="table table-bordered">
              <thead style={{color:'#FC5C7D', backgroundColor:'#f6f0f7'}}>
                <tr>
                  <th scope="col">Sn.</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Steps Identifed</th>
                  <th scope="col">Current Update</th>
                  <th scope="col">User Name</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Task Status
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {allActivity.map((val, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.topic}</td>
                      <td>{val.stepsIndentifed}</td>
                      <td>{val.currentUpdate}</td>
                      <td>{val.userName}</td>
                      <td style={{ textAlign: "center", color: "green" }}>
                        {val.taskStatus === "Completed" ? (
                          <i className="fa-solid fa-check"></i>
                        ) : (
                          <i className="fa-solid fa-ellipsis fa-fade"></i>
                        )}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          
                          cursor: "pointer",
                        }}
                      >
                        <button onClick={ () => handleEdit(val)} style={{backgroundColor:'white', border:'none',color: "green",}}><i className="fa-solid fa-pen-to-square" ></i></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showEdit && <EditPopup initialValue={editData} closeEditBox={closeEditBox} />}
    </div>
  );
};

export default ActionTakenReport;
