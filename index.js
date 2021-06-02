import express from "express";
import axios from "axios";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('build'));

app.get("/", (req, res) => {
  res.json({
    status: "Welcome To The Server-Side",
    message: "Hope You are Doing Well!!",
  });
});

app.post("/students", async (req, res) => {
  let roll = req.body.rollVal;
  const result = [];
  for (var i = 0; i < roll.length; i++) {
    const response = await axios.post(
      `http://proedge.me/test.php?rollnumber=${roll[i]}`
    );
    result[i] = response.data;
  }
  res.json({ roll, result });
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
