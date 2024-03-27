import { useState } from "react";
import { AddDataStrategicTransaction } from "./AddDataStrategicTransaction";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
const data = [
  {
    companyName: "L&T",
    type: "Mergers",
    dealDate: "20-10-2024",
    shareType: "Equity share",
    noOfShares: 2323,
    ratioOfShare: "1:2",
    sharePrice: 422,
    dealValue: 43434,
    erstWhileEntityName: "Old L&T",
    newEntityName: "New L&T",
    remark: "OK",
  },
  {
    companyName: "L&T",
    type: "Mergers",
    dealDate: "20-10-2024",
    shareType: "Equity share",
    noOfShares: 2323,
    ratioOfShare: "1:2",
    sharePrice: 422,
    dealValue: 43434,
    erstWhileEntityName: "Old L&T",
    newEntityName: "New L&T",
    remark: "OK",
  },
  {
    companyName: "L&T",
    type: "Mergers",
    dealDate: "20-10-2024",
    shareType: "Equity share",
    noOfShares: 2323,
    ratioOfShare: "1:2",
    sharePrice: 422,
    dealValue: 43434,
    erstWhileEntityName: "Old L&T",
    newEntityName: "New L&T",
    remark: "OK",
  },
];
const StrategicTransactionDashbord = () => {
  const [list, setList] = useState(data);
  const [showAddNew, setShowAddNew] = useState<boolean>(false);
  const handleShowBtn = (action: boolean) => {
    setShowAddNew(action);
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
      // console.log(inportedData1);
      const jsonResult1: any[] = excelFileDataToJson(inportedData1);
      setList((prev) => [...prev, ...jsonResult1]);
      // console.log(jsonResult1[0]);
      // setSData((prev) => [...prev, ...jsonResult1]);
      // const jsonResult2: metaData[] = excelFileDataToJson(inportedData2);
      // setUData((prev) => [...prev, ...jsonResult2]);
    };

    reader.readAsBinaryString(file);
  };
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws1, "Strategic Transaction");
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
      `StrategicTransactionDashbord_Template_${filename}.xlsx`
    );
  };
  return (
    <>
      <h3>Strategic Transaction</h3>
      <div className={"card "} style={{ maxHeight: "83vh", padding: "10px" }}>
        <div
          style={{
            paddingBottom: "10px",
            borderRadius: "0.3px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{marginRight:'10px'}}>
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
            <button
              onClick={() => handleShowBtn(true)}
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
            </button>
          </div>
        </div>
        <div style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}></div>
        <div
          className="ActionTakenDashboard tableFreezeOption"
          style={{
            overflow: "auto",
            marginTop: "10px",
            maxHeight: "80vh",
            position:'relative'
          }}
        >
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr style={{ textAlign: "center" }} className="tableFreezeOptionSecondHeader tableHeaderStyle">
                <th scope="col">Company Name</th>
                <th scope="col">Type</th>
                <th scope="col">Deal Date</th>
                <th scope="col">Share Type</th>
                <th scope="col">No. of Shares</th>
                <th scope="col">Ratio of Shares</th>
                <th scope="col">Share Price</th>
                <th scope="col">Deal Value</th>
                <th scope="col">ErstWhile Entity Names</th>
                <th scope="col">New Entity Name</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, index) => {
                return (
                  <tr className="tableFirstThStyle" key={index}>
                    <th>{val.companyName}</th>
                    <td>{val.type}</td>
                    <td>{val.dealDate}</td>
                    <td>{val.shareType}</td>
                    <td>{val.noOfShares}</td>
                    <td>{val.ratioOfShare}</td>
                    <td>{val.sharePrice}</td>
                    <td>{val.dealValue}</td>
                    <td>{val.erstWhileEntityName}</td>
                    <td>{val.newEntityName}</td>
                    <td>{val.remark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showAddNew && (
        <AddDataStrategicTransaction handleShowBtn={handleShowBtn} />
      )}
    </>
  );
};

export default StrategicTransactionDashbord;
