const mongoose = require('mongoose');

const bugReportSchema = {
    title: String,
    description: String,
    severity: String,
}

const BugReportModel = mongoose.model('BugReportModel', bugReportSchema);

module.exports = BugReportModel;