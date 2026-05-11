
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let meetings = [];

app.get("/meetings", (req, res) => {
  res.json(meetings);
});

app.post("/meetings", (req, res) => {
  const { date, time } = req.body;

  const exists = meetings.find(
    (meeting) =>
      meeting.date === date &&
      meeting.time === time
  );

  if (exists) {
    return res.status(400).json({
      message: "Same meeting slot already booked"
    });
  }

  meetings.push(req.body);

  res.json({
    message: "Meeting created successfully"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
