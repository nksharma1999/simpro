import { useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
const data = [
  {
    companyName: "L&T Power Developers Ltd.",
    q1: 29,
    q2: 23,
    q3: 32,
    q4: 32,
    equity_shares: 3232,
    pref_shares: 3232,
    final_dividend: 32,
    interim_dividend: 43,
    special_dividend: 32,
  },
];
export const DividendMainDashboard = () => {
  const [dataList, setDataList] = useState(data);
  const [excelData, setExcelData] = useState<any[]>([]);
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
      setExcelData(jsonResult1);
      // console.log(jsonResult1[0]);
      // setSData((prev) => [...prev, ...jsonResult1]);
      // const jsonResult2: metaData[] = excelFileDataToJson(inportedData2);
      // setUData((prev) => [...prev, ...jsonResult2]);
    };

    reader.readAsBinaryString(file);
  };
  return (
    <>
      <h3>Main Dashboard</h3>
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
                // accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div style={{ marginRight: "10px", marginTop: "0px" }}>
            <button
              //   onClick={exportToExcel}
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
              //   onClick={() => handleShowBtn(true)}
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
          className="ActionTakenDashboard"
          style={{
            overflow: "auto",
            marginTop: "10px",
            maxHeight: "80vh",
          }}
        >
          <h5>Excel Data</h5>
          {excelData.length > 0 && (
            <table className="table table-bordered">
              <thead className="tableHeader">
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">Company Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Type Of Holding</th>
                  <th scope="col">Type Of Dividend</th>
                  <th scope="col">Shareholding %</th>
                  <th
                    scope="col"
                    style={{ width: "200px", whiteSpace: "wrap" }}
                  >
                    No. of shares
                  </th>
                  <th scope="col">Dividend Per Share</th>
                  <th
                    scope="col"
                    style={{ width: "200px", whiteSpace: "wrap" }}
                  >
                    Gross Dividend
                  </th>
                  <th
                    scope="col"
                    style={{ width: "100px", whiteSpace: "wrap" }}
                  >
                    Div. Dist. Tax
                  </th>
                  <th
                    scope="col"
                    style={{ width: "100px", whiteSpace: "wrap" }}
                  >
                    Net Dividend
                  </th>
                  <th
                    scope="col"
                    style={{ width: "100px", whiteSpace: "wrap" }}
                  >
                    Date of Receipt
                  </th>
                  <th scope="col">Quarter</th>
                  <th scope="col">Received in Bank</th>
                  <th scope="col">Receipt</th>
                  <th scope="col">UTR</th>
                  <th scope="col">Email intimation from</th>
                  <th scope="col">Email intimation Date</th>
                  <th scope="col">Next Dividend Date</th>
                  <th scope="col">S&A Contact</th>
                </tr>
              </thead>
              <tbody>
                {excelData.map((val, index) => {
                  return (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {val.companyName}
                      </td>
                      <td>{val.Type}</td>
                      <td>{val.typeOfHolding}</td>
                      <td>{val.typeOfDividend}</td>
                      <td>{val.q2}</td>
                      <td>{val.equity_shares}</td>
                      <td>{val.pref_shares}</td>
                      <td>{val.final_dividend}</td>
                      <td>{val.interim_dividend}</td>
                      <td>{val.special_dividend}</td>
                      <td>{val.special_dividend}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Company Name</th>
                <th scope="col">Q1</th>
                <th scope="col">Q2</th>
                <th scope="col">Q3</th>
                <th scope="col">Q4</th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Equity Shares (No. of shares)
                </th>
                <th scope="col" style={{ width: "200px", whiteSpace: "wrap" }}>
                  Pref. Shares (No. of shares)
                </th>
                <th scope="col" style={{ width: "100px", whiteSpace: "wrap" }}>
                  Final Dividend
                </th>
                <th scope="col" style={{ width: "100px", whiteSpace: "wrap" }}>
                  Interim Dividend
                </th>
                <th scope="col" style={{ width: "100px", whiteSpace: "wrap" }}>
                  Special Dividend
                </th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((val, index) => {
                return (
                  <tr key={index} style={{ textAlign: "center" }}>
                    <td style={{ whiteSpace: "nowrap" }}>{val.companyName}</td>
                    <td>{val.q1}</td>
                    <td>{val.q2}</td>
                    <td>{val.q3}</td>
                    <td>{val.q4}</td>
                    <td>{val.equity_shares}</td>
                    <td>{val.pref_shares}</td>
                    <td>{val.final_dividend}</td>
                    <td>{val.interim_dividend}</td>
                    <td>{val.special_dividend}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
