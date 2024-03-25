import React, { useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import { AddDataForQuarterlyPerformance } from "./AddDataForQuarterlyPerformance";



const data = [
  {
    Particulars: "Order Inflow",
    FYpre: 100,
    FYcurrent: 120,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Order Book",
    FYpre: 100,
    FYcurrent: 10,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Adjustments to opening Order Book",
    FYpre: 100,
    FYcurrent: 160,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Sales",
    FYpre: 100,
    FYcurrent: 170,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "PAT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
];

const QuarterlyPerformance = () => {
  const [allActivity, setAllActivity] = useState(data);
  const [selectedFY, setSelectedFY] = useState("2023");
  const [editData, setEditData] = useState("");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [projectUpdateData, setprojectUpdateData] = useState(data);
  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const showAddNewDataEntryView = () => {
    setShowAddNewData(!showAddNewDataView);
  };

  const handleFY = (e: any) => {
    // console.log(e.target.value);
    setSelectedFY(e.target.value);
  };
  const findGrowth = (cfy: number, pfy: number) => {
    const growth = ((cfy - pfy) / pfy) * 100;
    if (growth >= 0) {
      return { value: growth, isUp: true };
    } else {
      return { value: growth, isUp: false };
    }
  };
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(allActivity);
    XLSX.utils.book_append_sheet(wb, ws1, "Quarterly Performance");
    const currentDate = new Date();
    const formattedDate =
      currentDate.toISOString().slice(0, 10).replace(/-/g, "-") +
      "_" +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const filename = `${formattedDate}.xlsx`;
    XLSX.writeFile(
      wb,
      `Quarterly_Performance_FY${selectedFY}_${filename}.xlsx`
    );
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
      setprojectUpdateData((prev: any[]) => [...prev, ...jsonResult1]);
    };

    reader.readAsBinaryString(file);
  };
  const handleEdit = (data: any) => {
    // console.log(data);
    setEditData(data);
    setShowEdit(true);
  };
  const closeEditBox = () => {
    setShowEdit(false);
    setEditData("");
  };
  return (
    <>
    <div>
      <h3>Quarterly Performance Report</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
          style={{
            paddingBottom: "10px",
            borderRadius: "0.3px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="form-floating" style={{ width: "170px" }}>
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              style={{ height: "36px", paddingTop: "5px" }}
              onChange={handleFY}
              value={selectedFY}
            >
              <option value="selectFY">---Select FY---</option>
              <option value="23">2022-2023</option>
              <option value="24">2023-2024</option>
              <option value="25">2024-2025</option>
            </select>
            {/* <label htmlFor="floatingSelectGrid">Select FY</label> */}
          </div>
          <div>
            <div className="input-group">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleFileChange}
              />
            </div>
          </div>
          {/* <div style={{ }}>
            <div className="input-group">
             
              <div
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                  float: "right",
                }}
              >
                <button
                  onClick={exportToExcel}
                  style={{
                    backgroundColor: "white",
                    borderWidth: "0",
                    marginRight: "50px",
                    marginTop: "10px",
                  }}
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
              <div style={{ marginRight: "10px", marginTop: "10px",float:"right" }}>
              <button
            onClick={showAddNewDataEntryView}
            style={{ backgroundColor: "white", borderWidth: "0" }}
          >
            <i
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop:"10px",
              }}
              className="fa-solid fa-plus fa-fade buttonColorPrimary"
            ></i>
          </button>
            </div>

            </div>
          </div> */}
          <div style={{ marginRight: "10px", marginTop: "0px" }}>
            <button
                onClick={exportToExcel}
              style={{
                backgroundColor: "white",
                borderWidth: "0",
                marginRight: "10px",
              }}
              title="Download Template"
            >
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="fa-solid fa-download fa-fade buttonColorPrimary"
              ></i>
            </button>
            {/* <button
                onClick={showAddNewDataEntryView}
              style={{ backgroundColor: "white", borderWidth: "0" }}
            >
              <i
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="fa-solid fa-plus fa-fade buttonColorPrimary"
              ></i>
            </button> */}
          </div>
        </div>
        <div style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}></div>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr>
                <th scope="col">Particulars</th>
                <th scope="col">FY{Number(selectedFY) - 1}</th>
                <th scope="col">FY{selectedFY}</th>
                <th scope="col">Growth %</th>
                <th scope="col">Q1 FY{selectedFY}</th>
                <th scope="col">Q2 FY{selectedFY}</th>
                <th scope="col">Q3 FY{selectedFY}</th>
                <th scope="col">Q4 FY{selectedFY}</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {allActivity.map((val, index) => {
                const info = findGrowth(val.FYcurrent, val.FYpre);
                return (
                  <tr key={index}>
                    <th scope="row">{val.Particulars}</th>
                    <td style={{ textAlign: "right" }}>{val.FYpre}</td>
                    <td style={{ textAlign: "right" }}>{val.FYcurrent}</td>
                    <td style={{ textAlign: "center" }}>
                      {info.value}%{" "}
                      {info.isUp ? (
                        <i
                          style={{ color: "green", textAlign: "center" }}
                          className="fa-solid fa-arrow-trend-up fa-fade"
                        ></i>
                      ) : (
                        <i
                          style={{ color: "red", textAlign: "center" }}
                          className="fa-solid fa-arrow-trend-down fa-fade"
                        ></i>
                      )}
                    </td>
                    <td style={{ textAlign: "right" }}>{val.Q1FYCurrent}</td>
                    <td style={{ textAlign: "right" }}>{val.Q2FYCurrent}</td>
                    <td style={{ textAlign: "right" }}>{val.Q3FYCurrent}</td>
                    <td style={{ textAlign: "right" }}>{val.Q4FYCurrent}</td>
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
    </div>
     {
      showAddNewDataView && <AddDataForQuarterlyPerformance closeAddComponent={showAddNewDataEntryView} />
   }
    </>
  );
};
export default QuarterlyPerformance;
