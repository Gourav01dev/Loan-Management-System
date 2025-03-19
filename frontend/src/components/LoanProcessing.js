import { useState, useEffect } from "react";
import axios from "axios";
import "../css/LoanProcessing.css";

const LoanProcessing = () => {
  const [loanData, setLoanData] = useState([]);
  const [profitability, setProfitability] = useState(null);
  const [inputs, setInputs] = useState({ netAssets: "", prevYearNetAssets: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/loans/process-loans")
      .then((res) => setLoanData(res.data))
      .catch((err) => console.error("Error fetching loan data:", err));
  }, []);

  const handleCalculateProfitability = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/loans/calculate-profitability", inputs);
      setProfitability(data.profitability);
    } catch (error) {
      console.error("Error calculating profitability:", error);
    }
  };

  return (
    <div className="loan-container">
      <h2>Loan Data Processing</h2>

      {/* ✅ Two Columns Layout */}
      <div className="content">
        {/* Loan Offers Table */}
        <div className="loan-offers">
          <h3>Processed Loan Offers</h3>
          <div className="table-wrapper">
            <table className="loan-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Lender</th>
                  <th>Loan Amount</th>
                  <th>Interest Rate</th>
                  <th>Term</th>
                  <th>Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {loanData.map((offer, index) => (
                  <tr key={index}>
                    <td>{offer.companyName}</td>
                    <td>{offer.lender}</td>
                    <td>${offer.loanAmount}</td>
                    <td>{offer.interestRate * 100}%</td>
                    <td>{offer.term} months</td>
                    <td>${offer.monthlyRepayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Profitability Calculator */}
        <div className="profitability-section">
          <h3>Calculate Profitability</h3>
          <input 
            type="number" 
            placeholder="Net Assets" 
            value={inputs.netAssets} 
            onChange={e => setInputs({ ...inputs, netAssets: e.target.value })} 
          />
          <input 
            type="number" 
            placeholder="Previous Year Net Assets" 
            value={inputs.prevYearNetAssets} 
            onChange={e => setInputs({ ...inputs, prevYearNetAssets: e.target.value })} 
          />
          <button onClick={handleCalculateProfitability} className="calculate-btn">
            Calculate
          </button>

          {profitability !== null && (
            <p className="profitability-result">
              Profitability: <span>${profitability}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanProcessing;


