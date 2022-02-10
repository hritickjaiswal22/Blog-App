const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Conneted to DB");
});

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/my-app/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/my-app/build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Running");
});
