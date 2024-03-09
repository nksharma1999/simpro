import { useState } from "react";

const data = [
  {
    moduleId: 1,
    name: "PMS",
  },
  {
    moduleId: 2,
    name: "Admin Page",
  },
];

const RoleMapping = () => {
  const [selectedRole, setSelectedRole] = useState();
  const [modules, setModules] = useState(data);
  const handleRole = (e: any) => {
    setSelectedRole(e.target.value);
  };
  return (
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
              <option >---Select---</option>
              <option value="Admin">Admin</option>
              <option value="Role1">Role1</option>
              <option value="Role2">Role2</option>
            </select>
            <label htmlFor="floatingSelectGrid">Select Role</label>
          </div>
          <div>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        <div style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}></div>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered">
            <thead style={{ color: "#FC5C7D", backgroundColor: "#f6f0f7" }}>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Module Name</th>
                <th scope="col">All</th>
                <th scope="col">View</th>
                <th scope="col">Id</th>
                <th scope="col">Create,View & Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((val, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{val.moduleId}</th>
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
                    <th scope="row"><div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div></th>
                    <th scope="row"><div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div></th>
                    <th scope="row"><div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div></th>
                    <th scope="row"><div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div></th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoleMapping;
