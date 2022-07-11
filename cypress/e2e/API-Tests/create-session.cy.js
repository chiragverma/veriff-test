import '../../support/commands.js';

const url = ("https://demo.saas-3.veriff.me/")

const body = {
  full_name: "Aurelia Bevvy", lang: "en", document_country: "CA", document_type: "PASSPORT"
}

describe('Create session', () => {

  let sessionId = null
    
  it('Should create a new session', () => {
    cy.request({
        method: 'POST',
        url: url,
        body: body

    }).then((response) => {
        cy.checkResponseMessage(response)
        expect(response.body).to.have.property('integrationUrl').equal('https://magic.saas-3.veriff.me')
        expect(response.body).to.have.property('sessionToken')
        sessionId = response.body.sessionToken
        //Write the id into a fixtures file
        cy.writeFile('cypress/fixtures/testdata.json', { id: sessionId })
        }).then(function () {
    })
  })
});