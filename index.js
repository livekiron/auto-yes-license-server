import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// ✅ অনুমোদিত ইউজার ইমেইল লিস্ট
const approvedEmails = [
  "you@gmail.com",
  "friend@example.com"
];

// 🔍 License যাচাই API
app.get("/check", (req, res) => {
  const email = (req.query.email || "").toLowerCase().trim();
  const approved = approvedEmails.includes(email);
  console.log(🔎 License check for: ${email} → ${approved ? "✅ Allowed" : "❌ Denied"});
  res.json({ approved });
});

// টেস্ট রুট
app.get("/", (req, res) => {
  res.send("🚀 Auto YES License Server is running successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(✅ Server running on port ${PORT}));
