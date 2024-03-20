import { Suspense, lazy } from "react";
import { Loading } from "./utils/Loading";
import "react-datepicker/dist/react-datepicker.css";
import MainLayout from "./componets/Layout/MainLayout";
import { Outlet, Route, Routes } from "react-router-dom";
import RoleMapping from "./componets/AdminPage/RoleMapping";
import { MailConfig } from "./componets/AdminPage/MailConfig";
import Bank from "./componets/MasterData/Bank";
import { PageNotFound } from "./componets/PageNotFound";
import FY from "./componets/MasterData/FY";
import SACompany from "./componets/MasterData/SACompany";
import BankingFacilities from "./componets/Module2/BankingFacilities";
import CommercialPaper from "./componets/Module6/CommercialPaper";
const DashBoard = lazy(() => import('./componets/Module1/DashBoard'));
const ActionTakenReport = lazy(() => import('./componets/Module1/ActionTakenReport'));
const QuarterlyPerformance = lazy(() => import('./componets/Module1/QuarterlyPerformance'));
const BusinessProspects = lazy(() => import('./componets/Module1/BusinessProspects'));
const Summaryforecast = lazy(()=> import('./componets/Module1/SummaryForecast')); 
const WorkingCapital = lazy(()=> import('./componets/Module1/WorkingCapital'));
const ProjectUpdate = lazy(() => import('./componets/Module1/ProjectUpdate'));
const BankGurantee = lazy(() => import('./componets/Module2/BankingGurantee'));
const InternationalAmount = lazy(() => import('./componets/Module2/InternationalAmount'));
const CorporateGuarantee = lazy(() => import('./componets/Module2/CorporateGuarantee'));
const NCD = lazy(() => import('./componets/Module6/NCD_FY22'));// in App.tsx
const ComfortGurantee = lazy(() => import("./componets/Module2/ComfortGurantee"));
const NCDTracker = lazy(() => import("./componets/Module4/NCD/NCDTracker"));
const NCDDashboard = lazy(() => import("./componets/Module4/NCD/NCDDashboard"));
const ICBMovement = lazy(() => import("./componets/Module3/ICD-ICBMovement"));
const BalanceSheet = lazy(() => import("./componets/Module1/BalanceSheet"));
const CashFlowStatement = lazy(
  () => import("./componets/Module1/CashFlowStatement")
);
const User = lazy(() => import("./componets/AdminPage/User"));
const Role = lazy(() => import("./componets/AdminPage/Role"));
function App() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="page2" element={<ActionTakenReport />}/>
        <Route path="quarterly-performance" element={<QuarterlyPerformance />}/>
        <Route path="business-prospects" element={<BusinessProspects />}/>
        <Route path="project-update" element={<ProjectUpdate />}/>
        <Route path="summary-forecast" element={<Summaryforecast />}/>
        <Route path="working-capital" element={<WorkingCapital />}/>
        <Route path="balance-sheet" element={<BalanceSheet />}/>
        <Route path="cashFlow-statement" element={<CashFlowStatement />}/>
        <Route path="user" element={<User />}/>
        <Route path="role" element={<Role />}/>
        <Route path="role-mapping" element={<RoleMapping />}/>
        <Route path="mail-config" element={<MailConfig />}/>
        <Route path="bank" element={<Bank />}/>
        <Route path="financial-year" element={<FY />}/>
        <Route path="sa-company" element={<SACompany />}/>
        <Route path="banking-facilities" element={<BankingFacilities />}/>
        <Route path="banking-Gurantee" element={<BankGurantee />}/>
        <Route path="corporate-Guarantee" element={<CorporateGuarantee />}/>
        <Route path="international-Amount" element={<InternationalAmount />}/>
        <Route path="comfort-Gurantee" element={<ComfortGurantee />}/>
        <Route path="ICB-Movement" element={<ICBMovement />}/>
        <Route path="Commercial-Paper" element={<CommercialPaper />}/>
        <Route path="NCD-FY22" element={<NCD />}/>
        <Route path="NCD-Tracker" element={<NCDTracker />}/>
        <Route path="NCD-Dashboard" element={<NCDDashboard />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </Suspense>                                                                               
    </MainLayout>
  );
}

export default App;
