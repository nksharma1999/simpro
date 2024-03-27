
import { useEffect, useRef, useState } from "react";

interface Props {
  closeEditComponent: () => void;
  Business : any;
  updateUser: (BusinessProspects: any) => void;
}

export const EditBusinessProspects: React.FC<Props> = ({
  closeEditComponent,
  Business,
  updateUser
}) => {
  const [EditProjectUpdate, setEditProjectUpdate] = useState(Business);
  const ProjectInput = useRef<HTMLInputElement>(null);
  const ValueInput = useRef<HTMLInputElement>(null);
  const Bid_Submission_QtrInput = useRef<HTMLInputElement>(null);
  const Order_Award_QtrInput = useRef<HTMLInputElement>(null);
  const Winning_ProbabilityInput = useRef<HTMLInputElement>(null);
  const StatusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = () => {
    if (ProjectInput.current) ProjectInput.current.value = Business.Project;
    if (ValueInput.current) ValueInput.current.value = Business.Value;
    if (Bid_Submission_QtrInput.current) Bid_Submission_QtrInput.current.value = Business.Bid_Submission_Qtr;
    if (Order_Award_QtrInput.current) Order_Award_QtrInput.current.value = Business.Order_Award_Qtr;
    if (Winning_ProbabilityInput.current) Winning_ProbabilityInput.current.value = Business.Winning_Probability;
    if (StatusInput.current) StatusInput.current.value = Business.Status;
  };

  const handleUpdateUser = () => {
    const BusinessProspects = {
      ...EditBusinessProspects,
      Project: ProjectInput.current?.value || '',
      Value: ValueInput.current?.value || '',
      Bid_Submission_Qtr: Bid_Submission_QtrInput.current?.value || '',
      Completion_Date: Order_Award_QtrInput.current?.value || '',
      Project_Completion_pre: Winning_ProbabilityInput.current?.value || '', // Convert string to boolean
      Status: StatusInput.current?.value || ''
    };

    // updateUser(updatedUserInfo);
  };

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
              
              <i className="fa-solid fa-user-pen" style={{ fontSize: "30px" }}></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Business Prospects</p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
            {/* <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="FYpre"
                    ref={FYpreInput}
                    disabled
                  />
                  <label htmlFor="floatingPassword2">FYpre</label>
                </div>
              </div> */}
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Project"
                    ref={ProjectInput}
                  />
                  <label htmlFor="floatingInput1">Project</label>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Value"
                    ref={ValueInput}
                  />
                  <label htmlFor="floatingPassword3">Value</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="Bid_Submission_Qtr"
                    ref={Bid_Submission_QtrInput}
                  />
                  <label htmlFor="floatingPassword3">Bid_Submission_Qtr</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Order_Award_Qtr"
                    ref={Order_Award_QtrInput}
                  />
                  <label htmlFor="floatingPassword4">Order_Award_Qtr</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword5"
                    placeholder="Winning_Probability"
                    ref={Winning_ProbabilityInput}
                  />
                  <label htmlFor="floatingPassword5">Winning_Probability</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword6"
                    placeholder="Status"
                    ref={StatusInput}
                  />
                  <label htmlFor="floatingPassword7">Status</label>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-6 col-md-6 col-12">
                <button
                  style={{ width: "100%", backgroundColor: "red" }}
                  onClick={closeEditComponent}
                >
                  Cancel
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <button style={{ width: "100%",backgroundColor:'#0A6862' }} onClick={handleUpdateUser}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};