import React, { useState, ChangeEvent } from "react";
import { AddDataForWorkingCapital } from "./AddDataForWorkingCapital"
import { excelFileDataToJson } from "../../utils/excelFileDataToJson";
import { EditWorkingCapital } from "./EditDataForWorkingCapital";
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
    Particulars: "Sales",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 110,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Current Assets",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 280,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Accounts Receivable",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 390,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Inventory",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 240,
    FYcurrent_B: 200,
  },
  {
    Particulars: "WIP",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 220,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Other Current Assets",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 270,
    FYcurrent_B: 200,
  },
  {
    Particulars: "GWC",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 210,
    FYcurrent_B: 200,
  },
  {
    Particulars: "GWC days",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 300,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Current Liabilities",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 320,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Vendor Balance",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 340,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Customer Advances",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 350,
    FYcurrent_B: 200,
  },
  {
    Particulars: "Other Current  Liabilities",
    FYpre: 100,
    Q1FYCurrent_A: 25,
    Q2FYCurrent_A: 25,
    Q3FYCurrent_A: 25,
    Q4FYCurrent_A: 25,
    Q1FYCurrent_B: 25,
    Q2FYCurrent_B: 25,
    Q3FYCurrent_B: 25,
    Q4FYCurrent_B: 25,
    FYcurrent_A: 360,
    FYcurrent_B: 200,
  },
  {
    Particulars: "NWC",
    FYpre: 100,
    Q1FYCurrent_A: 50,
    Q2FYCurrent_A: 50,
    Q3FYCurrent_A: 50,
    Q4FYCurrent_A: 50,
    Q1FYCurrent_B: 50,
    Q2FYCurrent_B: 50,
    Q3FYCurrent_B: 50,
    Q4FYCurrent_B: 50,
    FYcurrent_A: 150,
    FYcurrent_B: 200,
  },
  {
    Particulars: "NWC %",
    FYpre: 100,
    Q1FYCurrent_A: 50,
    Q2FYCurrent_A: 50,
    Q3FYCurrent_A: 50,
    Q4FYCurrent_A: 50,
    Q1FYCurrent_B: 50,
    Q2FYCurrent_B: 50,
    Q3FYCurrent_B: 50,
    Q4FYCurrent_B: 50,
    FYcurrent_A: 170,
    FYcurrent_B: 200,
  },

];


const WorkingCapital = () => {
  const [selectedFY, setSelectedFY] = useState("2023");
  const [selectedQtr, setSelectedQtr] = useState(["(A)", "(B)"]);
  const [selectedEntity, setSelectedEntity] = useState("");
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const [sData, setSData] = useState<metaData[]>([]);
  const [uData, setUData] = useState<metaData[]>([]);
  const [userEditInfo, setUserEditInfo] = useState(null);
  const [isShowEditPage, setToShowEditPage] = useState<boolean>(false);
  const showAddNewDataEntryView = () => {
    setShowAddNewData(!showAddNewDataView);
  };

  const handleFY = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFY(e.target.value);
  };

  const handleEntityFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedEntity(e.target.value);
  };
  const handleCompanyNameChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCompanyName(e.target.value);
  };

  const clearFilters = () => {
    setSelectedEntity("");
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
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(filterData());
    XLSX.utils.book_append_sheet(wb, ws1, "Wroking Capital");
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
    XLSX.writeFile(wb, `Working_Capital_${selectedFY}_${filename}.xlsx`);
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
  const findBudgetQtr = (fyA: number, fyB: number) => {
    const budget = (((fyA - fyB) / fyB) * 100);
    if (budget >= 0) {
      return { value: budget, isUp: true };
    } else {
      return { value: budget, isUp: false };
    }
  };

  const findBudgetFyr = (fyA: number, fyB: number) => {
    const budget = (((fyA - fyB) / fyA) * 100);
    if (budget >= 0) {
      return { value: budget, isUp: true };
    } else {
      return { value: budget, isUp: false };
    }
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
      <h3>Subsidiary wise working capital</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div className="d-flex justify-content-end mb-2">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
              onChange={handleFY}
              value={selectedFY}
            >
              <option disabled>---Select---</option>
              <option value="2023">2022-2023</option>
              <option value="2024">2023-2024</option>
              <option value="2025">2024-2025</option>
            </select>
            <label htmlFor="floatingSelectGrid">Select FY</label>
          </div>
          <div className="Entity-filter">
            <div className="form-floating">
              <select
                value={selectedCompanyName}
                onChange={handleCompanyNameChange}
                className="form-select"
                style={{ width: "200px" }}
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
              <label htmlFor="entityFilter" >Select Entity</label>
            </div>
          </div>
          {/* <button className="clear-button buttonColorPrimary"style={{backgroundColor:'#0A6862',color:'white'}} onClick={clearFilters}>
            Clear Filters
          </button> */}
          <div style={{ marginTop: "10px" }}></div>
          <div>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileChange}
            style={{marginTop:"10px"}}
          />
        </div>
          <button
            onClick={exportToExcel}
            style={{
              backgroundColor: "white",
              borderWidth: "0",
              marginRight: "15px",
              marginLeft: '10px'
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
        <div
          style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
        ></div>
        <div
          className="ActionTakenDashboard tableFreezeOption"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered">
            <thead className="table-format tableHeader" >
              <tr className="tableHeaderStyle">
                <th colSpan={2}></th>
                <th colSpan={2}>Q1 FY{selectedFY}</th>
                <th colSpan={2}>Q2 FY{selectedFY}</th>
                <th colSpan={2}>Q3 FY{selectedFY}</th>
                <th colSpan={2}>Q4 FY{selectedFY}</th>
                <th colSpan={5}></th>
                
              </tr>
              <tr className="tableFreezeOptionSecondHeader tableHeaderStyle">
              <th scope="col">Particulars</th>
                <th scope="col">FY{Number(selectedFY) - 1}</th>
                <th scope="col" style={{zIndex:0}}>Q1 FY{selectedFY}{selectedQtr[0]}</th>
                <th scope="col">Q1 FY{selectedFY}{selectedQtr[1]}</th>
                <th scope="col">Q2 FY{selectedFY}{selectedQtr[0]}</th>
                <th scope="col">Q2 FY{selectedFY}{selectedQtr[1]}</th>
                <th scope="col">Q3 FY{selectedFY}{selectedQtr[0]}</th>
                <th scope="col">Q3 FY{selectedFY}{selectedQtr[1]}</th>
                <th scope="col">Q4 FY{selectedFY}{selectedQtr[0]}</th>
                <th scope="col">Q4 FY{selectedFY}{selectedQtr[1]}</th>
                <th scope="col">FY{Number(selectedFY)}{selectedQtr[0]}</th>
                <th scope="col">FY{Number(selectedFY)}{selectedQtr[1]}</th>
                <th scope="col">Budget v/s Actual {Number(selectedFY)}-{Number(selectedFY) - 1}</th>
                <th scope="col" >Year on Year {Number(selectedFY)}-{Number(selectedFY) - 1}</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData().map((val, index) => {
                const info = findBudgetQtr(val.FYcurrent_A, val.FYcurrent_B);
                const fyr_info = findBudgetFyr(val.FYpre, val.FYcurrent_A)
                //const isSalesOrMargin = val.Particulars === "GWC" || val.Particulars === "GWC days" ||val.Particulars === "NWC"||val.Particulars === "NWC %";
                //const isSelectedEntity = val.Particulars.toLowerCase().includes(selectedEntity.toLowerCase());

                return (
                  <tr className="tableFirstThStyle" key={index} /*className={isSelectedEntity ? "highlight-row" : ""}*/>
                    <th scope="row" /*className={isSalesOrMargin ? "bold-text" : ""}*/>
                      {val.Particulars.includes("Margin") ? (
                        <>
                          % Margin <sub style={{ fontSize: "smaller" }}>(including other income)</sub>
                        </>
                      ) : (
                        val.Particulars
                      )}
                    </th>
                    <td style={{ textAlign: "right" }}>{val.FYpre}</td>
                    <td style={{ textAlign: "right" }}>{val.Q1FYCurrent_A}</td>
                    <td style={{ textAlign: "right" }}>{val.Q2FYCurrent_A}</td>
                    <td style={{ textAlign: "right" }}>{val.Q3FYCurrent_A}</td>
                    <td style={{ textAlign: "right" }}>{val.Q4FYCurrent_A}</td>
                    <td style={{ textAlign: "right" }}>{val.Q1FYCurrent_B}</td>
                    <td style={{ textAlign: "right" }}>{val.Q2FYCurrent_B}</td>
                    <td style={{ textAlign: "right" }}>{val.Q3FYCurrent_B}</td>
                    <td style={{ textAlign: "right" }}>{val.Q4FYCurrent_B}</td>
                    <td style={{ textAlign: "right" }}>{val.FYcurrent_A}</td>
                    <td style={{ textAlign: "right" }}>{val.FYcurrent_B}</td>
                    <td style={{ textAlign: "center" }}>{info.value.toFixed(2)}% {info.isUp ? <i style={{ color: "green" }} className="fa-solid fa-arrow-trend-up fa-fade"></i> : <i style={{ color: "red" }} className="fa-solid fa-arrow-trend-down fa-fade"></i>}</td>
                    <td style={{ textAlign: "center" }}>{fyr_info.value.toFixed(2)}% {fyr_info.isUp ? <i style={{ color: "green" }} className="fa-solid fa-arrow-trend-up fa-fade"></i> : <i style={{ color: "red" }} className="fa-solid fa-arrow-trend-down fa-fade"></i>}</td>
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
      showAddNewDataView && <AddDataForWorkingCapital closeAddComponent={showAddNewDataEntryView} />
   }
   {isShowEditPage && (
  <EditWorkingCapital
    closeEditComponent={closeEditPage}
    Capital={userEditInfo}
    updateUser={WorkingCapital}
  />
)}
    </>
  );
};

export default WorkingCapital;
