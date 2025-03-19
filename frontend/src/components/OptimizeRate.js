import { useState } from "react";
import axios from "axios";
import "../css/OptimizeRate.css" // Import the new CSS file

const OptimizeRate = () => {
  const [inputs, setInputs] = useState({ loanAmount: "", term: "" });
  const [rate, setRate] = useState("");

  const handleOptimize = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/loans/optimize-rate", inputs);
      setRate(data.optimalInterestRate);
    } catch (error) {
      console.error("Error optimizing rate:", error);
    }
  };

  return (
    <div className="optimize-container">
      <div className="optimize-card">
        <h2>Optimize Interest Rate</h2>

        {/* ✅ Input Fields */}
        <div className="input-group">
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
          <button onClick={handleOptimize} className="custom-button">
            Optimize Rate
          </button>
        </div>

        {/* ✅ Display Optimal Interest Rate */}
        {rate && (
          <p className="rate-display">
            Optimal Interest Rate: <span>{(rate * 100).toFixed(2)}%</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default OptimizeRate;

