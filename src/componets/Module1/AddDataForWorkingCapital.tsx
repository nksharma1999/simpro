import { useRef, useState } from "react";

interface props {
  closeAddComponent: () => void;
}

export const AddDataForWorkingCapital: React.FC<props> = ({
  closeAddComponent,
}) => {
  const [selectedFY, setselectedFY] = useState("2023");
  const [selectedSubmissionStatus, setSelectedSubmissionStatus] =
    useState("Submitted");
  const projectInput = useRef<any>("");
  const customeNameInput = useRef<any>("");
  const orderAwardQtrInput = useRef<any>("");
  const bidSubmissionQtrInput = useRef<any>("");
  const valuetInput = useRef<any>("");
  const winningProbabilityInput = useRef<any>("");

  const handleStatusSelection = (e: any) => {
    // console.log(e.target.value);
    setselectedFY(e.target.value);
  };
  const handleSubmissionStatus = (e: any) => {
    setSelectedSubmissionStatus(e.target.value);
  };
  return (
    <div className="popup">
      <div
        className="popup-inner"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
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
              <p style={{ fontSize: "20px" }}> Add New Data </p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <div style={{ marginLeft: "10px" }}>
                <p style={{ fontSize: "20px", color:'teal' }}> A (Actual) </p>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <p style={{ fontSize: "20px", color:'blue'}}> B (Budget) </p>
              </div>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
          <div className="row " style={{marginBottom:'10px'}}>
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleStatusSelection}
                    value={selectedFY}
                  >
                    <option disabled>---Select---</option>
                    <option value="2023">FY2023</option>
                    <option value="2024">FY2024</option>
                    <option value="2025">FY2025</option>
                    <option value="2026">FY2026</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Status</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Customer Name"
                    // ref={customeNameInput}
                  />
                  <label htmlFor="floatingInput1">Q1 FY{selectedFY} (A)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Project"
                    // ref={projectInput}
                  />
                  <label htmlFor="floatingPassword2">Q1 FY{selectedFY} (B)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="Value"
                    // ref={valuetInput}
                  />
                  <label htmlFor="floatingPassword3">Q2 FY{selectedFY} (A)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Bid Submission Qtr."
                    ref={bidSubmissionQtrInput}
                  />
                  <label htmlFor="floatingPassword4">Q2 FY{selectedFY} (B)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword5"
                    placeholder="Order Award Qtr."
                    ref={orderAwardQtrInput}
                  />
                  <label htmlFor="floatingPassword5">Q3 FY{selectedFY} (A)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword6"
                    placeholder="Winning Probability"
                    ref={winningProbabilityInput}
                  />
                  <label htmlFor="floatingPassword6">Q3 FY{selectedFY} (B)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword7"
                    placeholder="Winning Probability"
                    ref={winningProbabilityInput}
                  />
                  <label htmlFor="floatingPassword7">Q4 FY{selectedFY} (A)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword8"
                    placeholder="Winning Probability"
                    ref={winningProbabilityInput}
                  />
                  <label htmlFor="floatingPassword8">Q4 FY{selectedFY} (B)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword9"
                    placeholder="Winning Probability"
                    ref={winningProbabilityInput}
                  />
                  <label htmlFor="floatingPassword9"> FY{selectedFY} (A)</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword10"
                    placeholder="Winning Probability"
                    ref={winningProbabilityInput}
                  />
                  <label htmlFor="floatingPassword10"> FY{selectedFY} (B)</label>
                </div>
              </div>
            </div>
            
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={closeAddComponent}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button style={{ width: "100%",backgroundColor:'#0A6862' }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
