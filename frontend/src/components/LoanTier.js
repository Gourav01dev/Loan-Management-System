import { useState } from "react";
import axios from "axios";
import "../css/LoanTier.css";

const LoanTier = () => {
  const [inputs, setInputs] = useState({
    netAssets: "",
    prevYearNetAssets: "",
    tradingTime: "",
  });

  const [tier, setTier] = useState("");

  const handleClassify = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/loans/classify-tier", inputs);
      setTier(data.tier);
    } catch (error) {
      console.error("Error classifying tier:", error);
    }
  };

  return (
    <div className="loan-tier-container">
      <h2 className="loan-tier-title">CLASSIFY LOAN TIER</h2>

      <div className="input-container">
        {Object.keys(inputs).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key.replace(/([A-Z])/g, " $1")}
            onChange={(e) => setInputs({ ...inputs, [key]: e.target.value })}
            className="input-field"
          />
        ))}

        <button onClick={handleClassify} className="custom-button">
          Classify Tier
        </button>
      </div>

      {tier && (
        <p className="loan-tier-result">
          Loan Tier: <span>{tier}</span>
        </p>
      )}
    </div>
  );
};

export default LoanTier;
