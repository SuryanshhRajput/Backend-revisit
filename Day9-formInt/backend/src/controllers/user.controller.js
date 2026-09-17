const create = (req, res) => {
  console.log("hello");
  res.send("hey");
  console.log(req.body);
};

module.exports = { create };
