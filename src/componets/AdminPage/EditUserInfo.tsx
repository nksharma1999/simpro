
import { useEffect, useRef, useState } from "react";

interface Props {
  closeEditComponent: () => void;
  userInfo : any;
  updateUser: (updatedUserInfo: any) => void;
}

export const EditUserInfo: React.FC<Props> = ({
  closeEditComponent,
  userInfo,
  updateUser
}) => {
  const [editedUserInfo, setEditedUserInfo] = useState(userInfo);
  const userNameInput = useRef<HTMLInputElement>(null);
  const emailIdInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const employeeIdInput = useRef<HTMLInputElement>(null);
  const isActiveInput = useRef<HTMLSelectElement>(null);
  const roleInput = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = () => {
    if (userNameInput.current) userNameInput.current.value = userInfo.name;
    if (emailIdInput.current) emailIdInput.current.value = userInfo.emailId;
    if (positionInput.current) positionInput.current.value = userInfo.position;
    if (employeeIdInput.current) employeeIdInput.current.value = userInfo.employeeId;
    if (isActiveInput.current) isActiveInput.current.value = userInfo.isActive.toString();
    if (roleInput.current) roleInput.current.value = userInfo.role;
  };

  const handleUpdateUser = () => {
    const updatedUserInfo = {
      ...editedUserInfo,
      name: userNameInput.current?.value || '',
      emailId: emailIdInput.current?.value || '',
      position: positionInput.current?.value || '',
      employeeId: employeeIdInput.current?.value || '',
      isActive: isActiveInput.current?.value === 'true', // Convert string to boolean
      role: roleInput.current?.value || ''
    };

    // updateUser(updatedUserInfo);
  };

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
              
              <i className="fa-solid fa-user-pen" style={{ fontSize: "30px" }}></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Edit User Information </p>
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
                    id="floatingPassword2"
                    placeholder="User Id"
                    // ref={userIdInput}
                    disabled
                  />
                  <label htmlFor="floatingPassword2">User Id</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Name"
                    ref={userNameInput}
                  />
                  <label htmlFor="floatingInput1">Name</label>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="User Id"
                    // ref={userIdInput}
                  />
                  <label htmlFor="floatingPassword3">Phone No.</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="email"
                    ref={emailIdInput}
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
                    placeholder="Position"
                    ref={positionInput}
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
                    placeholder="Password"
                    ref={employeeIdInput}
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
                    placeholder="Emp ID"
                    ref={employeeIdInput}
                  />
                  <label htmlFor="floatingPassword7">Employee ID</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option>---Select---</option>
                  <option value="Simpro">Simpro</option>
                  <option value="BACGD">BACGD</option>
                  <option value="BSJGD">BSJGD</option>
                </select>
                <label htmlFor="floatingSelectGrid">Company</label>
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
                    // onChange={handleActiveStatus}
                    // value={isActiveUser}
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
                    // onChange={handleRoleSelection}
                    // value={role}
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
              <div className="col-lg-6 col-md-12">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option>---Select---</option>
                  <option value="Maker">Maker</option>
                  <option value="Checker">Checker</option>
                  <option value="Approver">Approver</option>
                </select>
                <label htmlFor="floatingSelectGrid">User Classification</label>
              </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={closeEditComponent}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button style={{ width: "100%",backgroundColor:'#0A6862' }} onClick={handleUpdateUser}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
