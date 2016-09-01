var Emails = require("../model/EmailModel");
var bodyParser = require("body-parser");

module.exports = function(app) {
    
    //parse application/json
    app.use(bodyParser.json());

    //Returns middleware that only parses urlencoded bodies
    app.use(bodyParser.urlencoded({extended: true}));

    //fetch emails by subject
    app.get("/email/search/:from", function(req, res) {
        Emails.find({from: req.params.from}, function(err, todos) {
            if (err) {
                throw err;
            }
            res.send(todos);
        })
    });

    //fetch all emails
    app.get("/email/search", function(req, res) {
        Emails.find({}, function(err, todos) {
            if (err) {
                throw err;
            }
            res.send(todos);
        })
    });

    app.delete("/email/delete", function(req, res) {
        Emails.findByIdAndRemove(req.body.id, function(err, todo) {
            if (err) {
                throw err;
            }
            res.send("Success");
        });
    });

}