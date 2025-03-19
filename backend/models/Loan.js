const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  companyName: String,
  netAssets: Number,
  tradingTime: Number,
  loanAmount: Number,
  interestRate: Number,
  termMonths: Number,
});

module.exports = mongoose.model("Loan", LoanSchema);
