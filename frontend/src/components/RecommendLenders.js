import { useState } from "react";
import axios from "axios";
import "../css/RecommendLender.css";

const RecommendLenders = () => {
  const [inputs, setInputs] = useState({ netAssets: "", loanAmount: "", term: "" });
  const [lenders, setLenders] = useState([]);

  const handleRecommend = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/loans/recommend-lenders", inputs);
      setLenders(data.recommendedLenders || []);
    } catch (error) {
      console.error("Error recommending lenders:", error);
    }
  };

  return (
    <div className="recommend-container">
      <div className="recommend-card">
        <h2>Find the Best Lenders</h2>

        {/* ✅ Input Fields */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Net Assets"
            onChange={(e) => setInputs({ ...inputs, netAssets: e.target.value })}
          />
          <input
            type="text"
            placeholder="Loan Amount"
            onChange={(e) => setInputs({ ...inputs, loanAmount: e.target.value })}
          />
          <input
            type="text"
            placeholder="Term (months)"
            onChange={(e) => setInputs({ ...inputs, term: e.target.value })}
          />
          <button onClick={handleRecommend} className="custom-button">
            Find Best Lenders
          </button>
        </div>
      </div>

      {/* ✅ Display Recommended Lenders */}
      {lenders.length > 0 && (
        <div className="lender-table-container">
          <h3>Lender Recommendations</h3>
          <div className="table-wrapper">
            <table className="lender-table">
              <thead>
                <tr>
                  <th>Lender</th>
                  <th>Company</th>
                  <th>Loan Amount</th>
                  <th>Interest Rate (%)</th>
                  <th>Term (Months)</th>
                  <th>Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {lenders.map((lender, index) => (
                  <tr key={index}>
                    <td>{lender.lender}</td>
                    <td>{lender.companyName}</td>
                    <td>${lender.loanAmount}</td>
                    <td>{lender.interestRate.toFixed(2)}%</td>
                    <td>{lender.tradingTime}</td>
                    <td>${lender.monthlyRepayment.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendLenders;

