
import { useEffect, useRef, useState } from "react";

interface Props {
  closeEditComponent: () => void;
  Project : any;
  updateUser: (ProjectUpdate: any) => void;
}

export const EditProjectUpdate: React.FC<Props> = ({
  closeEditComponent,
  Project,
  updateUser
}) => {
  const [EditProjectUpdate, setEditProjectUpdate] = useState(Project);
  const Project_detailsInput = useRef<HTMLInputElement>(null);
  const Original_Contract_ValueInput = useRef<HTMLInputElement>(null);
  const Start_DateInput = useRef<HTMLInputElement>(null);
  const Completion_DateInput = useRef<HTMLInputElement>(null);
  const Project_Completion_preInput = useRef<HTMLInputElement>(null);
  const StatusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = () => {
    if (Project_detailsInput.current) Project_detailsInput.current.value = Project.Project_details;
    if (Original_Contract_ValueInput.current) Original_Contract_ValueInput.current.value = Project.Original_Contract_Value;
    if (Start_DateInput.current) Start_DateInput.current.value = Project.Start_Date;
    if (Completion_DateInput.current) Completion_DateInput.current.value = Project.Completion_Date;
    if (Project_Completion_preInput.current) Project_Completion_preInput.current.value = Project.Project_Completion_pre;
    if (StatusInput.current) StatusInput.current.value = Project.Status;
  };

  const handleUpdateUser = () => {
    const ProjectUpdate = {
      ...EditProjectUpdate,
      Project_details: Project_detailsInput.current?.value || '',
      Original_Contract_Value: Original_Contract_ValueInput.current?.value || '',
      Start_Date: Start_DateInput.current?.value || '',
      Completion_Date: Completion_DateInput.current?.value || '',
      Project_Completion_pre: Project_Completion_preInput.current?.value || '', // Convert string to boolean
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
              <p style={{ fontSize: "20px" }}> Project Update</p>
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
                    placeholder="Project_details"
                    ref={Project_detailsInput}
                  />
                  <label htmlFor="floatingInput1">Project_details</label>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="Original_Contract_Value"
                    ref={Original_Contract_ValueInput}
                  />
                  <label htmlFor="floatingPassword3">Original_Contract_Value</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="Start_Date"
                    ref={Start_DateInput}
                  />
                  <label htmlFor="floatingPassword3">Start_Date</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Completion_Date"
                    ref={Completion_DateInput}
                  />
                  <label htmlFor="floatingPassword4">Completion_Date</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword5"
                    placeholder="Project_Completion_pre"
                    ref={Project_Completion_preInput}
                  />
                  <label htmlFor="floatingPassword5">Project_Completion_pre</label>
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