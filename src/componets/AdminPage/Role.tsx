import { useState } from "react";
import { AddRole } from "./AddRole";
import { EditRole } from "./EditRole";
const data=[{
    roleId:232,
    roleName: 'Admin'
},
{
    roleId:2532,
    roleName: 'Role2'
},
{
    roleId:23232,
    roleName: 'Role3'
}
]

const Role = () =>{
    const [roleList,setRoleList] = useState(data);
    const [isNewRoleAdding, setNewRoleAdding] = useState<boolean>(false);
    const [showEditPage,setShowEditPage] = useState<boolean>(false);
    const [editInfo,setEditInfo] = useState(null);
    const showAddNewDataEntryView = () =>{
        setNewRoleAdding(true);
    }
    const closeNewRolePage =() =>{
        setNewRoleAdding(false)
    }
    const handleEdit = (info:any) =>{
        setEditInfo(info);
        setShowEditPage(true);
    }
    const closeEditPage = () =>{
        setEditInfo(null);
        setShowEditPage(false);
    }
    return <>
    <div>
      <h3>Role</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
          style={{
            paddingBottom: "0px",
            borderRadius: "0.3px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: 'space-between',
            // alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}> Role List</p>
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
                className="fa-solid fa-plus fa-fade"
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
          <table className="table table-bordered" style={{ width: "100%" }}>
            <thead className="table-format tableHeader" >
            <tr>
                  <th scope="col">Sl. No.</th>
                  <th scope="col">Role Id</th>
                  <th scope="col">Role</th>
                  
                  <th scope="col" >
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
            {roleList.map((val, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.roleId}</td>
                      <td>{val.roleName}</td>
                      
                      <td
                        style={{
                          textAlign: "center",
                          
                          cursor: "pointer",
                        }}
                      >
                        <button onClick={ () => handleEdit(val)} style={{backgroundColor:'white', border:'none',color: "green",}}><i className="fa-solid fa-pen-to-square" ></i></button>
                        <button  style={{backgroundColor:'white', border:'none',color: "gray",}}><i className="fa-solid fa-trash"></i></button>
                      
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {isNewRoleAdding && <AddRole closeAddComponent={closeNewRolePage} /> }
    {showEditPage && <EditRole closeAddComponent={closeEditPage} info={editInfo} />}
    </>
}

export default Role;