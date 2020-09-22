const userModel = new UserModel({
    fname: {},
    lname: {},
    email: {},
    userType: [
        { student }, { lecturer }, { independentUser },
    ],
    institution: [
        {
            regNo: {},
            institutionName: {},
            faculty: {},
            depertment: {},
            level: {},
            year: {},
        },
    ],
    project: [
        {
            projectName: {},
            projectStartDate: {},
            projectStartDate: {},
            projectAuthor: [
                {
                    fname: {},
                    lname: {},
                    email: {},
                },
            ],
            projectContent: {},
            areaOfFocus: {},
        },
    ],
    analysis: [
        {
            reasearchRead: {
                timeStarted: {},
                timeStoped: {},
            },
            reasearchReading: {},
            suggestion: {},
            history: {}
        },
        {
            othersReadResearch: {}
        },
    ],
});