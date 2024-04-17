export {};

// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable<Subject> {
//       getDataTest(value: string): Chainable<Subject>
//       //login(email: string, password: string): Chainable<void>
//      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       //dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       //visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


declare global {
 namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.('greeting')
       */
      getDataTest(value: string): Chainable<JQuery<HTMLElement>>
      getResultField(): Chainable<JQuery<HTMLElement>>
      pressFive(): Chainable<JQuery<HTMLElement>>
      pressEqual(): Chainable<JQuery<HTMLElement>>
      pressClear(): Chainable<JQuery<HTMLElement>>
    }
  }
}


Cypress.Commands.add('getDataTest', (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('getResultField', () => {
  return cy.getDataTest('result-field')
})

Cypress.Commands.add('pressFive', () => {
  cy.getDataTest('button-5').click()
})

Cypress.Commands.add('pressEqual', () => {
  cy.get('[data-test="operator-="]').click()
})

Cypress.Commands.add('pressClear', () => {
  cy.getDataTest('button-c').click()
})
