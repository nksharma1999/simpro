import React, { useState, ChangeEvent } from "react";
import { AddDataForSummaryForecast } from "./AddDataForSummaryForecast";
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import * as XLSX from "xlsx";
interface metaData {
  company: string;
  bank: string;
  od: number;
  wcd: number;
  buyerCredit: number;
  packingCredit: number;
  bg: number;
  lc: number;
  fxLimit: number;
  cp: number;
  termLoan: number;
  ncd: number;
  ecb: number;
}
const data = [
  {
    Particulars: "Order Book",
    FYpre: 100,
    FYcurrent: 120,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Order Inflow",
    FYpre: 100,
    FYcurrent: 10,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Sales",
    FYpre: 100,
    FYcurrent: 160,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "EBITDA",
    FYpre: 100,
    FYcurrent: 170,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "% margin",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Other Income",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Depreciation",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "PBIT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "% Margin(including other income)",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "Interest",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "PBT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "PAT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
  },
  {
    Particulars: "% Margin (including other income)",
    FYpre: 100,
    FYcurrent: 150,
    Growth: "50%",
    Q1FYCurrent_A: 50,
    Q2FYCurrent_A: 50,
    Q3FYCurrent_A: 50,
    Q4FYCurrent_A: 50,
    Q1FYCurrent_B: 50,
    Q2FYCurrent_B: 50,
    Q3FYCurrent_B: 50,
    Q4FYCurrent_B: 50,
  },
];

const SummaryForecast = () => {
  const [selectedFY, setSelectedFY] = useState("2023");
  const [selectedQtr, setSelectedQtr] = useState(["(A)", "(B)"]);
  const [selectedEntity, setSelectedEntity] = useState("");
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [sData, setSData] = useState<metaData[]>([]);
  const [uData, setUData] = useState<metaData[]>([]);

  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const showAddNewDataEntryView = () => {
    setShowAddNewData(!showAddNewDataView);
  };

  const handleFY = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFY(e.target.value);
  };

  const handleEntityFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedEntity(e.target.value);
  };
  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompanyName(e.target.value);
  };

  const clearFilters = () => {
    setSelectedEntity("");
  };
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(filterData());
    XLSX.utils.book_append_sheet(wb, ws1, "P&L Summary Forecast");
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
    XLSX.writeFile(wb, `P&L_Summary_Forecast_${selectedFY}_${filename}.xlsx`);
  };
  const findGrowth = (cfy: number, pfy: number) => {
    const growth = ((cfy - pfy) / pfy) * 100;
    if (growth >= 0) {
      return { value: growth, isUp: true };
    } else {
      return { value: growth, isUp: false };
    }
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
      const inportedData1: any[] = XLSX.utils.sheet_to_json(worksheet1, {
        header: 1,
      });
      const inportedData2: any[] = XLSX.utils.sheet_to_json(worksheet2, {
        header: 1,
      });

      const jsonResult1: metaData[] = excelFileDataToJson(inportedData1);
      setSData((prev) => [...prev, ...jsonResult1]);
      const jsonResult2: metaData[] = excelFileDataToJson(inportedData2);
      setUData((prev) => [...prev, ...jsonResult2]);
    };

    reader.readAsBinaryString(file);
  };

  const filterData = () => {
    if (selectedEntity === "") {
      return data;
    } else {
      return data.filter((item) =>
        item.Particulars.toLowerCase().includes(selectedEntity.toLowerCase())
      );
    }
  };

  return (
    <>
      <div>
        <h3>P&L summary report and forecast</h3>
        <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
          <div className="d-flex justify-content-end mb-2">
            <div className="form-floating" style={{ width: "170px" }}>
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleFY}
                value={selectedFY}
                style={{ height: "40px", paddingTop: "5px" }}
              >
                <option disabled>---Select---</option>
                <option value="2023">2022-2023</option>
                <option value="2024">2023-2024</option>
                <option value="2025">2024-2025</option>
              </select>
              {/* <label htmlFor="floatingSelectGrid">Select FY</label> */}
            </div>
            <div className="Entity-filter">
              <div className="form-floating" style={{ maxWidth: "240px" }}>
                <select
                  value={selectedCompanyName}
                  onChange={handleCompanyNameChange}
                  className="form-select"
                  style={{ height: "40px", paddingTop: "5px" }}
                >
                  <option value="" disabled>
                    ---Select Company---
                  </option>
                  <option value="Nabha Power Limited">
                    Nabha Power Limited
                  </option>
                  <option value="L&T Geostructure Pvt. Ltd.">
                    L&T Geostructure Pvt. Ltd.
                  </option>
                  <option value="L&T Special Steel & Heavy Forgings Pvt. Ltd.">
                    L&T Special Steel & Heavy Forgings Pvt. Ltd.
                  </option>
                  <option value="L&T Innovation Campus">
                    L&T Innovation Campus
                  </option>
                </select>
                {/* <label htmlFor="entityFilter">Company</label> */}
              </div>
            </div>
            
            <div>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleFileChange}
                // style={{ marginTop: "10px" }}
              />
            </div>

            <button
              onClick={exportToExcel}
              style={{
                backgroundColor: "white",
                borderWidth: "0",
                marginRight: "15px",
                marginLeft: "10px",
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
            </button>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
          <div
            className="ActionTakenDashboard tableFreezeOption"
            style={{ overflow: "auto", marginTop: "10px" }}
          >
            <table className="table table-bordered table-striped">
              <thead className="table-format tableHeader">
                <tr>
                  <th colSpan={2}></th>
                  {/* <th rowSpan={2}>FY{Number(selectedFY) - 1}</th> */}
                  <th colSpan={2}>Q1 FY{selectedFY}</th>
                  <th colSpan={2}>Q2 FY{selectedFY}</th>
                  <th colSpan={2}>Q3 FY{selectedFY}</th>
                  <th colSpan={2}>Q4 FY{selectedFY}</th>
                  <th colSpan={2}></th>
                </tr>
                <tr className="tableFreezeOptionSecondHeader">
                  <th scope="col">Particulars</th>
                  <th scope="col">FY{Number(selectedFY) - 1}</th>
                  <th scope="col" style={{ zIndex: 0 }}>
                    Q1 FY{selectedFY}
                    {selectedQtr[0]}
                  </th>
                  <th scope="col">
                    Q1 FY{selectedFY}
                    {selectedQtr[1]}
                  </th>
                  <th scope="col">
                    Q2 FY{selectedFY}
                    {selectedQtr[0]}
                  </th>
                  <th scope="col">
                    Q2 FY{selectedFY}
                    {selectedQtr[1]}
                  </th>
                  <th scope="col">
                    Q3 FY{selectedFY}
                    {selectedQtr[0]}
                  </th>
                  <th scope="col">
                    Q3 FY{selectedFY}
                    {selectedQtr[1]}
                  </th>
                  <th scope="col">
                    Q4 FY{selectedFY}
                    {selectedQtr[0]}
                  </th>
                  <th scope="col">
                    Q4 FY{selectedFY}
                    {selectedQtr[1]}
                  </th>
                  <th scope="col">FY{Number(selectedFY)}</th>
                  <th scope="col">Growth %</th>
                </tr>
              </thead>
              <tbody>
                {filterData().map((val, index) => {
                  const info = findGrowth(val.FYcurrent, val.FYpre);
                  const isSalesOrMargin =
                    val.Particulars === "Sales" ||
                    val.Particulars === "% Margin";
                  const isSelectedEntity =
                    val.Particulars.toLowerCase().includes(
                      selectedEntity.toLowerCase()
                    );

                  return (
                    <tr
                      key={index}
                      className={isSelectedEntity ? "highlight-row" : ""}
                    >
                      <th
                        scope="row"
                        className={isSalesOrMargin ? "bold-text" : ""}
                      >
                        {val.Particulars.includes("Margin") ? (
                          <>
                            % Margin{" "}
                            <sub style={{ fontSize: "smaller" }}>
                              (including other income)
                            </sub>
                          </>
                        ) : (
                          val.Particulars
                        )}
                      </th>
                      <td style={{ textAlign: "right" }}>{val.FYpre}</td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q1FYCurrent_A}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q2FYCurrent_A}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q3FYCurrent_A}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q4FYCurrent_A}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q1FYCurrent_B}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q2FYCurrent_B}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q3FYCurrent_B}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {val.Q4FYCurrent_B}
                      </td>
                      <td style={{ textAlign: "center" }}>{val.FYcurrent}</td>
                      <td>
                        {info.value}%{" "}
                        {info.isUp ? (
                          <i
                            style={{ color: "green" }}
                            className="fa-solid fa-arrow-trend-up fa-fade"
                          ></i>
                        ) : (
                          <i
                            style={{ color: "red" }}
                            className="fa-solid fa-arrow-trend-down fa-fade"
                          ></i>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showAddNewDataView && (
        <AddDataForSummaryForecast
          closeAddComponent={showAddNewDataEntryView}
        />
      )}
    </>
  );
};

export default SummaryForecast;
