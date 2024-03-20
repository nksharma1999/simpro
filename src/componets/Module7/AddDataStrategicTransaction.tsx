import React from "react";

interface props {
  handleShowBtn: (event: boolean) => void;
  // type: string;
}
export const AddDataStrategicTransaction: React.FC<props> = ({
  handleShowBtn,
}) => {
  return (
    <div className="popup">
      <div
        className="popup-inner"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <div className="card" style={{ padding: "10px", maxWidth: "700px" }}>
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
              <i
                className="fa-solid fa-briefcase"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Strategic Transaction Info </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="Simpro">Simpro</option>
                    <option value="L&T">L&T</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Company Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    //   onChange={handleTypeSelection}
                    //   value={selectedType}
                  >
                    <option value="mergers">Mergers</option>
                    <option value="acquisitions">Acquisitions</option>
                    <option value="ofs">OFS-Offer For Sale</option>
                    <option value="Buybackofshares">Buyback Of Shares</option>
                    <option value="saleOfBusiness">Sale Of Business</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Type</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="equityShare">Equity Share</option>
                    <option value="preferenceShare">Preference Share</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Share Type</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={noOfSharesInput}
                  />
                  <label htmlFor="floatingPassword2">No. Of Shares</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={ratioOfSharesInput}
                  />
                  <label htmlFor="floatingPassword2">Ratio Of Shares</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={sharePriceInput}
                  />
                  <label htmlFor="floatingPassword2">Share Price</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={dealValueInput}
                  />
                  <label htmlFor="floatingPassword2">Deal Value</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="Simpro">Simpro</option>
                    <option value="L&T">L&T</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">ErstWhile Entity Names</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    // onChange={handleTypeSelection}
                    // value={selectedType}
                  >
                    <option value="Simpro">Simpro</option>
                    <option value="L&T">L&T</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">New Entity Name</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Investment Amount"
                    // ref={remarkInput}
                  />
                  <label htmlFor="floatingPassword2">Remark</label>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={() => handleShowBtn(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button style={{ width: "100%", backgroundColor: "#0A6862" }}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
