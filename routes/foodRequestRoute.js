const express = require("express");
const router = express.Router();
const requestingmodel = require('../models/Foodrequest')
const moment = require("moment");
const Request = require('../models/request')

router.post("/requestfood", async (req, res) => {
    const { requests, userid, fromdate, todate, totalfoods, totaldays } = req.body;
  
    try {
      const newrequest = new requestingmodel({
        request: requests.name,
        userid: requests._id,
        fromdate: moment(fromdate).format('DD-MM-YYYY'),
        todate: moment(todate).format('DD-MM-YYYY'),
        totalfoods,
        totaldays,
        donationid: "1234",
      });
  
      const requesting = await newrequest.save();
      const requesttemp = await Request.findOne({_id : requests._id})
      requesttemp.currentrequests.push({requestid: requesting._id, fromdate: moment(fromdate).format('DD-MM-YYYY'), todate : moment(todate).format('DD-MM-YYYY'), userid : userid, status: requesting.status});
      await requesttemp.save()

      res.status(200).json({
        success: true,
        message: "Food request created successfully",
        request: requesting._id,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error creating food request",
        error,
      });
    }
  });
  

module.exports = router