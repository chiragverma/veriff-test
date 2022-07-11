import '../../support/commands.js';

const url = ("https://magic.saas-3.veriff.me/api/v2/sessions")

describe('Get session', () => {
    
  it('Should get session', () => {
    //Access Value from Fixtures file
    cy.fixture('testdata.json').then(function (testdata) {})

    cy.request({
        method: 'GET',
        url: url,
        headers: {
          authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiZWFjOTM1MDUtN2FlMy00ODI4LWJjZGYtZWRmN2YxM2RjMjA2IiwiaWF0IjoxNjU3NTI0MDY1fQ.AncmoTZ0_vrlPkMR814YLiNc0DQ0RT42nYip9p4F2ZY'
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