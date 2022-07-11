// -- This is a common function to check if the response has a success message
Cypress.Commands.add('checkResponseMessage', (response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.not.be.null
    expect(response.headers['content-type']).to.include('application/json')
})
