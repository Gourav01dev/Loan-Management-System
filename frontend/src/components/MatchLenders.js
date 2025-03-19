import { useState } from "react";
import axios from "axios";
import "../css/matchLenders.css"

const MatchLenders = () => {
  const [inputs, setInputs] = useState({
    companyName: "",
    netAssets: 0,
    prevYearNetAssets: 0,
    tradingTime: 0,
    loanAmount: 0,
  });

  const [lenders, setLenders] = useState([]);

  const handleMatch = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/loans/match-lenders", inputs);
      setLenders(data.eligibleLenders);
    } catch (error) {
      console.error("Error fetching lenders:", error);
    }
  };

  return (
    <div className="match-lenders-container">
  <h2 className="lenders-title">Find Eligible Lenders</h2>

  <div className="input-container">
    {Object.keys(inputs).map((key) => (
      <input
        key={key}
        type={key === 'companyName' ? 'text' : 'number'}
        placeholder={key.replace(/([A-Z])/g, " $1")}
        onChange={(e) => setInputs({ ...inputs, [key]: key === "companyName" ? e.target.value : Number(e.target.value) })}
        className="input-field"
      />
    ))}
    <button onClick={handleMatch} className="custom-button">Find Lenders</button>
  </div>

  {lenders.length > 0 && (
    <div className="lenders-result">
      <h3>Eligible Lenders</h3>
      <table className="lenders-table">
        <thead>
          <tr>
            <th>Lender</th>
            <th>Loan Amount</th>
            <th>Interest Rate (%)</th>
            <th>Trading Time (Months)</th>
          </tr>
        </thead>
        <tbody>
          {lenders.map((lender, index) => (
            <tr key={index}>
              <td>{lender.lender}</td>
              <td>£{lender.loanAmount.toLocaleString()}</td>
              <td>{lender.interestRate}%</td>
              <td>{lender.tradingTime} months</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default MatchLenders;