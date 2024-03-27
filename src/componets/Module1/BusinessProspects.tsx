import { useState } from "react";
import { AddDataBusinessProspects } from "./AddDataBusinessProspects";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import { EditBusinessProspects } from "./EditDataForBusinessProspects";
const data1 = [
  {
    Customer: "Order Inflow",
    Project: "ANC",
    Value: 120,
    Bid_Submission_Qtr: 20,
    Order_Award_Qtr: 25,
    Winning_Probability: "25%",
    Status: "Open",
  },
  {
    Customer: "Order Inflow",
    Project: "ANsdfC",
    Value: 120,
    Bid_Submission_Qtr: 20,
    Order_Award_Qtr: 25,
    Winning_Probability: "25%",
    Status: "Closed",
  },
  {
    Customer: "Order Inflow",
    Project: "ANsdfC",
    Value: 120,
    Bid_Submission_Qtr: 20,
    Order_Award_Qtr: 25,
    Winning_Probability: "25%",
    Status: "Open",
  },
];
const data2 = [
  {
    Customer: "Bhsg",
    Project: "ANC",
    Value: 120,
    Bid_Submission_Qtr: 20,
    Order_Award_Qtr: 25,
    Winning_Probability: "25%",
    Status: "Open",
  },
  {
    Customer: "shfdcscg",
    Project: "ANsdfC",
    Value: 120,
    Bid_Submission_Qtr: 20,
    Order_Award_Qtr: 25,
    Winning_Probability: "25%",
    Status: "Open",
  },
  {
    Customer: "hjH",
    Project: "ANsdfC",
    Value: 120,
    Bid_Submission_Qtr: 20,
    Order_Award_Qtr: 25,
    Winning_Probability: "25%",
    Status: "Open",
  },
];

const BusinessProspects = () => {
  const [submittedData, setsubmittedData] = useState(data1);
  const [yetToSubmittedData, setYetToSubmittedData] = useState(data2);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const [editData, setEditData] = useState("");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [isShowEditPage, setToShowEditPage] = useState<boolean>(false);
  const [userEditInfo, setUserEditInfo] = useState(null);
  const handleSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
  const filterData = (data: any) => {
    if (selectedStatus === "All") return data;
    const fdata = data.filter((val: any) => val.Status === selectedStatus);
    return fdata;
  };

  const handleEdit = (info: any) => {
    setUserEditInfo(info);
    setToShowEditPage(true);
  };
  const closeEditPage = () => {
    setToShowEditPage(false);
    setUserEditInfo(null);
  };
  const exportToExcel = () => {
    const filterSubmittedData =
      selectedStatus === "All"
        ? submittedData
        : submittedData.filter((f) => f.Status === selectedStatus);
    const filterYetToSubmittedData =
      selectedStatus === "All"
        ? yetToSubmittedData
        : yetToSubmittedData.filter((f) => f.Status === selectedStatus);
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(filterSubmittedData);
    const ws2 = XLSX.utils.json_to_sheet(filterYetToSubmittedData);
    XLSX.utils.book_append_sheet(wb, ws1, "Bids Submitted");
    XLSX.utils.book_append_sheet(wb, ws2, "Bids yet to be Submitted");
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
    XLSX.writeFile(wb, `Business_Prospects${filename}.xlsx`);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: "binary" });
      const sheetName1 = workbook.SheetNames[0];
      const worksheet1 = workbook.Sheets[sheetName1];
      const sheetName2 = workbook.SheetNames[1];
      const worksheet2 = workbook.Sheets[sheetName2];
      const inportedData1:any[] = XLSX.utils.sheet_to_json(worksheet1, { header: 1 });
      const inportedData2:any[] = XLSX.utils.sheet_to_json(worksheet2, { header: 1 });

      const jsonResult1:any[]= excelFileDataToJson(inportedData1);
      setsubmittedData((prev) => [...prev,...jsonResult1]);
      const jsonResult2:any[]= excelFileDataToJson(inportedData2);
      setYetToSubmittedData((prev) => [...prev,...jsonResult2]);

    };

    reader.readAsBinaryString(file);
  };
  const showAddNewDataEntryView = () => {
    setShowAddNewData(!showAddNewDataView);
  };
  return (
    <>
      <div>
        <h3>Business Prospects</h3>
        <div className={"card "} style={{ padding: "10px" }}>
          <div
            style={{
              // padding: "0px 0px",
              paddingBottom:'10px',
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
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
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
            <div style={{ textAlign: "center" }}>
              <h4>Part A - Bids Submitted</h4>
            </div>
            <div
              className="ActionTakenDashboard tableFreezeOption"
              style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
            >
              <table className="table table-bordered">
                <thead className="tableHeader">
                  <tr className="tableFreezeOptionSecondHeader tableHeaderStyle">
                    <th scope="col">Customer</th>
                    <th scope="col">Project</th>
                    <th scope="col">Value</th>
                    <th scope="col">Bid Submission Qtr.</th>
                    <th scope="col">Order Award Qtr.</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Winning Probability High / Medium / Low</th>
                    <th scope="col">Status </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                  Edit
                </th>
                  </tr>
                </thead>
                <tbody>
                  {filterData(submittedData).map((val: any, index: number) => {
                    return (
                      <tr key={index} className="tableFirstThStyle">
                        <th>{val.Customer}</th>
                        <td style={{ textAlign: "center" }}>{val.Project}</td>
                        <td style={{ textAlign: "right" }}>{val.Value}</td>

                        <td style={{ textAlign: "right" }}>{val.Bid_Submission_Qtr}</td>
                        <td style={{ textAlign: "right" }}>{val.Order_Award_Qtr}</td>
                        <td style={{ textAlign: "right" }}>{val.Winning_Probability}</td>
                        <td style={{ textAlign: "center" }}>{val.Status}</td>
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
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>
              <h4>Part B - Bids yet to be Submitted</h4>
            </div>
            <div
              className="ActionTakenDashboard tableFreezeOption"
              style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
            >
              <table className="table table-bordered">
                <thead className="tableHeader">
                  <tr className="tableFreezeOptionSecondHeader tableHeaderStyle">
                    <th scope="col">Customer</th>
                    <th scope="col">Project</th>
                    <th scope="col">Value</th>
                    <th scope="col">Bid Submission Qtr.</th>
                    <th scope="col">Order Award Qtr.</th>
                    <th scope="col" style={{width:'200px',whiteSpace:'wrap'}}>Winning Probability High / Medium / Low</th>
                    <th scope="col">Status </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                  Edit
                </th>
                  </tr>
                </thead>
                <tbody>
                  {filterData(yetToSubmittedData).map(
                    (val: any, index: number) => {
                      return (
                        <tr key={index} className="tableFirstThStyle">
                          <th>{val.Customer}</th>
                          <td style={{ textAlign: "center" }}>{val.Project}</td>
                          <td style={{ textAlign: "right" }}>{val.Value}</td>

                          <td style={{ textAlign: "right" }}>{val.Bid_Submission_Qtr}</td>
                          <td style={{ textAlign: "right" }}>{val.Order_Award_Qtr}</td>
                          <td style={{ textAlign: "right" }}>{val.Winning_Probability}</td>
                          <td style={{ textAlign: "center" }}>{val.Status}</td>
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
        <AddDataBusinessProspects closeAddComponent={showAddNewDataEntryView} />
      )}
      {isShowEditPage && (
  <EditBusinessProspects
    closeEditComponent={closeEditPage}
    Business={userEditInfo}
    updateUser={BusinessProspects}
  />
)}
    </>
  );
};

export default BusinessProspects;