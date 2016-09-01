var configValues = require("./config");

module.exports = {
    getDbConnectionString: function() {
    	console.log("Connect...");
        return "mongodb://" + configValues.uname + ":" +
        configValues.pwd + "@ds019936.mlab.com:19936/emailapp";
    }
}
