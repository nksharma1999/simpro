import { useState } from "react";
import { AddBank } from "./AddBank";
import { EditBank } from "./EditBankInfo";
import { AddFY } from "./AddFY";
import { AddSACompany } from "./AddSACompany";
import { EditSACompany } from "./EditSACompany";
const data=[{
    saCompanyId:232,
    code:2023,
    name:'NHshs',
    address:'Pune'
},
{
    saCompanyId:34,
    code:2024,
    name:'ABCD',
    address:'Delhi'
},
{
    saCompanyId:2434,
    code:2025,
    name:'KDND',
    address:'Pune'
}
]

const SACompany  = () =>{
    const [saCompanyList,setSACompanyList] = useState(data);
    const [isNewSACompany, setNewSACompany] = useState<boolean>(false);
    const [showEditPage,setShowEditPage] = useState<boolean>(false);
    const [editInfo,setEditInfo] = useState(null);
    const showAddNewDataEntryView = () =>{
        setNewSACompany(true);
    }
    const closeNewRolePage =() =>{
        setNewSACompany(false)
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
      <h3>S&A Company</h3>
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
          <p style={{ fontSize: "20px" }}> S&A Company List</p>
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
          className="ActionTakenDashboard tableFreezeOption"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered" style={{ width: "100%" }}>
            <thead className="table-format tableHeader" >
            <tr>
                  <th scope="col" style={{width:'20px'}}>Sl. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Address</th>
                  
                  <th scope="col" >
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
            {saCompanyList.map((val, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.name}</td>
                      <td>{val.code}</td>
                      <td>{val.address}</td>
                      
                      <td
                        style={{
                          textAlign: "center",
                          
                          cursor: "pointer",
                        }}
                      >
                        <button onClick={ () => handleEdit(val)} style={{backgroundColor:'white', border:'none',color: "green",}}><i className="fa-solid fa-pen-to-square" ></i></button>
                        <button  style={{backgroundColor:'white', border:'none',color: "gray",}}><i className="fa-solid fa-trash buttonColorPrimary"></i></button>
                      
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {isNewSACompany && <AddSACompany closeAddComponent={closeNewRolePage} /> }
    {showEditPage && <EditSACompany closeAddComponent={closeEditPage} info={editInfo} />}
    </>
};

export default SACompany;