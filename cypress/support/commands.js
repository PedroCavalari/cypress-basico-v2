Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Cavalari')
    cy.get('#email').type('pedro@email.com')
    cy.get('#open-text-area').type('texto')
    cy.contains('button', 'Enviar').click()
})