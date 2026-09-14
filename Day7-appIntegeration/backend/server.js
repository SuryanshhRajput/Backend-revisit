require("dotenv").config();
const app = require("./src/app");

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("app is running on", port);
});
