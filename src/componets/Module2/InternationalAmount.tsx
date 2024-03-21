import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";

const InternationalAmount = () => {
  const [sData, setSData] = useState<any>([]);
  const [isShowAddSanction, setShowAddSanction] = useState(false);
  const amountInput = useRef<any>();
  const externalInput = useRef<any>();
  const icbInput = useRef<any>();
  const cashInput = useRef<any>();
  const equityInput = useRef<any>();
  const actualInput = useRef<any>();
  const estimateInput = useRef<any>();
  const MarInput = useRef<any>();
  const Q1juneInput = useRef<any>();
  const Q2septInput = useRef<any>();
  const mar23Input = useRef<any>();
  const june23Input = useRef<any>();
  // const sept23Input = useRef<any>();

  const handleSanctionSaveBtn = () => {
    const data: any = {
      amount: amountInput.current.value,
      external: externalInput.current.value,
      icb: icbInput.current.value,
      cash: cashInput.current.value,
      equity: equityInput.current.value,
      actual: actualInput.current.value,
      estimate: estimateInput.current.value,
      mar: MarInput.current.value,
      Q1june: Q1juneInput.current.value,
      Q2sept: Q2septInput.current.value,
      mar23: mar23Input.current.value,
      june23: june23Input.current.value,
      // sept23: sept23Input.current.value,
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
    const filename = `International_Amount_${formattedDate}.xlsx`;
    XLSX.writeFile(wb, filename);
  };

  return (<>
  <h3>International Amount</h3>
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
        <div
          className=""
          style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
        >
          <table className="table table-bordered">
            <thead
              style={{
                color: "",
                backgroundColor: "#f6f0f7",
              }}
            >
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Amount in Mn USD</th>
                <th colSpan={3} scope="colgroup">
                  External Debt as at
                </th>
                <th colSpan={3} scope="colgroup">
                  ICB from L&T as at
                </th>
                <th colSpan={3} scope="colgroup">
                  Cash/Investment as at
                </th>
                <th colSpan={2} scope="colgroup">
                  Equity from L&T as at
                </th>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <th scope="col">Business Entity</th>
                <th scope="col">Mar 23</th>
                <th scope="col">Q1 June-23(Actual)</th>
                <th scope="col">Q2 Sep-23(Estimate)</th>
                <th scope="col">Mar 23</th>
                <th scope="col">Q1 June-23(Actual)</th>
                <th scope="col">Q2 Sep-23(Estimate)</th>
                <th scope="col">Mar 23</th>
                <th scope="col">Q1 June-23(Actual)</th>
                <th scope="col">Q2 Sep-23(Estimate)</th>
                <th scope="col">Q1 June-23(Actual)</th>
                <th scope="col">FY-24 (budgeted)</th>
              </tr>
            </thead>
            <tbody>
              {isShowAddSanction ? (
                <tr>
                  <td>
                    <input
                      ref={amountInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>

                  <td>
                    <input
                      ref={externalInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={icbInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={cashInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={equityInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={actualInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={estimateInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={MarInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={Q1juneInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={Q2septInput}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={mar23Input}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <input
                      ref={june23Input}
                      type="text"
                      className="form-control"
                      style={{ minWidth: "100px" }}
                    />
                  </td>
                  {/* <td>
                        <input
                          ref={sept23Input}
                          type="text"
                          className="form-control"
                          style={{ minWidth: "100px" }}
                        />
                        </td> */}
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
                    <td>{val.amount}</td>
                    <td>{val.external}</td>
                    <td>{val.icb}</td>
                    <td>{val.cash}</td>
                    <td>{val.equity}</td>
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

export default InternationalAmount;
