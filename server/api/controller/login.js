var ldapAuthenticate = require('../service/ldapAuthenticate');
var jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  ldapAuthenticate(req.body.login.username, req.body.login.password).then(function(response){
    var returnData = {
      authenticated: response.authenticated
    }
    
    if (response.authenticated) {
      var token = {}; // TODO: JWT

      returnData.userDisplayName = response.userData.displayName;
      returnData.token = token;
    }
    res.status(200).json(returnData);
  });
};