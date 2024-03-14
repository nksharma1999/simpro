
import { useRef, useState } from "react";

interface props {
  closeAddComponent: () => void;
}

export const AddUser: React.FC<props> = ({
  closeAddComponent,
}) => {
const [isActiveUser,setIsActiveUser] = useState<string>('In-Active');
const [role,setRole] = useState<string>('');
   const projectInput = useRef<any>("");
  const customeNameInput = useRef<any>("");
  const orderAwardQtrInput = useRef<any>("");
  const bidSubmissionQtrInput = useRef<any>("");
  const valuetInput = useRef<any>("");
  const winningProbabilityInput = useRef<any>("");

  const handleActiveStatus = (e: any) => {
    // console.log(e.target.value);
    setIsActiveUser(e.target.value);
  };
  const handleRoleSelection = (e: any) =>{
    setRole(e.target.value);
  }
//   const handleSubmissionStatus =(e: any) =>{
//     setSelectedSubmissionStatus(e.target.value)
//   }
  return (
    <div className="popup">
      <div className="popup-inner" style={{overflowY:'auto', maxHeight:'100vh'}}>
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
              
              <i className="fa-solid fa-user-plus" style={{ fontSize: "30px" }}></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Create New User </p>
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
                    // ref={customeNameInput}
                  />
                  <label htmlFor="floatingInput1">Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Project"
                    // ref={projectInput}
                  />
                  <label htmlFor="floatingPassword2">User Id</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="email"
                    // ref={valuetInput}
                  />
                  <label htmlFor="floatingPassword3">Email ID</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Bid Submission Qtr."
                    // ref={bidSubmissionQtrInput}
                  />
                  <label htmlFor="floatingPassword4">Position</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword5"
                    placeholder="Order Award Qtr."
                    ref={orderAwardQtrInput}
                  />
                  <label htmlFor="floatingPassword5">Password</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword6"
                    placeholder="Winning Probability"
                    ref={winningProbabilityInput}
                  />
                  <label htmlFor="floatingPassword7">Employee ID</label>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleActiveStatus}
                    value={isActiveUser}
                  >
                    <option disabled>---Select---</option>
                    <option value="Active">Active</option>
                    <option value="In-Active">In Active</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Status</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid3"
                    aria-label="Floating label select example"
                    onChange={handleRoleSelection}
                    value={role}
                  >
                    <option disabled>---Select---</option>
                    <option value="Admin">Admin</option>
                    <option value="Role2">Role 2</option>
                    <option value="Role3">Role 3</option>
                    <option value="Role4">Role 4</option>
                  </select>
                  <label htmlFor="floatingSelectGrid3">Role</label>
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
                <button style={{ width: "100%",backgroundColor:'#0A6862' }}>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
