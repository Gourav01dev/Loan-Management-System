import { useState, useEffect } from "react";

const PrioritizeLoans = () => {
  const [topOffers, setTopOffers] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/loans/prioritize-loans");
        if (!response.ok) {
          throw new Error("Failed to fetch loan data");
        }
        const data = await response.json();
        setTopOffers(data);
      } catch (err) {
        console.log("Error fetching loans:", err);
      }
    };
    fetchLoans();
  }, []);

  return (
    <div className="loan-container">
      <h2 className="loan-title">Top Loan Offers</h2>

      {topOffers.length > 0 ? (
        <div className="table-container">
          <table className="loan-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Lender</th>
                <th>Loan Amount</th>
                <th>Term (Months)</th>
                <th>Monthly Repayment</th>
              </tr>
            </thead>
            <tbody>
              {topOffers.map((offer, index) => (
                <tr key={index}>
                  <td>{offer.companyName}</td>
                  <td>{offer.lender}</td>
                  <td>${Number(offer.loanAmount).toLocaleString()}</td>
                  <td>{offer.term}</td>
                  <td>${Number(offer.monthlyRepayment).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-loans">No loan offers available.</p>
      )}
    </div>
  );
};

export default PrioritizeLoans;
