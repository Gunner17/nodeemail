//to setup our schema..
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    subject: String,
    body: String,
    from: String,
    to: String
});

//create new model using the above schema
var EmailDetails = mongoose.model("EmailDetails", todoSchema);

//re-usable model, to create, delete, update and find them.
//provides methods to create, update, delete records inside mongodb file.
module.exports = EmailDetails;
