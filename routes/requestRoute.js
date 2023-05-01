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

router.post("/getrequestbyid", async (req, res) => {
  const requestid = req.body.requestid
  try {
    const request = await Request.findOne({_id: requestid});
    res.send(request)
  } catch (error) {
    return res.status(400).json({message: error});
  }
});

module.exports = router;