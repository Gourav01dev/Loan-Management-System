const express = require("express");
const cors = require("cors");
const loanRoutes = require("./routes/loanRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/loans", loanRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
