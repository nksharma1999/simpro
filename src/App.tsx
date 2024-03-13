import React, { Suspense, lazy } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import MainLayout from "./componets/Layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import RoleMapping from "./componets/AdminPage/RoleMapping";
import { MailConfig } from "./componets/AdminPage/MailConfig";
import Bank from "./componets/MasterData/Bank";
import { PageNotFound } from "./componets/PageNotFound";
import FY from "./componets/MasterData/FY";
import SACompany from "./componets/MasterData/SACompany";
import BankingFacilities from "./componets/Module2/BankingFacilities";
const DashBoard = lazy(() => import('./componets/Module1/DashBoard'));
const ActionTakenReport = lazy(() => import('./componets/Module1/ActionTakenReport'));
const QuarterlyPerformance = lazy(() => import('./componets/Module1/QuarterlyPerformance'));
const BusinessProspects = lazy(() => import('./componets/Module1/BusinessProspects'));
const Summaryforecast = lazy(()=> import('./componets/Module1/SummaryForecast')); 
const WorkingCapital = lazy(()=> import('./componets/Module1/WorkingCapital'));
const ProjectUpdate = lazy(() => import('./componets/Module1/ProjectUpdate'));
const BankGurantee = lazy(() => import('./componets/Module2/BankingGurantee'));
const CorporateGuarantee = lazy(() => import('./componets/Module2/CorporateGuarantee'));
const BalanceSheet = lazy(()=> import('./componets/Module1/BalanceSheet')); 
const CashFlowStatement = lazy(()=> import('./componets/Module1/CashFlowStatement'));
const User = lazy(() => import('./componets/AdminPage/User'));
const Role = lazy(() => import('./componets/AdminPage/Role'));
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

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </Suspense>                                                                               
    </MainLayout>
  );
}

export default App;
