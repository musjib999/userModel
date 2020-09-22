const { Int32 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    password: { type: String },
    userType: { type: String, enum: ['student', 'lecturer', 'independent Researcher'] },
    institution: [
        {
            regNo: { type: String },
            institutionName: { type: String },
            faculty: { type: String },
            depertment: { type: String },
            level: { type: String },
            year: { type: Int32 },
        },
    ],
    project: [
        {
            projectName: { type: String },
            projectStartDate: { type: Date },
            projectEndDate: { type: Date },
            projectAuthor: [
                {
                    fname: { type: String },
                    lname: { type: String },
                    email: { type: String },
                },
            ],
            projectContent: { type: String },
            areaOfFocus: { type: String },
        },
    ],
    analysis: [
        {
            reasearchRead: {
                timeStarted: { type: Date },
                timeStoped: { type: Date },
            },
            reasearchReading: { type: String },
            suggestion: { type: String },
            history: { type: String }
        },
        {
            othersReadResearch: { type: String }
        },
    ],
});