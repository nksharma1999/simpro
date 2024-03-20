import { useState } from "react";
import { AddDataStrategicTransaction } from "./AddDataStrategicTransaction";

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
          className="ActionTakenDashboard"
          style={{
            overflow: "auto",
            marginTop: "10px",
            maxHeight: "80vh",
          }}
        >
          <table className="table table-bordered">
            <thead className="tableHeader">
              <tr style={{ textAlign: "center" }}>
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
                  <tr key={index}>
                    <td>{val.companyName}</td>
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

export default StrategicTransactionDashbord