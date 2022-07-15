/**
 * Below are some helpful commands for dealing with iframes
 * in the Cypress framework - currently there is no native support.
 */

Cypress.Commands.add('getIframeBody', () => {
    return cy
        .get('#main-iframe', { timeout: 10000, log: false })
        .its('0.contentDocument.body', { log: false }).should('not.be.empty')
        .then((body) => cy.wrap(body, { log: false }))
})

Cypress.Commands.add('getSpecificIframeBody', (iframeClass) => {
    return cy
        .get('#main-iframe', { timeout: 10000, log: false })
        .its('0.contentDocument.body', { log: false }).should('have.class', iframeClass).should('not.be.empty')
        .then((body) => cy.wrap(body, { log: false }))
})

Cypress.Commands.add('getiframeBodyWithSrc', (pageContainsUrl) => {
    return cy
        .get('span[main-iframe-content-url*="' + pageContainsUrl + '"]', { timeout: 10000, log: false })
        .find('#main-iframe', { timeout: 10000, log: false })
        .its('0.contentDocument.body', { log: false }).should('not.be.empty')
        .then((body) => cy.wrap(body, { log: false }))
})

Cypress.Commands.add('getModalIframeBody', () => {
    return cy
        .get('#modal-iframe', { timeout: 10000, log: false })
        .its('0.contentDocument.body', { log: false }).should('not.be.empty')
        .then((body) => cy.wrap(body, { log: false }))
})

Cypress.Commands.add('Login', function (username, password) {
    cy.visit(Cypress.env('host'))
    
})

Cypress.Commands.add('Logout', function () {
    //Insert Logout test steps here
})