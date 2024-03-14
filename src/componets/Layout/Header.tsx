import { FC } from "react";
import { OffCanvas } from "./OffCanvas";

interface props {
  updateSideBarView: () => void;
}
export const Header: React.FC<props> = ({ updateSideBarView }) => {
  return (
    <nav className="navbar navbar-light" style={{backgroundColor:'rgb(10 104 98)'}}>
      <div className="container-fluid">
        <div>
          <button
            onClick={updateSideBarView}
            className="btn "
            type="submit"
            style={{ width: "50px",color:'#198754' ,borderColor:'#da1818'}}
          >
            <i className="fa-solid fa-bars" style={{color:'white'}}></i>
          </button>
          {/* <button
            className="btn btn-outline-success"
            type="button"
            style={{ width: "50px" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fa-solid fa-bars"></i>
          </button> */}
        </div>
        <OffCanvas />
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{height:'31px',marginTop:'9px'}}
          />
          <div style={{ fontSize: "30px", marginLeft: 10 }}>
            <i className="fa-regular fa-circle-user fa-fade"></i>
          </div>
        </form>
      </div>
    </nav>
  );
};
