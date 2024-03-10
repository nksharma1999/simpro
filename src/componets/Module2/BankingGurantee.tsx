import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";

const BankingGuarantee = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const nameInput = useRef<any>("");
  const projectInput = useRef<any>("");
  const contractValueInput = useRef<any>("");
  const banknameInput = useRef<any>("");
  const bennameInput = useRef<any>("");
  const bgremarksInput = useRef<any>("");
  const validityInput = useRef<any>("");
  const ammendmentInput = useRef<any>("");
  const bgvalInput = useRef<any>("");
  const typeINput = useRef<any>("");
  const startInput = useRef<any>("");
  const endInput = useRef<any>("");
  const bgnumInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      name: nameInput.current.value,
      project: projectInput.current.value,
      contractValue: contractValueInput.current.value,
      benname: bennameInput.current.value,
      bgnum: bgnumInput.current.value,
      bankname: banknameInput.current.value,
      remarks: bgremarksInput.current.value,
      validity: validityInput.current.value,
      ammedment: ammendmentInput.current.value,
      bgval: bgvalInput.current.value,
      type: typeINput.current.value,
      start: startInput.current.value,
      end: endInput.current.value,
    };
    setSData((prev: any) => [...prev, data]);
  };
  const handleSanctionInputFormView = (op: boolean) => {
    setShowAddSanction(op);
  };

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
    const filename = `Banking_Gurantee_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  
  return (
    <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
      <div>
        <div className="d-flex justify-content-end mb-2">
        <button
            onClick={exportToExcel}
            style={{
              backgroundColor: "white",
              borderWidth: "0",
              marginRight: "15px",
              marginLeft:'10px'
            }}
          >
            <i
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className="fa-solid fa-download fa-fade"
            ></i>
        </button>
        </div>
          <div className="ActionTakenDashboard" style={{ overflow: "auto",
                            marginTop: "10px",
                            maxHeight: "80vh",
                          }}>
                          
              <table className="table table-bordered">
                <thead
                  style={{
                    color: "#FC5C7D",
                    backgroundColor: "#f6f0f7",
                  }}
                >
                
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">Name of subsidary company</th>
                  <th scope="col">Project name</th>
                  <th scope="col">Contract Value (Cr) INR/FCY</th>
                  <th scope="col">As at</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">Beneficiary Name</th>
                  <th scope="col">B.G No.</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Validity From</th>
                  <th scope="col">Ammendment</th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    BG Validity
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Type of BG (PBG/APG/TBG/RBG)
                  </th>
                </tr>
                </thead>
                <tbody>
                  {isShowAddSanction ? (
                    <tr>
                      <td>
                        <input
                          ref={nameInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={projectInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={contractValueInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={startInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={endInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={bennameInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={bgnumInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={bgremarksInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={validityInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={ammendmentInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <input
                          ref={bgvalInput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>

                      <td>
                        <input
                          ref={typeINput}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <button
                            onClick={() => handleSanctionInputFormView(false)}
                            className="btn btn-primary"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
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
                      <td colSpan={13}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button
                            onClick={() => handleSanctionInputFormView(true)}
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
                        <td>{val.name}</td>
                        <td>{val.project}</td>
                        <td>{val.contractValue}</td>
                        <td>{val.start}</td>
                        <td>{val.end}</td>
                        <td>{val.benname}</td>
                        <td>{val.bgnum}</td>
                        <td>{val.remarks}</td>
                        <td>{val.validity}</td>
                        <td>{val.ammedment}</td>
                        <td>{val.bgval}</td>
                        <td>{val.type}</td>
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

export default BankingGuarantee;