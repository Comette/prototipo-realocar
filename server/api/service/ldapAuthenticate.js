'use strict';

var ldap = require('ldapjs');
var LDAP_CONFIG = require('../config/ldap');

var unbindHandler = function (error) {
  if (error) {
    console.log('-! Client unbind error: ', error.message);
  } else {
    console.log('---- Closing LDAP Connection ----');
  }
}

module.exports = function (username, password) {
  var client = ldap.createClient({
    url: LDAP_CONFIG.url
  });

  var opts = {
    filter: `(&(objectCategory=user)(samaccountname=${username}))`,
    scope: 'sub',
    attributes: ['sAMAccountName', 'cn', 'displayName', 'manager', 'title', 'description', 'mail']
  };

  console.log('---- Starting LDAP Connection ----');

  return new Promise(function (resolve, reject) {
    try {
      client.bind(LDAP_CONFIG.user, LDAP_CONFIG.password, function (error) {
        if (error) {
          console.log('-! Client bind error: ', error.message);
          client.unbind(unbindHandler);
          resolve({ authenticated: false });
        } else {
          console.log('-> LDAP Connected!');

          var userData = {};

          client.search(LDAP_CONFIG.baseSearch, opts, function (error, search) {
            console.log('Searching.....');

            search.on('searchEntry', function (entry) {
              userData = entry.object;

              console.log('-> Found user: ', userData.dn);

              client.bind(userData.dn, password, function (error) {
                if (error) {
                  console.log('-! Authentication error: ', error.message);
                  client.unbind(unbindHandler);
                  resolve({ authenticated: false });
                } else {
                  console.log('-> Authentication success!');
                  client.unbind(unbindHandler);
                  resolve({ authenticated: true, userData: userData });
                }
              });
            });

            search.on('error', function (error) {
              console.error('-! Search error: ' + error.message);
              resolve({ authenticated: false });
              client.unbind(unbindHandler);
            });

            search.on('end', function (result) {
              if (!userData.hasOwnProperty("mail")) {
                console.log('-! User not found: ', username);
                resolve({ authenticated: false });
                client.unbind(unbindHandler);
              }
            });

          });
        }
      });
    } catch (error) {
      console.log('-! LDAP connection error: ', error);
      resolve({ authenticated: false });
      client.unbind(unbindHandler);
    }
  });
}


