
import { useEffect, useRef, useState } from "react";

interface Props {
  closeEditComponent: () => void;
  Summary : any;
  updateUser: (SummaryForecast: any) => void;
}

export const EditSummaryForecast: React.FC<Props> = ({
  closeEditComponent,
  Summary,
  updateUser
}) => {
  const [EditSummaryForecast, setEditSummaryForecast] = useState(Summary);
  const FYpreInput = useRef<HTMLInputElement>(null);
  const FYcurrentInput = useRef<HTMLInputElement>(null);
  const Q1FYCurrent_AInput = useRef<HTMLInputElement>(null);
  const Q2FYCurrent_AInput = useRef<HTMLInputElement>(null);
  const Q3FYCurrent_AInput = useRef<HTMLInputElement>(null);
  const Q4FYCurrent_AInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = () => {
    if (FYpreInput.current) FYpreInput.current.value = Summary.FYpre;
    if (FYcurrentInput.current) FYcurrentInput.current.value = Summary.FYcurrent;
    if (Q1FYCurrent_AInput.current) Q1FYCurrent_AInput.current.value = Summary.Q1FYCurrent_AInput;
    if (Q2FYCurrent_AInput.current) Q2FYCurrent_AInput.current.value = Summary.Q2FYCurrent_AInput;
    if (Q3FYCurrent_AInput.current) Q3FYCurrent_AInput.current.value = Summary.Q3FYCurrent_AInput;
    if (Q4FYCurrent_AInput.current) Q4FYCurrent_AInput.current.value = Summary.Q4FYCurrent_AInput;
  };

  const handleUpdateUser = () => {
    const SummaryForecast = {
      ...EditSummaryForecast,
      FYpre: FYpreInput.current?.value || '',
      FYcurrent: FYcurrentInput.current?.value || '',
      Q1FYCurrent_A: Q1FYCurrent_AInput.current?.value || '',
      Q2FYCurrent_A: Q2FYCurrent_AInput.current?.value || '',
      Q3FYCurrent_A: Q3FYCurrent_AInput.current?.value || '', // Convert string to boolean
      Q4FYCurrent_A: Q4FYCurrent_AInput.current?.value || ''
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
              <p style={{ fontSize: "20px" }}> P&L Summary Forecast </p>
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
                    ref={FYcurrentInput}
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
                    placeholder="Q1FYCurrent_A"
                    ref={Q1FYCurrent_AInput}
                  />
                  <label htmlFor="floatingPassword3">Q1FYCurrent_A</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword4"
                    placeholder="Q2FYCurrent_A"
                    ref={Q2FYCurrent_AInput}
                  />
                  <label htmlFor="floatingPassword4">Q2FYCurrent_A</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword5"
                    placeholder="Q3FYCurrent_A"
                    ref={Q3FYCurrent_AInput}
                  />
                  <label htmlFor="floatingPassword5">Q3FYCurrent_A</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword6"
                    placeholder="Q4FYCurrent_A"
                    ref={Q4FYCurrent_AInput}
                  />
                  <label htmlFor="floatingPassword7">Q4FYCurrent_A</label>
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