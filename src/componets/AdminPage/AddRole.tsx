
import { useRef, useState } from "react";

interface props {
  closeAddComponent: () => void;
}

export const AddRole: React.FC<props> = ({
  closeAddComponent,
}) => {
  const roleInput= useRef<any>('');
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
              
              <i className="fa-solid fa-user-shield" style={{ fontSize: "30px" }}></i>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "20px" }}> Create New Role </p>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
          ></div>
          <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-l12">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Enter Customer Name"
                    ref={roleInput}
                  />
                  <label htmlFor="floatingInput1">Role</label>
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
                <button style={{ width: "100%" }}>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
