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
          style={{ mixBlendMode: "color-burn" }}
          src="http://simpro.co.in/wp-content/uploads/2022/06/simpro-logo1-1.png"
          alt=""
        />
      </div>
      <div className="sidebar">
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
                <NavLink className="nav-link sidebarNavLink" to={"admin/user"}>
                  <i className="fa-solid fa-user-plus sidebarIcon"></i>
                  User
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"admin/role"}>
                  <i className="fa-solid fa-user-shield sidebarIcon"></i>
                  Role
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"admin/role-mapping"}
                >
                  <i className="fa-solid fa-user-shield sidebarIcon"></i>
                  Role Mapping
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"admin/mail-config"}
                >
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
                <i
                  className="fa-solid fa-table"
                  style={{ marginRight: "10px" }}
                ></i>
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
                <NavLink className="nav-link sidebarNavLink" to={"master-data/sa-company"}>
                  <i className="fa-regular fa-calendar-days sidebarIcon"></i>
                  S&A Company
                </NavLink>
                <NavLink className="nav-link sidebarNavLink" to={"master-data/bank"}>
                  <i className="fa-solid fa-building-columns sidebarIcon"></i>
                  Bank
                </NavLink>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"master-data/financial-year"}
                >
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
                        to={"pms/business/action-taken"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Action Taken Report
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"pms/business/quarterly-performance"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Quarterly Performance
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"pms/business/business-prospects"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Business Prospects
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"pms/business/project-update"}
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
                        to={"pms/financial/summary-forecast"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        P&L summary&forecast
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"pms/financial/working-capital"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Working Capital
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"pms/financial/balance-sheet"}
                      >
                        <i className="fa-solid fa-angles-right sidebarIcon"></i>
                        Balance Sheet
                      </NavLink>
                      <NavLink
                        className="nav-link sidebarNavLink"
                        to={"pms/financial/cashFlow-statement"}
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
                <i className="fa-solid fa-table-columns" 
                  style={{ marginRight: "10px" }}></i>
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
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"facility-monitoring/banking-facilities"}
                >
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
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"facility-monitoring/banking-Gurantee"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  Banking Guarantee
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"facility-monitoring/corporate-Guarantee"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  Corporate Guarantee
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"facility-monitoring/international-Amount"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  International Amount
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"facility-monitoring/comfort-Gurantee"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  Comfort Gurantee
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"facility-monitoring/ICB-Movement"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  ICB-ICD Movement
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/NCD-FY22"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
               NCD 
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/Commercial-Paper"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
               Commercial Paper 
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/NCD_Dashboard"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
               NCD Dashboard
                </NavLink>
              </div>
              <div className="accordion-body" style={{ padding: "0px" }}>
              <NavLink className="nav-link sidebarNavLink" to={"/Primary-Investor"}>
                <i className="fa-regular fa-calendar-days sidebarIcon"></i>
               Primary Investor
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
            <h2
              className="accordion-header"
              id="longTermBorrowing"
              title="Long Term Borrowing"
            >
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#longTermBorrowing-Collapse"
                aria-expanded="true"
                aria-controls="longTermBorrowing-Collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i
                  className="fa-solid fa-hand-holding-dollar"
                  style={{ marginRight: "10px" }}
                ></i>
                Borrowing
              </button>
            </h2>
            <div
              id="longTermBorrowing-Collapse"
              className="accordion-collapse collapse"
              aria-labelledby="longTermBorrowing"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div
                    className="accordion-item"
                    style={{ backgroundColor: "transparent", border: "0px" }}
                  >
                    <h2 className="accordion-header" id="Report-m4">
                      <button
                        className="accordion-button accordionBtnStyle collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#Report-m4-Collapse"
                        aria-expanded="true"
                        aria-controls="Report-m4-Collapse"
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
                        Report
                      </button>
                    </h2>
                    <div
                      id="Report-m4-Collapse"
                      className="accordion-collapse collapse"
                      aria-labelledby="Report-m4"
                      // data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ padding: "0px" }}
                      >
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/long-term-reports"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Long-Term Reports
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/fund-raising"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Fund Raising
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/maturities"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Maturities
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/loans-taken"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Loans Taken
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/interest-payment"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Interest Payment
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/loan-given"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Loan Given
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/interest-received"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Interest Received
                        </NavLink>
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/equity"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Equity
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
                    <h2 className="accordion-header" id="ncd-m4">
                      <button
                        className="accordion-button accordionBtnStyle collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ncd-m4-Collapse"
                        aria-expanded="true"
                        aria-controls="ncd-m4-Collapse"
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
                        NCD
                      </button>
                    </h2>
                    <div
                      id="ncd-m4-Collapse"
                      className="accordion-collapse collapse"
                      aria-labelledby="ncd-m4"
                      // data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ padding: "0px" }}
                      >
                        <NavLink
                          className="nav-link sidebarNavLink"
                          to={"borrowing/ncd-simple"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          NCD Simple
                        </NavLink>
                      </div>
                      <div className="accordion-body" style={{ padding: "0px" }}>
                      <NavLink className="nav-link sidebarNavLink" to={"/NCD-Tracker"}>
                        <i className="fa-regular fa-calendar-days sidebarIcon"></i>
                       NCD Tracker
                        </NavLink>
                      </div>
                      <div className="accordion-body" style={{ padding: "0px" }}>
                      <NavLink className="nav-link sidebarNavLink" to={"/NCD-Dashboard"}>
                        <i className="fa-regular fa-calendar-days sidebarIcon"></i>
                       NCD Dashboard
                        </NavLink>
                      </div>
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
            <h2 className="accordion-header" id="dividend-income-m4">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dividend-income-m4-Collapse"
                aria-expanded="true"
                aria-controls="dividend-income-m4-Collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i className="fa-solid fa-sack-dollar" 
                  style={{ marginRight: "10px" }}></i>
                Dividend Income
              </button>
            </h2>
            <div
              id="dividend-income-m4-Collapse"
              className="accordion-collapse collapse"
              aria-labelledby="dividend-income-m4"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
                {/* <NavLink
                          className="nav-link sidebarNavLink"
                          to={"dividend-income/dashboard"}
                        >
                          <i className="fa-solid fa-angles-right sidebarIcon"></i>
                          Dashboard
                        </NavLink> */}
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"dividend-income/main-dashboard"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  Main Dashboard
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
            <h2 className="accordion-header" id="strategic-m7">
              <button
                className="accordion-button accordionBtnStyle collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#strategic-m7-Collapse"
                aria-expanded="true"
                aria-controls="strategic-m7-Collapse"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  paddingLeft: "10px",
                }}
              >
                <i className="fa-solid fa-bullseye" 
                  style={{ marginRight: "10px" }}></i>
                Strategic Transaction
              </button>
            </h2>
            <div
              id="strategic-m7-Collapse"
              className="accordion-collapse collapse"
              aria-labelledby="strategic-m7"
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ padding: "0px" }}>
                
                <NavLink
                  className="nav-link sidebarNavLink"
                  to={"strategic-transaction/dashboard"}
                >
                  <i className="fa-solid fa-angles-right sidebarIcon"></i>
                  Dashboard
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
