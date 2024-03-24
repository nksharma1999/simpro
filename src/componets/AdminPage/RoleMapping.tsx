import { useState } from "react";
import { AddRole } from "./AddRole";

const data = [
  {
    permissionId: 1,
    name: "User",
  },
  {
    permissionId: 2,
    name: "Mail Config",
  },
  {
    permissionId: 3,
    name: "Role Mapping",
  },
  {
    permissionId: 4,
    name: "S&A Company Master",
  },
  {
    permissionId: 5,
    name: "Bank Master",
  },
];

const RoleMapping = () => {
  const [selectedRole, setSelectedRole] = useState();
  const [modules, setModules] = useState(data);
  const [isNewRoleAdding, setNewRoleAdding] = useState<boolean>(false);
  const handleRole = (e: any) => {
    setSelectedRole(e.target.value);
  };
  const showAddNewDataEntryView = () => {
    setNewRoleAdding(true);
  };
  const closeNewRolePage = () => {
    setNewRoleAdding(false);
  };
  return (
    <>
      <div>
        <h3>Role Mapping</h3>
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div
            style={{
              paddingBottom: "10px",
              borderRadius: "0.3px",
              display: "flex",
              // flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <div className="row g-2">
          <div className="col-md"> */}
            <div className="form-floating" style={{ width: "600px" }}>
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleRole}
                value={selectedRole}
              >
                <option>---Select---</option>
                <option value="Admin">Admin</option>
                <option value="Role1">Role1</option>
                <option value="Role2">Role2</option>
              </select>
              <label htmlFor="floatingSelectGrid">Select Role</label>
            </div>
            <div style={{ marginRight: "10px", marginTop: "0px" }}>
              <button
                onClick={showAddNewDataEntryView}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-plus fa-fade buttonColorPrimary"
                ></i>
              </button>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
          <div
            className="ActionTakenDashboard"
            style={{ overflow: "auto", marginTop: "10px" }}
          >
            <table className="table table-bordered">
              <thead className="tableHeader">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Permission Name</th>
                  <th scope="col">All</th>
                  <th scope="col">Create</th>
                  <th scope="col">View</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Data Lock</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((val, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{val.permissionId}</th>
                      <th scope="row">{val.name}</th>
                      <th scope="row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>

                      <th scope="row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{ backgroundColor: "#0A6862", color: "white" }}
              className="btn "
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {isNewRoleAdding && <AddRole closeAddComponent={closeNewRolePage} />}
    </>
  );
};

export default RoleMapping;
