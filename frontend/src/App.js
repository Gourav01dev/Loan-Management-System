import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoanProcessing from "./components/LoanProcessing";
import MonthlyRepaymentCalculator from "./components/MonthlyRepaymentCalculator";
import MatchLenders from "./components/MatchLenders";
import LoanTier from "./components/LoanTier";
import OptimizeRate from "./components/OptimizeRate";
import RecommendLenders from "./components/RecommendLenders";
import PrioritizeLoans from "./components/PrioritizeLoans";
import HomePage from "./components/Home";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loan-processing" element={<LoanProcessing />} />
          <Route path="/monthly-repayment" element={<MonthlyRepaymentCalculator />} />
          <Route path="/match-lenders" element={<MatchLenders />} />
          <Route path="/loan-tier" element={<LoanTier />} />
          <Route path="/optimize-rate" element={<OptimizeRate />} />
          <Route path="/recommend-lenders" element={<RecommendLenders />} />
          <Route path="/prioritize-loans" element={<PrioritizeLoans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

