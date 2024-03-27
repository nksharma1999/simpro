
import { useEffect, useRef, useState } from "react";

interface Props {
  closeEditComponent: () => void;
  Capital : any;
  updateUser: (WorkingCapital: any) => void;
}

export const EditWorkingCapital: React.FC<Props> = ({
  closeEditComponent,
  Capital,
  updateUser
}) => {
  const [EditWorkingCapital, setEditWorkingCapital] = useState(Capital);
  const FYpreInput = useRef<HTMLInputElement>(null);
  const FYcurrentdInput = useRef<HTMLInputElement>(null);
  const Q1FYCurrentInput = useRef<HTMLInputElement>(null);
  const Q2FYCurrentInput = useRef<HTMLInputElement>(null);
  const Q3FYCurrentInput = useRef<HTMLInputElement>(null);
  const Q4FYCurrentInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = () => {
    if (FYpreInput.current) FYpreInput.current.value = Capital.FYpre;
    if (FYcurrentdInput.current) FYcurrentdInput.current.value = Capital.FYcurrent;
    if (Q1FYCurrentInput.current) Q1FYCurrentInput.current.value = Capital.Q1FYCurrent;
    if (Q2FYCurrentInput.current) Q2FYCurrentInput.current.value = Capital.Q2FYCurrent;
    if (Q3FYCurrentInput.current) Q3FYCurrentInput.current.value = Capital.Q3FYCurrent;
    if (Q4FYCurrentInput.current) Q4FYCurrentInput.current.value = Capital.Q4FYCurrent;
  };

  const handleUpdateUser = () => {
    const WorkingCapital = {
      ...EditWorkingCapital,
      FYpre: FYpreInput.current?.value || '',
      FYcurrent: FYcurrentdInput.current?.value || '',
      Q1FYCurrent: Q1FYCurrentInput.current?.value || '',
      Q2FYCurrent: Q2FYCurrentInput.current?.value || '',
      Q3FYCurrent: Q3FYCurrentInput.current?.value || '', // Convert string to boolean
      Q4FYCurrent: Q4FYCurrentInput.current?.value || ''
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
              <p style={{ fontSize: "20px" }}> Working Capital </p>
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
                    placeholder="FYpre"
                    ref={FYpreInput}
                  />
                  <label htmlFor="floatingInput1">FYpre</label>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword2"
                    placeholder="FYcurrent"
                    ref={FYcurrentdInput}
                  />
                  <label htmlFor="floatingPassword3">FYcurrent</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword3"
                    placeholder="Q1FYCurrent"
                    ref={Q1FYCurrentInput}
                  />
                  <label htmlFor="floatingPassword3">Q1FYCurrent</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Q2FYCurrent"
                    ref={Q2FYCurrentInput}
                  />
                  <label htmlFor="floatingPassword4">Q2FYCurrent</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword5"
                    placeholder="Q3FYCurrent"
                    ref={Q3FYCurrentInput}
                  />
                  <label htmlFor="floatingPassword5">Q3FYCurrent</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword6"
                    placeholder="Q4FYCurrent"
                    ref={Q4FYCurrentInput}
                  />
                  <label htmlFor="floatingPassword7">Q4FYCurrent</label>
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