import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../../utils/excelFileDataToJson";

const data1= [
    {
      // Particulars: "ISIN no",
      bank: "INE018A08BF6",
      LEIN: "8% NCD Series 4",
      exemption: '23-Apr-20',
      section: '23-Apr-30',
      clause: 1800,
      
    },
    {
      // Particulars: "Order Book",
      bank: "INE018A08BF7",
      bond: "7.70% NCD 28-Apr-2025",
      allotment: '28-Apr-20',
      maturity: '28-Apr-25',
      principal: '2,500',
      
    },
    {
      // Particulars: "Adjustments to opening Order Book",
      bank: "INE018A08BF8",
      bond: "7.25% NCD 06-May-2024",
      allotment: '06-May-20',
      maturity: '06-May-24',
      principal: '1,450',
     
    },
    {
      // Particulars: "Sales",
      ISINnO: "INE018A08BF9",
      bond: "7.725% NCD 28-Apr-2028",
      allotment: '28-Mar-23',
      maturity: '28-Apr-28',
      principal: '2,000',
      
    },
    {
      // Particulars: "PAT",
      ISINnO: "INE018A08BF10",
      bond: "7.38% NCD Series I 10-Jun-2024",
      allotment: '08-jun-23',
      maturity: '10-jun-24',
      principal: '1,000',
    },
    {
      // Particulars: "PAT",
      ISINnO: "INE018A08BG4",
      bond: "7.335% NCD Series II 09-Sep-2024",
      allotment: '08-jun-23',
      maturity: '09-sep-24',
      principal: '1,000',
      
    },
    {
      // Particulars: "PAT",
      ISINnO: "INE018A08BH2",
      bond: "7.33% NCD Series III 09-Dec-2024",
      allotment: '08-jun-23',
      maturity: '09-Dec-24',
      principal: '1,000',
      
    },
  ];

const PrimaryInvestor = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const [selectedstartDate, setSelectedstartDate] = useState<Date | null>(null);
  const [selectedendDate, setSelectedEndDate] = useState<Date | null>(null);
  const [projectUpdateData, setprojectUpdateData] = useState(data1);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showAddNewDataView, setShowAddNewData] = useState(false);

  const banktInput = useRef<any>("");
  const LEINInput = useRef<any>("");
  const exemptionInput = useRef<any>("");
  const sectionInput = useRef<any>("");
  const clauseInput = useRef<any>("");
  const PANInput = useRef<any>("");
  const companyInput = useRef<any>("");
  

  const handleSanctionSaveBtn = () => {
    const data: any = {
      bank: banktInput.current.value,
      LEIN: LEINInput.current.value,
      exemption: exemptionInput.current.value,
      section: sectionInput.current.value,
      clause: clauseInput.current.value,
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
    const filename = `Primary_Investor_${formattedDate}.xlsx`;
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
        <h3>Primary Investor</h3>
    <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
      <div>

      {/* <div className="file-upload">
        <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={handleFileChange}
                />
        </div> */}
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
          className="ActionTakenDashboard"
          style={{
            overflow: "auto",
            marginTop: "10px",
            maxHeight: "80vh",
          }}
        >
          <table className="table table-bordered">
            <thead
              className="tableHeader"
            >
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Bank details</th>
                <th scope="col">LEIN</th>
                <th scope="col">IT Exemption</th>
                <th scope="col">IT section</th>
                <th scope="col">DTAA clause</th>
                <th scope="col">PAN</th>
                <th scope="col">Company Name</th>
              </tr>
            </thead>
            <tbody>
              {isShowAddSanction ? (
                <tr>
                  <td>
                  <input
                      ref={banktInput}
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
                      ref={exemptionInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={sectionInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={clauseInput}
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
                        <i className="fa-solid fa-xmark" ></i>
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
                  <td colSpan={8}>
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
                  <tr key={index}>
                    <td>{val.bank}</td>
                    <td>{val.LEIN}</td>
                    <td>{val.exemption}</td>
                    <td>{val.section}</td>
                    <td>{val.clause}</td>
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
    </div>
  );
};

export default PrimaryInvestor;
