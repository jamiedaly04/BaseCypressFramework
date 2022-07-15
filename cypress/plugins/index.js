/// <reference types="cypress" />
var aws4 = require('aws4');
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */


/**
 * The following commands were used for making API endpoint calls, this was setup for an API making use of AWS S4 Authentication.
 */

module.exports = (on, config) => {
  on('task', {
    APIGETEndpointSetup({ endpointPath, host, accessKey, secretKey }) {

      var signedAuth = aws4.sign({
        host: host,
        path: endpointPath,
        service: 'execute-api',
        region: 'eu-west-1'
      },
        {
          accessKeyId: accessKey,
          secretAccessKey: secretKey
        })
      return signedAuth
    }
  })

  on('task', {
    APIPOSTEndpointSetup({ endpointPath, method, host, url, accessKey, secretKey, jsonData }) {

      var signedAuth = aws4.sign({
        host: host,
        url: url,
        method: method,
        path: endpointPath,
        service: 'execute-api',
        region: 'eu-west-1',
        data: jsonData,
        body: JSON.stringify(jsonData),
        headers: {
          'content-type': 'application/json'
        },
      },
        {
          accessKeyId: accessKey,
          secretAccessKey: secretKey
        })
      return signedAuth
    }
  })
}