import axios from "axios";

const API_URL = "http://localhost:5000/api/loans";

export const calculateLoan = (data) => axios.post(`${API_URL}/calculate`, data);
export const matchLenders = (data) => axios.post(`${API_URL}/match-lenders`, data);
export const classifyLoanTier = (data) => axios.post(`${API_URL}/classify-tier`, data);
export const prioritizeLoans = (data) => axios.post(`${API_URL}/prioritize`, data);
