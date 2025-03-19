import { Link } from "react-router-dom";
import "../css/Home.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to Loan Offer Management System</h1>
        <p>Manage and optimize your loan offers efficiently.</p>
        <Link to="/loan-processing">
          <button className="custom-button">Get Started</button>
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h2>Loan Processing</h2>
          <p>Efficiently process loans with automated tools.</p>
        </div>
        <div className="feature-card">
          <h2>Monthly Repayment</h2>
          <p>Calculate and optimize your monthly repayment.</p>
        </div>
        <div className="feature-card">
          <h2>Match Lenders</h2>
          <p>Find the best lenders for your loan requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

