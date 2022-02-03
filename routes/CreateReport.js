const express = require('express');

const BugReportModel = require('../models/BugReportModel');

const router = express.Router();

router.route('/api/reports').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const severity = req.body.severity;
    const BugModel = new BugReportModel({
        title,
        description,
        severity
    });
    BugModel.save();
})
router.route('/api/reports').get(async (req, res) => {
    const data = await BugReportModel.find({});
    res.send(data)
})

module.exports = router;

