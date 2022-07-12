import '../../support/commands.js';
import testdata from '../../fixtures/testdata.json'

const url = ("https://magic.saas-3.veriff.me/api/v2/sessions")

describe('Get session', () => {
    
  it('Should get session', () => {
    cy.request({
        method: 'GET',
        url: url,
        headers: {
          authorization: 'Bearer ' + testdata.id
        }
        
    }).then((response) => {
        cy.checkResponseMessage(response)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('status').equal('created')
        // checking if it has the property initData
        expect(response.body).to.have.property('initData')
        // then checking if the initData has the values inside
        expect(response.body.initData.language).equal('en')
        expect(response.body.initData.preselectedDocument.country).equal('CA')
        expect(response.body.initData.preselectedDocument.type).equal('PASSPORT')
         // checking if it has the property initData
        expect(response.body).to.have.property('vendorIntegration')
        // then checking if the initData has the values inside
        expect(response.body.vendorIntegration).to.have.property('id')
        expect(response.body.vendorIntegration).to.have.property('name')
        expect(response.body.vendorIntegration).to.have.property('publicName')
    })
  })
});