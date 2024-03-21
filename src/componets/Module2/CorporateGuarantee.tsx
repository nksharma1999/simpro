import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";

const CorporateGuarantee = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const nameInput = useRef<any>("");
  const startInput = useRef<any>("");
  const endInput = useRef<any>("");
  const maturityInput = useRef<any>("");

  const handleSanctionSaveBtn = () => {
    const data: any = {
      name: nameInput.current.value,
      maturity: maturityInput.current.value,
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
    const filename = `Corporate_Guarantee_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  return (<>
  <h3>Corporate Guarantee</h3>
    <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
      <div>
        <div className="d-flex justify-content-end mb-2">
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
                fontSize: "25px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className="fa-solid fa-download fa-fade buttonColorPrimary"
            ></i>
          </button>
        </div>
          <div className="" style={{ overflow: "auto",
                            marginTop: "10px",
                            maxHeight: "80vh",
                          }}>
                          
              <table className="table table-bordered">
                <thead
                  className="tableHeader"
                >
                
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">Name of Subsidary company</th>
                  <th scope="col">As at</th>
                  <th scope="col">As at</th>
                  <th scope="col">Maturity date of the borrowing</th>
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
                          ref={maturityInput}
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
                            style={{ marginRight: '5px' }} // Add margin to the right of the button
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <button
                            onClick={handleSanctionSaveBtn}
                            className="btn btn-primary"
                          >
                            <i className="fa-regular fa-floppy-disk fa-shake" style={{fontSize:'25px',color:''}}></i>
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
                        <td>{val.start}</td>
                        <td>{val.end}</td>
                        <td>{val.maturity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
          </div>

      </div>
    </div>
    </>
  );
};

export default CorporateGuarantee;
