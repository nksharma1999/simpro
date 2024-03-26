import { useState } from "react";
import { AddDataTermLoan } from "./AddDataTermLoan";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../../utils/excelFileDataToJson";
const data = [
  {
    bankName: "HDFC",
    dealDate: "12/12/2023",
    startDate: "13/12/2023",
    endDate: "13/12/2026",
    principal: 363463,
    interestRate: 10,
    interestPaymentFreq: "monthly",
    terms: "na",
  },
];
const TermLoan = () => {
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
    XLSX.utils.book_append_sheet(wb, ws1, "Term Loan");
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
    XLSX.writeFile(wb, `Term_Loan_Template_${filename}.xlsx`);
  };
  return (
    <>
      <h3>Term Loan</h3>
      <div className={"card "} style={{ maxHeight: "83vh", padding: "10px" }}>
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
          {/* <div className="row g-2">
            <div className="col-md"> */}
          <div className="form-floating" style={{ width: "170px" }}>
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              style={{ height: "36px", paddingTop: "5px" }}
              //   onChange={handleFY}
              //   value={selectedFY}
            >
              <option value="selectFY" selected>
                ---Select Bank---
              </option>
              <option value="HDFC">HDFC</option>
              <option value="Axis">Axis</option>
              <option value="SBI">SBI</option>
            </select>
            {/* <label htmlFor="floatingSelectGrid">Select FY</label> */}
          </div>
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
          }}
        >
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr style={{ textAlign: "center" }} className="tableFreezeOptionSecondHeader">
                <th scope="col">Bank Name</th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Deal Date
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Start Date
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  End Date
                </th>
                <th scope="col">Principal</th>
                <th scope="col">Interest Rate</th>
                <th scope="col">Interest Payment Frequency</th>
                <th scope="col">Terms </th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, index) => {
                return (
                  <tr key={index}>
                    <th>{val.bankName}</th>
                    <td>{val.dealDate}</td>
                    <td>{val.startDate}</td>
                    <td>{val.endDate}</td>
                    <td>{val.principal}</td>
                    <td>{val.interestRate}</td>
                    <td>{val.interestPaymentFreq}</td>
                    <td>{val.terms}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showAddNew && <AddDataTermLoan handleShowBtn={handleShowBtn} />}
    </>
  );
};

export default TermLoan;
