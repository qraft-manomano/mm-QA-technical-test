// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//Catch the exceptions and continue with the execution
import './commands'
import './methods'
import 'cypress-mochawesome-reporter/register';
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

//Hide navegation error 
Cypress.on('uncaught:exception',(err, runnable) => {
    return false 
})

//Set screen size 
Cypress.config({
    viewportWidth: 1366,
    viewportHeight: 768,
})

//Hide xhr the request 
Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore: (xhr) => {
        return true;
    }
})

//Keep cookie
beforeEach(function() {
  Cypress.Cookies.defaults({
    preserve: (cookies) => {
      return true;
    }
  })
})
