import { useState, useEffect } from "react";
import axios from "axios";

const LoanOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/loans/offers")
      .then((res) => setOffers(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h2>Loan Offers</h2>
      <ul>
        {offers.map((offer, index) => (
          <li key={index}>
            <strong>{offer.companyName}</strong> - {offer.lender}, ${offer.loanAmount}, {offer.term} months, Monthly: ${offer.monthlyRepayment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanOffers;
