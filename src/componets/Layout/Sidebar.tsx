import { url } from "inspector";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div
      className="sideBarBox"
      style={{
        width: "280px",
        height: "100vh",
        padding: 10,
        backgroundColor: "rgb(10 104 98)",
        // backgroundImage:
        //   "url(https://reduction-admin.github.io/react-reduction/static/media/sidebar-4.80d4a4e5.jpg)",
        backgroundBlendMode: "overlay",
        overflow: "hidden",
        overflowY: "auto",
      }}
    >
      <div>
        <img
          src="http://simpro.co.in/wp-content/uploads/2022/06/simpro-logo1-1.png"
          alt=""
        />
      </div>
      <div className="sidebar">
        {/* <NavLink className="nav-link sidebarNavLink" to={"/"}>
          <i className="fa-solid fa-house sidebarIcon"></i>DASHBOARD
        </NavLink> */}
        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="adminHeader">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#adminHeader-Collapse"
                aria-expanded="true"
                aria-controls="adminHeader-Collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-user-tie"
                  style={{ marginRight: "10px" }}
                ></i>
                Admin
              </button>
            </h2>
            <div
              id="adminHeader-Collapse"
              className="accordion-collapse collapse"
              aria-labelledby="adminHeader"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
                <NavLink className="nav-link sidebarNavLink" to={"/user"}>
                  <i className="fa-solid fa-user-plus sidebarIcon"></i>
                  User
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"/role"}>
                  <i className="fa-solid fa-user-shield sidebarIcon"></i>
                  Role
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"/role-mapping"}>
                  <i className="fa-solid fa-user-shield sidebarIcon"></i>
                  Role Mapping
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"/mail-config"}>
                  <i className="fa-solid fa-user-shield sidebarIcon"></i>
                  Mail Config
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="masterDataHeader">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#masterData-collapse"
                aria-expanded="true"
                aria-controls="masterData-collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
               
                <i className="fa-solid fa-table" style={{ marginRight: "10px" }}></i>
                Master Data
              </button>
            </h2>
            <div
              id="masterData-collapse"
              className="accordion-collapse collapse"
              aria-labelledby="masterDataHeader"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/sa-company"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
                S&A Company
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"/bank"}>
                <i className="fa-solid fa-building-columns sidebarIcon"></i>
                  Bank
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"/financial-year"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
                Financial Year
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="pmsHeading">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#pms"
                aria-expanded="true"
                aria-controls="pms"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-chart-simple"
                  style={{ marginRight: "10px" }}
                ></i>{" "}
                PMS
              </button>
            </h2>
            <div
              id="pms"
              className="accordion-collapse collapse"
              aria-labelledby="pmsHeading"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
                <div
                  className="accordion-item"
                  style={{ backgroundColor: "transparent", border: "0px" }}
                >
                  <h2 className="accordion-header" id="pms-businessHeader">
                    <button
                      className="accordion-button accordionBtnStyle collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#pmsCollapse"
                      aria-expanded="true"
                      aria-controls="pmsCollapse"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        paddingLeft: "10px",
                      }}
                    >
                      <i
                        className="fa-solid fa-briefcase sidebarIcon"
                        style={{ marginRight: "10px" }}
                      ></i>
                      Business
                    </button>
                  </h2>
                  <div
                    id="pmsCollapse"
                    className="accordion-collapse collapse"
                    aria-labelledby="pms-businessHeader"
                    // data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" style={{ padding: "0px" }}>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/page2"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Action Taken Report
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/quarterly-performance"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Quarterly Performance
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/business-prospects"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Business Prospects
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/project-update"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Project Update
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  style={{ backgroundColor: "transparent", border: "0px" }}
                >
                  <h2 className="accordion-header" id="pms-FinancialHeader">
                    <button
                      className="accordion-button accordionBtnStyle collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#FinancialCollapse"
                      aria-expanded="true"
                      aria-controls="FinancialCollapse"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        paddingLeft: "10px",
                      }}
                    >
                      <i
                        className="fa-solid fa-square-poll-vertical"
                        style={{ marginRight: "10px" }}
                      ></i>
                      Financial
                    </button>
                  </h2>
                  <div
                    id="FinancialCollapse"
                    className="accordion-collapse collapse"
                    aria-labelledby="pms-FinancialHeader"
                    // data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" style={{ padding: "0px" }}>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/summary-forecast"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        P&L summary&forecast
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/working-capital"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Working Capital
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/balance-sheet"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Balance Sheet
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"/cashFlow-statement"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Cash Flow Statement
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "transparent" }}
        >
          <div
            className="accordion-item"
            style={{ backgroundColor: "transparent", border: "0px" }}
          >
            <h2 className="accordion-header" id="facilityMonitoring">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#facility-monitoringCollapse"
                aria-expanded="true"
                aria-controls="facility-monitoringCollapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-chart-simple"
                  style={{ marginRight: "10px" }}
                ></i>{" "}
                Facility Monitoring
              </button>
            </h2>
            <div
              id="facility-monitoringCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="facilityMonitoring"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/banking-facilities"}>
                <i className="fa-solid fa-angles-right sidebarIcon"></i>
                Banking Facilities
                </NavLink>
              </div>
            </div>
            <div
              id="facility-monitoringCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="facilityMonitoring"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/banking-Gurantee"}>
                <i className="fa-solid fa-angles-right sidebarIcon"></i>
                Banking Gurantee
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/corporate-Guarantee"}>
                <i className="fa-solid fa-angles-right sidebarIcon"></i>
                Corporate Guarantee
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/international-Amount"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
                International Amount
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/comfort-Gurantee"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
               Comfort Gurantee
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/ICB-Movement"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
               ICB-ICD Movement
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
