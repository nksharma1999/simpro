import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { OffCanvas } from "./OffCanvas";

const MainLayout = ({ children }: any) => {
    const [isShowSidebar,setShowSidebar] = useState<boolean>(true);
    const updateSideBarView = () =>{
        setShowSidebar(!isShowSidebar);
    }
  return (
    <div className="bg-light" style={{display:'flex',justifyContent:'flex-start'}}>
     {isShowSidebar && <Sidebar />}
     <OffCanvas />
      <div style={{width:'100%', height:'100vh', overflow:'auto'}}>
        <Header updateSideBarView={updateSideBarView}/>
        <div style={{padding:"20px"}}>

        {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
