import { useState } from "react";
import { AddBank } from "./AddBank";
import { EditBank } from "./EditBankInfo";
import { AddFY } from "./AddFY";
const data=[{
    fyid:232,
    year:2023
},
{
    fyid:34,
    year:2024
},
{
    fyid:233434,
    year:2025
}
]

const Bank  = () =>{
    const [fyList,setFyList] = useState(data);
    const [isNewFY, setNewFY] = useState<boolean>(false);
    const [showEditPage,setShowEditPage] = useState<boolean>(false);
    const [editInfo,setEditInfo] = useState(null);
    const showAddNewDataEntryView = () =>{
        setNewFY(true);
    }
    const closeNewRolePage =() =>{
        setNewFY(false)
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
      <h3>Financial Year</h3>
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
          <p style={{ fontSize: "20px" }}> Financial Year List</p>
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
            <thead className="table-format" style={{color:'#FC5C7D', backgroundColor:'#f6f0f7'}}>
            <tr>
                  <th scope="col">Sl. No.</th>
                  <th scope="col">Year</th>
                  
                  <th scope="col" >
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
            {fyList.map((val, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>FY{val.year}</td>
                      
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
    {isNewFY && <AddFY closeAddComponent={closeNewRolePage} /> }
    {/* {showEditPage && <EditBank closeAddComponent={closeEditPage} info={editInfo} />} */}
    </>
};

export default Bank;