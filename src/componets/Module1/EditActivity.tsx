import React, { useEffect, useRef, useState } from "react";

interface props {
  initialValue: any;
  closeEditBox: () => void;
}
export const EditPopup: React.FC<props> = ({ initialValue, closeEditBox }) => {
//   const [value, setValue] = useState(initialValue);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const topicInput = useRef<any>(null);
  const stepInput = useRef<any>(null);
  const currentUpdateInput = useRef<any>(null);
  const handleSave = () => {
    //   onSave(value);
    // Close the popup or do any additional actions after saving
  };
  const handleUserSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedUser(e.target.value);
  };
  const handleStatusSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
//   const inputData = {
//     topic: topicInput.current.value,
//     stepsIndentifed: stepInput.current.value,
//     currentUpdate: currentUpdateInput.current.value,
//     userName: selectedUser,
//     taskStatus: selectedStatus,
//   };
  const initializeData = () =>{
    topicInput.current.value= initialValue.topic;
    stepInput.current.value = initialValue.stepsIndentifed;
    currentUpdateInput.current.value = initialValue.currentUpdate;
    setSelectedUser(initialValue.userName);
    setSelectedStatus(initialValue.taskStatus)


  }
  useEffect(() =>{
    initializeData();
  },[initialValue]);
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="card" style={{padding:'10px'}}>
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
            <p style={{ fontSize: "20px" }}> Update Activity </p>
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
                      placeholder="Enter Topic Name"
                      ref={topicInput}
                      disabled
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
                <div className="col-lg-12 col-md-12">
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
              </div>
              <div className="row ">
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
                      <option value="Inprogress">Inprogress</option>
                    </select>
                    <label htmlFor="floatingSelectGrid2">Activity Status</label>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'10px'}}>
                <div className="col-lg-6 col-md-6 col-12">
                <button style={{width:'100%', backgroundColor:'red'}} onClick={closeEditBox}>Cancel</button>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                <button style={{width:'100%'}} onClick={handleSave} >Save</button>
                </div>
              </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};
