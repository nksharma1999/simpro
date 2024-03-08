                                                                                                                                import { url } from "inspector";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div
    className="sideBarBox"
      style={{ width: "280px",
        height: "100vh",
        padding: 10,
        backgroundColor: "rgb(52 207 200 / 50%)",
        backgroundImage:
          "url(https://reduction-admin.github.io/react-reduction/static/media/sidebar-4.80d4a4e5.jpg)",
          backgroundBlendMode:'overlay',
          overflow:'hidden',
          overflowY:'auto'
      }}
    >
      <div><img src="http://simpro.co.in/wp-content/uploads/2022/06/simpro-logo1-1.png" alt="" /></div>
      <div className="sidebar">
        <NavLink className="nav-link sidebarNavLink" to={"/"}><i className="fa-solid fa-house sidebarIcon"></i>DASHBOARD</NavLink>

        <NavLink className="nav-link sidebarNavLink" to={"/page2"}><i className="fa-solid fa-credit-card sidebarIcon" ></i>Action Taken Report</NavLink>
        <NavLink className="nav-link sidebarNavLink" to={"/quarterly-performance"}><i className="fa-solid fa-chart-line sidebarIcon"></i>Quarterly Performance</NavLink>
        <NavLink className="nav-link sidebarNavLink" to={"/business-prospects"}><i className="fa-solid fa-chart-line sidebarIcon"></i>Business Prospects</NavLink>
        <NavLink className="nav-link sidebarNavLink" to={"/project-update"}><i className="fa-solid fa-chart-line sidebarIcon"></i>Project Update</NavLink>
        <NavLink className="nav-link sidebarNavLink" to={"/summary-forecast"}><i className="fa-solid fa-chart-line sidebarIcon"></i>P&L summary&forecast</NavLink>
        <NavLink className="nav-link sidebarNavLink" to={"/working-capital"}><i className="fa-solid fa-chart-line sidebarIcon"></i>Working Capital</NavLink>

        
        
      </div>
    </div>
  );
};
