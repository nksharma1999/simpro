import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../../utils/excelFileDataToJson";

const data1 = [
  {
    // Particulars: "ISIN no",
    bank: "INE018A08BF6",
    LEIN: "8% NCD Series 4",
    exemption: "23-Apr-20",
    section: "23-Apr-30",
    clause: 1800,
    PAN: "NOPUYRT567",
  },
  {
    // Particulars: "Order Book",
    bank: "INE018A08BF7",
    bond: "7.70% NCD 28-Apr-2025",
    allotment: "28-Apr-20",
    maturity: "28-Apr-25",
    principal: "2,500",
  },
  {
    // Particulars: "Adjustments to opening Order Book",
    bank: "INE018A08BF8",
    bond: "7.25% NCD 06-May-2024",
    allotment: "06-May-20",
    maturity: "06-May-24",
    principal: "1,450",
  },
  {
    // Particulars: "Sales",
    ISINnO: "INE018A08BF9",
    bond: "7.725% NCD 28-Apr-2028",
    allotment: "28-Mar-23",
    maturity: "28-Apr-28",
    principal: "2,000",
  },
  {
    // Particulars: "PAT",
    ISINnO: "INE018A08BF10",
    bond: "7.38% NCD Series I 10-Jun-2024",
    allotment: "08-jun-23",
    maturity: "10-jun-24",
    principal: "1,000",
  },
  {
    // Particulars: "PAT",
    ISINnO: "INE018A08BG4",
    bond: "7.335% NCD Series II 09-Sep-2024",
    allotment: "08-jun-23",
    maturity: "09-sep-24",
    principal: "1,000",
  },
  {
    // Particulars: "PAT",
    ISINnO: "INE018A08BH2",
    bond: "7.33% NCD Series III 09-Dec-2024",
    allotment: "08-jun-23",
    maturity: "09-Dec-24",
    principal: "1,000",
  },
];

const SecondaryInvestor = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [selectedstartDate, setSelectedstartDate] = useState<Date | null>(null);
  const [selectedendDate, setSelectedEndDate] = useState<Date | null>(null);
  const [projectUpdateData, setprojectUpdateData] = useState(data1);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showAddNewDataView, setShowAddNewData] = useState(false);

  const selfInput = useRef<any>("");
  const TDSInput = useRef<any>("");
  const KYCInput = useRef<any>("");
  const registrationInput = useRef<any>("");
  const LEINInput = useRef<any>("");
  const PANInput = useRef<any>("");
  const companyInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      self: selfInput.current.value,
      TDS: TDSInput.current.value,
      KYC: KYCInput.current.value,
      registration: registrationInput.current.value,
      LEIN: LEINInput.current.value,
      PAN: PANInput.current.value,
      company: companyInput.current.value,
    };
    setSData((prev: any) => [...prev, data]);
  };

  const handleCompanyInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };

  //   const handlestartDateChange = (date: Date | null) => {
  //     setSelectedstartDate(date);
  //   };

  //   const handleEndDateChange = (date: Date | null) => {
  //     setSelectedEndDate(date);
  //   }
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const currentDate = new Date();
    const formattedDate =
      currentDate.toISOString().slice(0, 10).replace(/-/g, "-") +
      "_" +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const filename = `Secondary_Investor_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, filename);
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
    <div>
      <h3>Secondary Investor</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
       
          <div className="d-flex justify-content-between mb-2">
            <div>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <button
                onClick={exportToExcel}
                style={{
                  backgroundColor: "white",
                  borderWidth: "0",
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
          </div>

          <div
            className="ActionTakenDashboard tableFreezeOption"
            style={{
              overflow: "auto",
              marginTop: "10px",
              // maxHeight: "80vh",
            }}
          >
            <table className="table table-bordered">
              <thead className="tableHeader">
                <tr
                  style={{ textAlign: "center" }}
                  className="tableFreezeOptionSecondHeader tableHeaderStyle"
                >
                  <th scope="col">Self Declaration</th>
                  <th scope="col">TDS Exemptions</th>
                  <th scope="col">KYC documents</th>
                  <th scope="col">SEBI/IRDAI Registration</th>
                  <th scope="col">LEIN</th>
                  <th scope="col">PAN</th>
                  <th scope="col">Comapny Name</th>
                </tr>
              </thead>
              <tbody>
                {isShowAddSanction ? (
                  <tr className="tableFirstThStyle">
                    <th>
                      <input
                        ref={selfInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </th>
                    <td>
                      <input
                        ref={TDSInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <input
                        ref={KYCInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <input
                        ref={registrationInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <input
                        ref={LEINInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <input
                        ref={PANInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>
                    <td>
                      <input
                        ref={companyInput}
                        type="text"
                        className="form-control"
                        style={{ minWidth: "100px" }}
                      />
                    </td>

                    <td>
                      {/* <div  style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                    <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={handleFileChange}
                />
                    </div> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          onClick={() => handleCompanyInputFormView(false)}
                          className="btn btn-primary"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div style={{ marginRight: "10px" }}></div>
                        <button
                          onClick={handleSanctionSaveBtn}
                          className="btn btn-primary"
                        >
                          <i className="fa-regular fa-floppy-disk"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan={7}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          onClick={() => handleCompanyInputFormView(true)}
                          className="btn btn-primary"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
                {sData.map((val: any, index: any) => {
                  return (
                    <tr className="tableFirstThStyle" key={index}>
                      <th>{val.self}</th>
                      <td>{val.TDS}</td>
                      <td>{val.KYC}</td>
                      <td>{val.registration}</td>
                      <td>{val.LEIN}</td>
                      <td>{val.PAN}</td>
                      <td>{val.company}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default SecondaryInvestor;
