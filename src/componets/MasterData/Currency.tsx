import { useRef, useState } from "react";

interface CurrencyMetaData {
  currency: string;
  id: number;
}
const data: CurrencyMetaData[] = [
  { currency: "Rs", id: 1 },
  { currency: "USD", id: 2 },
  { currency: "EUR", id: 3 },
  // Add more currencies as needed
];
const Currency = () => {
  const [currencyList, setCurrencyList] = useState<CurrencyMetaData[]>(data);
  const [showAddNew, setShowAddNew] = useState<boolean>(false);
  const currencyInput = useRef<HTMLInputElement>(null);
  const handleShowBtn = (action: boolean) => {
    setShowAddNew(action);
  };
  const addNewCurrency = () => {
    const currencyInputvalue = currencyInput.current?.value;
    if (currencyInputvalue) {
      const le = currencyList.length;
      setCurrencyList((prev) => [
        ...prev,
        { currency: currencyInputvalue, id: le+1 },
      ]);
      handleShowBtn(false);
    }
  };
  return (
    <>
      <h3>Currency</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
          style={{
            paddingBottom: "0px",
            borderRadius: "0.3px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}> Currency List</p>
          <div style={{ marginRight: "10px", marginTop: "0px" }}>
            <button
              onClick={() => handleShowBtn(true)}
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
        </div>
        <div style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}></div>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered" style={{ width: "100%" }}>
            <thead className="table-format tableHeader">
              <tr>
                <th scope="col" style={{ width: "20px" }}>
                  ID
                </th>
                <th scope="col">Currency </th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currencyList.map((val, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{val.id}</th>
                    <td style={{ textAlign: "center" }}>{val.currency}</td>

                    <td
                      style={{
                        textAlign: "center",

                        cursor: "pointer",
                      }}
                    >
                      <button
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
                          color: "gray",
                        }}
                      >
                        <i className="fa-solid fa-trash buttonColorPrimary"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showAddNew && (
        <div className="popup">
          <div
            className="popup-inner"
            style={{ overflowY: "auto", maxHeight: "100vh" }}
          >
            <div
              className="card"
              style={{ padding: "10px", maxWidth: "700px" }}
            >
              <div
                //   className="card-body"
                style={{
                  // padding: "10px",
                  borderRadius: "0.3px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  // alignItems: "center",
                }}
              >
                <div style={{ marginLeft: "10px" }}>
                  
                  <i className="fa-solid fa-wallet" style={{ fontSize: "30px" }}></i>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ fontSize: "20px" }}> Add Currency </p>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput1"
                  placeholder="Enter Address"
                  ref={currencyInput}
                />
                <label htmlFor="floatingInput1">Enter Currency</label>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-6 col-md-6 col-12">
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "red",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => handleShowBtn(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <button
                    onClick={addNewCurrency}
                    style={{ width: "100%", backgroundColor: "#0A6862" }}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Currency;
