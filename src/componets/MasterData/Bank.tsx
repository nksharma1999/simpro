import { useState } from "react";
import { AddBank } from "./AddBank";
import { EditBank } from "./EditBankInfo";
const data=[{
    bankId:232,
    bankName: 'HDFC',
    address:'Pune'
},
{
    bankId:34,
    bankName: 'Axis',
    address:'Pune'
},
{
    bankId:233434,
    bankName: 'IDFC',
    address:'Pune'
}
]

const Bank  = () =>{
    const [bankList,setBankList] = useState(data);
    const [isNewBank, setNewBank] = useState<boolean>(false);
    const [showEditPage,setShowEditPage] = useState<boolean>(false);
    const [editInfo,setEditInfo] = useState(null);
    const showAddNewDataEntryView = () =>{
        setNewBank(true);
    }
    const closeNewRolePage =() =>{
        setNewBank(false)
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
      <h3>Bank</h3>
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
          <p style={{ fontSize: "20px" }}> Bank List</p>
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
          <table className="table table-bordered" style={{ width: "100%" }}>
            <thead className="table-format tableHeader" >
            <tr className="tableHeaderStyle">
                  <th scope="col" style={{width:'20px'}}>Sl. No.</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">Address</th>
                  
                  <th scope="col" >
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
            {bankList.map((val, index) => {
                  return (
                    <tr key={index} className="tableFirstThStyle">
                      <th scope="row">{index + 1}</th>
                      <td>{val.bankName}</td>
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
    {isNewBank && <AddBank closeAddComponent={closeNewRolePage} /> }
    {showEditPage && <EditBank closeAddComponent={closeEditPage} info={editInfo} />}
    </>
};

export default Bank;