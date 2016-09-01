var Emails = require("../model/EmailModel");

//expot a function that takes app, pass 'app' by reference from app.js
module.exports = function(app) {

    app.get("/api/setupEmails", function(req, res) {
        // seed database
        var starterEmails = [
            {
                subject: "Test Email 1",
                body: "Test Email 111111111111111",
                from: "anamitra@example.com",
                to: "anamitra@example.com"
            },
            {
                subject: "Test Email 2",
                body: "Test Email 222222222222222",
                from: "anamitra@example.com",
                to: "anamitra@example.com"
            }
        ];
        Emails.create(starterEmails, function(err, results) {
            res.send(results);
        });
    });

}
