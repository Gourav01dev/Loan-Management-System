import { useState } from "react";
import axios from "axios";
import  "../css/MonthlyRepayment.css";

const MonthlyRepaymentCalculator = () => {
    const [inputs, setInputs] = useState({ loanAmount: "", interestRate: "", term: "" });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleCalculate = async () => {
        try {
            let formattedInterestRate = parseFloat(inputs.interestRate.replace("%", "")) / 100; // Convert "10%" → 0.10

            const { data } = await axios.post("http://localhost:5000/api/loans/calculate-monthly-repayment", {
                loanAmount: parseFloat(inputs.loanAmount),
                interestRate: formattedInterestRate,
                term: parseInt(inputs.term),
            });

            setResult(data);
        } catch (error) {
            console.error("Error calculating monthly repayment:", error);
        }
    };

    return (
        <div className="monthly-repayment-container">
            <h2 className="repayment-title">CALCULATE MONTHLY REPAYMENT</h2>

            <div className="input-container">
                <input
                    type="number"
                    name="loanAmount"
                    placeholder="Loan Amount ($)"
                    value={inputs.loanAmount}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="interestRate"
                    placeholder="Interest Rate (%)"
                    value={inputs.interestRate}
                    onChange={handleChange}
                    className="input-field"
                />
                <input
                    type="number"
                    name="term"
                    placeholder="Term (Months)"
                    value={inputs.term}
                    onChange={handleChange}
                    className="input-field"
                />

                <button onClick={handleCalculate} className="custom-button">
                    Calculate
                </button>
            </div>

            {result && (
                <div className="repayment-result">
                    <p>
                        Monthly Repayment: <strong>${result.monthlyRepayment}</strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export default MonthlyRepaymentCalculator;

