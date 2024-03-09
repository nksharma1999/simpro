export const MailConfig = () => {
  return (
    <div>
      <h3>Mail Config</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="Enter Customer Name"
                  // ref={roleInput}
                />
                <label htmlFor="floatingInput2">SMTP Host</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput3"
                  placeholder="Enter Customer Name"
                  // ref={roleInput}
                />
                <label htmlFor="floatingInput3">SMTP PORT No.</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput4"
                  placeholder="Enter Customer Name"
                  // ref={roleInput}
                />
                <label htmlFor="floatingInput4">Email ID</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput5"
                  placeholder="Enter Customer Name"
                  // ref={roleInput}
                />
                <label htmlFor="floatingInput5">User Name</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput5"
                  placeholder="Enter Customer Name"
                  // ref={roleInput}
                />
                <label htmlFor="floatingInput5">Password</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
                <div className="row">
                    <div className="col-6">
                        <p>SSL</p>
                    </div>
                    <div className="col-6">
                    <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  id="sslActive"
                />
                <label className="form-check-label" htmlFor="sslActive">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  id="sslInActive"
                />
                <label className="form-check-label" htmlFor="sslInActive">
                  In Active
                </label>
              </div>
                    </div>
                </div>
              
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>

          <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
