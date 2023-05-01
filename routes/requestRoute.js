const express = require("express");
const router = express.Router();

const Request = require("../models/request");

router.get("/getallrequests", async (req, res) => {
  try {
    const requests = await Request.find({});
    res.send(requests)
  } catch (error) {
    return res.status(400).json({message: error});
  }
});

module.exports = router;