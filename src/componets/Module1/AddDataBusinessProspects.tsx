import { useRef, useState } from "react";

interface props {
  closeAddComponent: () => void;
}

export const AddDataBusinessProspects: React.FC<props> = ({
  closeAddComponent,
}) => {
  const [selectedStatus, setSelectedStatus] = useState('Open');
  const [selectedSubmissionStatus, setSelectedSubmissionStatus] = useState('Submitted');
  const projectInput = useRef<any>("");
  const customeNameInput = useRef<any>("");
  const orderAwardQtrInput = useRef<any>("");
  const bidSubmissionQtrInput = useRef<any>("");
  const valuetInput = useRef<any>("");
  const winningProbabilityInput = useRef<any>("");

  const handleStatusSelection = (e: any) => {
    // console.log(e.target.value);
    setSelectedStatus(e.target.value);
  };
  const handleSubmissionStatus =(e: any) =>{
    setSelectedSubmissionStatus(e.target.value)
  }
  return (
    <div className="popup">
      <div className="popup-inner" style={{overflowY:'auto', maxHeight:'100vh'}}>
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
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Customer Name"
                    ref={customeNameInput}
                  />
                  <label htmlFor="floatingInput1">Customer</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Project"
                    ref={projectInput}
                  />
                  <label htmlFor="floatingPassword2">Project</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="Value"
                    ref={valuetInput}
                  />
                  <label htmlFor="floatingPassword3">Value</label>
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
                  <label htmlFor="floatingPassword4">Bid Submission Qtr</label>
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
                  <label htmlFor="floatingPassword5">Order Award Qtr.</label>
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
                  <label htmlFor="floatingPassword7">Winning Probability</label>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                    onChange={handleSubmissionStatus}
                    value={selectedSubmissionStatus}
                  >
                    <option disabled>---Select---</option>
                    <option value="Submitted">Part A - Bids Submitted</option>
                    <option value="YetSubmitted">Part B - Bids yet to be Submitted</option>
                  </select>
                  <label htmlFor="floatingSelectGrid">Submission Status</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid2"
                    aria-label="Floating label select example"
                    onChange={handleStatusSelection}
                    value={selectedStatus}
                  >
                    <option disabled>---Select---</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <label htmlFor="floatingSelectGrid2">Status</label>
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
                <button style={{ width: "100%" }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
