import { useState } from "react";
import { AddUser } from "./AddUser";
import { EditUserInfo } from "./EditUserInfo";

const data =[{
  userId:'2324',
  name:'Kishor',
  phone:242423232,
  companyName:'simpro',
  emailId:'abc@gmail.com',
  position:'emp',
  employeeId:'88n3h',
  userClassification:'Maker',
  isActive:false,
  role:'Admin'
},
{
  userId:'5309',
  name:'Abhs',
  phone:242423232,
  companyName:'simpro',
  emailId:'abcf@gmail.com',
  position:'emdfddp',
  employeeId:'88454n3h',
  userClassification:'Checker',
  isActive:true,
  role:'Role2'
},
]

const User = () => {
  const [userList,setUserList] = useState(data);
  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const [userEditInfo,setUserEditInfo] = useState(null);
  const [isShowEditPage,setToShowEditPage] = useState<boolean>(false);
  
  const showAddNewDataEntryView = () => {
    setShowAddNewData(!showAddNewDataView);
  };
 
  const handleEdit = (info: any) =>{
    setUserEditInfo(info)
    setToShowEditPage(true);
  };
 const closeEditPage = () =>{
  setToShowEditPage(false);
  setUserEditInfo(null);
 };

 const updateUser = (updatedUserInfo: any) => {
  // Update user information in the list
  const updatedUserList = userList.map(user => user.userId === updatedUserInfo.userId ? updatedUserInfo : user);
  setUserList(updatedUserList);
  closeEditPage(); // Close the edit modal
};
  return (<>
    <div>
      <h3>User</h3>
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
          <p style={{ fontSize: "20px" }}> User List </p>
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
            <tr>
                  <th scope="col">Sl. No.</th>
                  <th scope="col">User Id</th>
              
                  <th scope="col">Name</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Position</th>
                  <th scope="col" >
                    Employee Id
                  </th>
                  <th scope="col" >
                    Role
                  </th>
                  <th scope="col" >
                    User Classification
                  </th>
                  <th scope="col" >
                    Is Active
                  </th>
                  <th scope="col" >
                    Action
                  </th>
                </tr>
            </thead>
            <tbody>
            {userList.map((val, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.userId}</td>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td>{val.companyName}</td>
                      <td>{val.emailId}</td>
                      <td>{val.position}</td>
                      <td>{val.employeeId}</td>
                      <td>{val.role}</td>
                      <td>{val.userClassification}</td>
                      <td style={{ textAlign: "center", color: "green" }}>
                        {val.isActive ? (
                          <i className="fa-solid fa-circle" style={{color:'green'}}></i>
                        ) : (
                          <i className="fa-solid fa-circle" style={{color:'red'}}></i>
                        )}
                      </td>
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
    {
      showAddNewDataView && <AddUser closeAddComponent={showAddNewDataEntryView} />
    }
    {
      isShowEditPage && <EditUserInfo closeEditComponent={closeEditPage} userInfo ={userEditInfo} updateUser={updateUser}  />
    }
    </>
  );
};

export default User;
