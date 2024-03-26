import React, { useState } from "react";
import * as XLSX from "xlsx";
import { excelFileDataToJson } from "../../../utils/excelFileDataToJson";

const data1= [
  {
    // Particulars: "ISIN no",
    ISINnO: "INE018A08BF6",
    bond: "8% NCD Series 4",
    allotment: '23-Apr-20',
    maturity: '23-Apr-30',
    principal: 1800,
    face: '10,00,000',
    units: '18,000',
    annual : '59,836',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '8.00%',
    interest : 'yearly',
    redem : '144',
  },
  {
    // Particulars: "Order Book",
    ISINnO: "INE018A08BF7",
    bond: "7.70% NCD 28-Apr-2025",
    allotment: '28-Apr-20',
    maturity: '28-Apr-25',
    principal: '2,500',
    face: '10,00,000',
    units: '25,000',
    annual : '77,000',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '7.70%',
    interest : 'yearly',
    redem : '192.5',
  },
  {
    // Particulars: "Adjustments to opening Order Book",
    ISINnO: "INE018A08BF8",
    bond: "7.25% NCD 06-May-2024",
    allotment: '06-May-20',
    maturity: '06-May-24',
    principal: '1,450',
    face: '10,00,000',
    units: '14,500',
    annual : '72,500',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '7.25%',
    interest : 'yearly',
    redem : '105.13',
  },
  {
    // Particulars: "Sales",
    ISINnO: "INE018A08BF9",
    bond: "7.725% NCD 28-Apr-2028",
    allotment: '28-Mar-23',
    maturity: '28-Apr-28',
    principal: '2,000',
    face: '10,00,000',
    units: '2,00,000',
    annual : '656',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '7.725',
    interest : 'yearly',
    redem : '13.12',
  },
  {
    // Particulars: "PAT",
    ISINnO: "INE018A08BF10",
    bond: "7.38% NCD Series I 10-Jun-2024",
    allotment: '08-jun-23',
    maturity: '10-jun-24',
    principal: '1,000',
    face: '10,00,000',
    units: '1,00,000',
    annual : '7,420',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '7.380',
    interest : 'yearly',
    redem : '74.20',
  },
  {
    // Particulars: "PAT",
    ISINnO: "INE018A08BG4",
    bond: "7.335% NCD Series II 09-Sep-2024",
    allotment: '08-jun-23',
    maturity: '09-sep-24',
    principal: '1,000',
    face: '10,00,000',
    units: '1,00,000',
    annual : '1,848',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '7.335',
    interest : 'yearly',
    redem : '18.49',
  },
  {
    // Particulars: "PAT",
    ISINnO: "INE018A08BH2",
    bond: "7.33% NCD Series III 09-Dec-2024",
    allotment: '08-jun-23',
    maturity: '09-Dec-24',
    principal: '1,000',
    face: '10,00,000',
    units: '1,50,000',
    annual : '3,675',
    amount : '1,44,00,00,000',
    payment : '23-Apr-24',
    record : '8-Apr-24',
    coupon : '7.330',
    interest : 'yearly',
    redem : '55.13',
  },
];

const NCDTracker = () => {
  const [allActivity, setAllActivity] = useState(data1);
  const [projectUpdateData, setprojectUpdateData] = useState(data1);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showAddNewDataView, setShowAddNewData] = useState(false);
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(allActivity);
    XLSX.utils.book_append_sheet(wb, ws1, "NCD_Tracker");
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
    XLSX.writeFile(wb, `NCD_Tracker${filename}.xlsx`);
    
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
    <div>
      <h3>NCD Tracker</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
          style={{
            paddingBottom:'10px',
              borderRadius: "0.3px",
              display: "flex",
              // flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
          }}
        >
          {/* <div className="row g-2">
            <div className="col-md"> */}
              {/* <div className="form-floating" style={{ width: "600px" }}>
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
              </div> */}
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
              <div style={{ marginTop: "-10px", marginRight: "10px" }}>
            <button
                onClick={exportToExcel}
                style={{ backgroundColor: "white", borderWidth: "0" ,marginRight:'15px'}}
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
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
        <div
          className="ActionTakenDashboard tableFreezeOption"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr className="tableFreezeOptionSecondHeader">
                <th scope="col">ISIN no</th>
                <th scope="col">Bond discription</th>
                <th scope="col">Allotment/Issue Date</th>
                <th scope="col">Maturity Date</th>
                <th scope="col">Principal Amount</th>
                <th scope="col">Fave Value per NCD</th>
                <th scope="col">NCD units</th>
                <th scope="col">Annual interest per unit</th>
                <th scope="col">Annual Amount</th>
                <th scope="col">Next interest payment date</th>
                <th scope="col">Record Date</th>
                <th scope="col">Coupon Rate</th>
                <th scope="col">Interest Type</th>
                <th scope="col">Approx. Interest + Redemption(Cr)</th>
              </tr>
            </thead>
            <tbody>
              {allActivity.map((val, index) => {
                // const info =  findGrowth(val.FYcurrent,val.FYpre);
                return (
                  <tr key={index}>
                    {/* <th scope="row">{val.Particulars}</th> */}
                    <th>{val.ISINnO}</th>
                    <td>{val.bond}</td>
                    <td>{val.allotment}</td>
                    <td>{val.maturity}</td>
                    <td>{val.principal}</td>
                    <td>{val.face}</td>
                    <td>{val.units}</td>
                    <td>{val.annual}</td>
                    <td>{val.amount}</td>
                    <td>{val.payment}</td>
                    <td>{val.record}</td>
                    <td>{val.coupon}</td>
                    <td>{val.interest}</td>
                    <td>{val.redem}</td>
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

export default NCDTracker;
