// Context for E2E testing
// the context method allows us to group tests into a single block
context('Before each: 1. check status code, 2. visit page', () => {
    // Test 1
    // FINDS PAGE, LOCATES BUTTON, OPENS OVERLAY, CLOSES OVERLAY
    it('Finds "Add Resource" button on page and clicks to reveal overlay, finds "Cancel" button and clicks to close overlay', () => {
        cy.get('button.open-panel').should('have.text', 'Add New Resource').click()
        cy.get('.overlay').find('h2.heading').should('have.text', 'Add a new resource')
        cy.get('button.close-panel').should('have.text', 'Cancel').click()
    })

    // Test 2
    // OPENS OVERLAY, CHECKS TEXT FIELDS ARE EMPTY, FILLS TEXT FIELDS, CLOSES OVERLAY
    it('Opens overlay, checks inputs are empty, fills inputs with placeholder text', () => {
        cy.get('button.open-panel').should('have.text', 'Add New Resource').click()
        cy.get('input.name').should('be.empty').type('John Doe')
        cy.get('select.state').select('Washington')
        cy.get('option').log()
        cy.get('input.link').should('be.empty').type('https://www.sylarproject.com/')
        cy.get('input.image').should('be.empty').type('#')
        cy.get('button.close-panel').should('have.text', 'Cancel').click()
    })

    // TO-DO
    // OPENS OVERLAY, CHECKS TEXT FIELDS ARE EMPTY, FILLS TEXT FIELDS, SUBMITS FORM
})
