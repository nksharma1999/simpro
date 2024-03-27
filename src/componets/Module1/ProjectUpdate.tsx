import { useState } from "react";
import { AddDataForProjectUpdate } from "./AddDataForProjectUpdate";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import { EditProjectUpdate } from "./EditDataForProjectUpdate";

const data1 = [
  {
    Project_name: "Order Inflow",
    Project_details: "ANC",
    Original_Contract_Value: 120,
    Start_Date: "20-02-2024",
    Completion_Date: "20-02-2026",
    Project_Completion_pre: "25%",
    Status: "Completed",
  },
  {
    Project_name: "Order Inflow",
    Project_details: "ANC",
    Original_Contract_Value: 1230,
    Start_Date: "20-02-2024",
    Completion_Date: "20-02-2027",
    Project_Completion_pre: "25%",
    Status: "Ongoing",
  },
];

const ProjectUpdate = () => {
  const [projectUpdateData, setprojectUpdateData] = useState(data1);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const [editData, setEditData] = useState("");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [isShowEditPage, setToShowEditPage] = useState<boolean>(false);
  const [userEditInfo, setUserEditInfo] = useState(null);


  const handleEdit = (info: any) => {
    setUserEditInfo(info);
    setToShowEditPage(true);
  };
  const closeEditPage = () => {
    setToShowEditPage(false);
    setUserEditInfo(null);
  };
  const exportToExcel = () => {
    const filterprojectUpdateData =
      selectedStatus === "All"
        ? projectUpdateData
        : projectUpdateData.filter((f) => f.Status === selectedStatus);
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(filterprojectUpdateData);
    XLSX.utils.book_append_sheet(wb, ws1, "Bids Submitted");
    const currentDate = new Date();
    const formattedDate =
      currentDate.toISOString().slice(0, 10).replace(/-/g, "-") +
      "_" +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const filename = `table_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, `Project_Update${filename}.xlsx`);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: "binary" });
      const sheetName1 = workbook.SheetNames[0];
      const worksheet1 = workbook.Sheets[sheetName1];
      const inportedData1: any[] = XLSX.utils.sheet_to_json(worksheet1, {
        header: 1,
      });

      const jsonResult1: any[] = excelFileDataToJson(inportedData1);
      setprojectUpdateData((prev) => [...prev, ...jsonResult1]);
    };

    reader.readAsBinaryString(file);
  };
  const handleSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
  const showAddNewDataEntryView = () => {
    setShowAddNewData(!showAddNewDataView);
  };
  const filterData = (data: any) => {
    if (selectedStatus === "All") return data;
    const fdata = data.filter((val: any) => val.Status === selectedStatus);
    return fdata;
  };
  return (
    <>
      <div>
        <h3>Project Update</h3>
        <div className={"card "} style={{ padding: "10px" }}>
          <div
            style={{
              paddingBottom: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <p style={{ fontSize: "20px" }}> Activity Tracker</p> */}
            <div className="form-floating" style={{ width: "400px" }}>
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleSelection}
                value={selectedStatus}
              >
                <option disabled>---Select---</option>
                <option value="All">All</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
              <label htmlFor="floatingSelectGrid">Select Status</label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div className="input-group">
                {/* <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload
              </label> */}
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div style={{ marginRight: "10px", marginTop: "10px" }}>
              <button
                onClick={exportToExcel}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-download fa-fade buttonColorPrimary"
                ></i>
              </button>
            </div>
            <div style={{ marginRight: "10px", marginTop: "10px" }}>
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
          <div>
            <div
              className="ActionTakenDashboard tableFreezeOption"
              style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
            >
              <table className="table table-bordered">
                <thead className="tableHeader">
                  <tr style={{textAlign:'center'}} className="tableFreezeOptionSecondHeader tableHeaderStyle">
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Project Name</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Project details (Short description)</th>
                    <th scope="col" style={{width:'250px',whiteSpace:'wrap'}}>Original Contract Value (Rs. Cr/Mn USD)</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Start-Date</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Expected / Actual Completion Date</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>% of Project Completion</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Status </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                  Edit
                </th>
                  </tr>
                </thead>
                <tbody>
                  {filterData(projectUpdateData).map(
                    (val: any, index: number) => {
                      return (
                        <tr key={index} className="tableFirstThStyle">
                          <th>{val.Project_name}</th>
                          <td style={{ textAlign: "center" }}>{val.Project_details}</td>
                          <td style={{ textAlign: "right" }}>{val.Original_Contract_Value}</td>

                          <td style={{ textAlign: "right" }}>{val.Start_Date}</td>
                          <td style={{ textAlign: "right" }}>{val.Completion_Date}</td>
                          <td style={{ textAlign: "right" }}>{val.Project_Completion_pre}</td>
                          <td style={{ textAlign: "center", color: "green" }}>
                            {val.Status}
                          </td>
                          <td
                      style={{
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <button
                        onClick={() => handleEdit(val)}
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "green",
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "green",
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showAddNewDataView && (
        <AddDataForProjectUpdate closeAddComponent={showAddNewDataEntryView} />
      )}
      {isShowEditPage && (
  <EditProjectUpdate
    closeEditComponent={closeEditPage}
    Project={userEditInfo}
    updateUser={ProjectUpdate}
  />
)}
    </>
  );
};

export default ProjectUpdate;