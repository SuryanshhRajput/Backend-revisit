const app = require("./src/app");
const { connectDB } = require("./src/config/db.js");

async function startServer() {
  await connectDB();

  app.listen(3000, () => {
    console.log("running on port 3000");
  });
}

startServer();
