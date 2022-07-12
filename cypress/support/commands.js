// -- This is a common function to check if the response has a success message
Cypress.Commands.add('checkResponseMessage', (response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.not.be.null
    expect(response.headers['content-type']).to.include('application/json')
})

// -- Dropdown function
Cypress.Commands.add('selectfromDropdown', (fieldLocator, selectOption, optionLocator) => {
    cy.get(fieldLocator).contains(selectOption).then(option => {
    option[0].click();
    // After click, it should hold the text of the selected option
    cy.get(optionLocator).contains(selectOption)
    });
})
