import { Link } from "react-router-dom";
import  "../css/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/loan-processing">Loan Processing</Link></li>
        <li><Link to="/monthly-repayment">Monthly Repayment</Link></li>
        <li><Link to="/match-lenders">Match Lenders</Link></li>
        <li><Link to="/loan-tier">Loan Tier</Link></li>
        <li><Link to="/optimize-rate">Optimize Rate</Link></li>
        <li><Link to="/recommend-lenders">Recommend Lenders</Link></li>
        <li><Link to="/prioritize-loans">Prioritize Loans</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
