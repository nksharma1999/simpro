import React, { Suspense, lazy } from "react";
import MainLayout from "./componets/Layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import BalanceSheet from "./componets/pages/BalanceSheet";
import CashFlowStatement from "./componets/pages/CashFlowStatement";
const DashBoard = lazy(() => import('./componets/pages/DashBoard'));
const ActionTakenReport = lazy(() => import('./componets/pages/ActionTakenReport'));
const QuarterlyPerformance = lazy(() => import('./componets/pages/QuarterlyPerformance'));
const BusinessProspects = lazy(() => import('./componets/pages/BusinessProspects'));
const ProjectUpdate = lazy(() => import('./componets/pages/ProjectUpdate'));
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
        <Route path="balance-sheet" element={<BalanceSheet />}/>
        <Route path="cashFlow-statement" element={<CashFlowStatement />}/>
      </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
