import React, { Suspense, lazy } from "react";
import MainLayout from "./componets/Layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import ProjectUpdate from "./componets/pages/ProjectUpdate";
// import { QuarterlyPerformance } from "./componets/pages/QuarterlyPerformance";
const DashBoard = lazy(() => import('./componets/pages/DashBoard'));
const ActionTakenReport = lazy(() => import('./componets/pages/ActionTakenReport'));
const QuarterlyPerformance = lazy(() => import('./componets/pages/QuarterlyPerformance'));
const BusinessProspects = lazy(() => import('./componets/pages/BusinessProspects'));
const Summaryforecast = lazy(()=> import('./componets/pages/SummaryForecast')); 
const WorkingCapital = lazy(()=> import('./componets/pages/WorkingCapital'));
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
      </Routes>
      </Suspense>                                                                               
    </MainLayout>
  );
}

export default App;
