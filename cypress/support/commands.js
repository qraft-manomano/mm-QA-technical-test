// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//DO CLICK 
Cypress.Commands.add("Click", (obj, msj) => {
    cy.log(msj) | cy.wait(300) | cy.get(obj).should('be.visible').click()
 })
 
//SET TEXT
Cypress.Commands.add("SetText", (obj, text, msj) => {
    cy.log(msj+' : ' + text) | cy.wait(300) | cy.get(obj).then(elem => {elem.val(text);})
})
