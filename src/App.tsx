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
import LongTermReports from "./componets/Module4/LongTermReports";
import { Borrowing } from "./componets/Module4/Borrowing";
import { FundRaising } from "./componets/Module4/FundRaising";
import { Equity } from "./componets/Module4/Equity";
import { InterestPayment } from "./componets/Module4/InterestPayment";
import { InterestReceived } from "./componets/Module4/InterestReceived";
import { LoanGiven } from "./componets/Module4/LoanGiven";
import { LoansTaken } from "./componets/Module4/LoansTaken";
import { Maturities } from "./componets/Module4/Maturities";
import { NCDSimple } from "./componets/Module4/NCD/NCDSimple";
import { DividendDashborad } from "./componets/Module5/Dashboard";
import { DividendMainDashboard } from "./componets/Module5/MainDashboard";
import NCDTracker from "./componets/Module4/NCD/NCDTracker";
import TermLoan from "./componets/Module4/TermLoan/TermLoan";
import NCDDashboard from "./componets/Module4/NCD/NCDDashboard";
import NCD from "./componets/Module6/NCD_FY22";
import ECBDashboard from "./componets/Module4/ECB/ECBDashboard";
const StrategicTransactionDashbord = lazy(
  () => import("./componets/Module7/StrategicTransaction")
);

const DashBoard = lazy(() => import("./componets/Module1/DashBoard"));
const ActionTakenReport = lazy(
  () => import("./componets/Module1/ActionTakenReport")
);
const QuarterlyPerformance = lazy(
  () => import("./componets/Module1/QuarterlyPerformance")
);
const BusinessProspects = lazy(
  () => import("./componets/Module1/BusinessProspects")
);
const Summaryforecast = lazy(
  () => import("./componets/Module1/SummaryForecast")
);
const WorkingCapital = lazy(() => import("./componets/Module1/WorkingCapital"));
const ProjectUpdate = lazy(() => import("./componets/Module1/ProjectUpdate"));
const BankGurantee = lazy(() => import("./componets/Module2/BankingGurantee"));
const InternationalAmount = lazy(
  () => import("./componets/Module2/InternationalAmount")
);
const CorporateGuarantee = lazy(
  () => import("./componets/Module2/CorporateGuarantee")
);
const ComfortGurantee = lazy(
  () => import("./componets/Module2/ComfortGurantee")
);
const ICBMovement = lazy(() => import("./componets/Module3/ICD-ICBMovement"));
const BalanceSheet = lazy(() => import("./componets/Module1/BalanceSheet"));
const CashFlowStatement = lazy(
  () => import("./componets/Module1/CashFlowStatement")
);
const User = lazy(() => import("./componets/AdminPage/User"));
const Role = lazy(() => import("./componets/AdminPage/Role"));
const PrimaryInvestor = lazy(() => import("./componets/Module4/NCD/PrimaryInvestor"));
const SecondaryInvestor = lazy(() => import("./componets/Module4/NCD/SecondaryInvestor"));

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<DashBoard />} />

          <Route path="/admin" element={<Outlet />}>
            <Route index element={<User />} />
            <Route path="user" element={<User />} />
            <Route path="role" element={<Role />} />
            <Route path="role-mapping" element={<RoleMapping />} />
            <Route path="mail-config" element={<MailConfig />} />
          </Route>
          <Route path="/master-data" element={<Outlet />}>
            <Route index element={<Bank />} />
            <Route path="bank" element={<Bank />} />
            <Route path="financial-year" element={<FY />} />
            <Route path="sa-company" element={<SACompany />} />
          </Route>
          <Route path="/pms" element={<Outlet />}>
            <Route index element={<ActionTakenReport />} />
            <Route path="business" element={<Outlet />}>
              <Route index element={<ActionTakenReport />} />
              <Route path="action-taken" element={<ActionTakenReport />} />
              <Route
                path="quarterly-performance"
                element={<QuarterlyPerformance />}
              />
              <Route
                path="business-prospects"
                element={<BusinessProspects />}
              />
              <Route path="project-update" element={<ProjectUpdate />} />
            </Route>
            <Route path="financial" element={<Outlet />}>
              <Route index element={<Summaryforecast />} />
              <Route path="summary-forecast" element={<Summaryforecast />} />
              <Route path="working-capital" element={<WorkingCapital />} />
              <Route path="balance-sheet" element={<BalanceSheet />} />
              <Route
                path="cashFlow-statement"
                element={<CashFlowStatement />}
              />
            </Route>
          </Route>
          <Route path="/facility-monitoring" element={<Outlet />}>
            <Route index element={<BankingFacilities />} />
            <Route path="banking-facilities" element={<BankingFacilities />} />
            <Route path="banking-Gurantee" element={<BankGurantee />} />
            <Route
              path="corporate-Guarantee"
              element={<CorporateGuarantee />}
            />
            <Route
              path="international-Amount"
              element={<InternationalAmount />}
            />
            <Route path="comfort-Guarantee" element={<ComfortGurantee />} />
            <Route path="ICB-Movement" element={<ICBMovement />} />
          </Route>
          <Route path="/borrowing" element={<Borrowing />}>
            <Route index element={<LongTermReports />} />
            <Route path="long-term-reports" element={<LongTermReports />} />
            <Route path="fund-raising" element={<FundRaising />} />
            <Route path="equity" element={<Equity />} />
            <Route path="loan-given" element={<LoanGiven />} />
            <Route path="loans-taken" element={<LoansTaken />} />
            <Route path="maturities" element={<Maturities />} />
            <Route path="interest-received" element={<InterestReceived />} />
            <Route path="interest-payment" element={<InterestPayment />} />
            <Route path="ncd-simple" element={<NCDSimple />} />
            <Route path="term-loan" element={<TermLoan />} />
            <Route path="ECBDashboard" element={<ECBDashboard />} />
          </Route>
          <Route path="NCD-Tracker" element={<NCDTracker />}></Route>
          <Route path="NCD-Dashboard" element={<NCDDashboard />}></Route>
          <Route path="/dividend-income" element={<Outlet />}>
            <Route index element={<DividendDashborad />} />
            <Route path="dashboard" element={<DividendDashborad />} />
            <Route path="main-dashboard" element={<DividendMainDashboard />} />
          </Route>
          <Route path="NCD-FY22" element={<NCD />}></Route>
          <Route path="Commercial-Paper" element={<CommercialPaper />}></Route>
          <Route path="Primary-Investor" element={<PrimaryInvestor />}></Route>
          <Route path="Secondary-Investor" element={<SecondaryInvestor />}></Route>
          <Route path="/strategic-transaction" element={<Outlet />}>
            <Route index element={<StrategicTransactionDashbord />} />
            <Route
              path="dashboard"
              element={<StrategicTransactionDashbord />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
