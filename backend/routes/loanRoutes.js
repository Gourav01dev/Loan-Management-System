const express = require("express");
const { 
  processLoans, 
  matchLenders, 
  classifyLoanTier, 
  optimizeInterestRate, 
  prioritizeLoans, 
  calculateCompanyProfitability, 
  calculateMonthlyRepayment,
  recommendLendersByCriteria
} = require("../controllers/loanController");

const router = express.Router();

router.get("/process-loans", processLoans);
router.post("/calculate-profitability", calculateCompanyProfitability);

router.post("/match-lenders", matchLenders);
router.post("/classify-tier", classifyLoanTier);

router.post("/optimize-rate", optimizeInterestRate);

router.post("/recommend-lenders", recommendLendersByCriteria);

router.get("/prioritize-loans", prioritizeLoans);

router.post("/calculate-monthly-repayment", calculateMonthlyRepayment);


module.exports = router;
