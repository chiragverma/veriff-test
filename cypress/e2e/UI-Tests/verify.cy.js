import '../../support/commands.js';
import selectors from '../../support/selectors.js';
import testData from '../../fixtures/data.json'

const url = ("https://demo.saas-3.veriff.me/")

testData.forEach((testCase) => {
    describe('Verify User', () => {

     beforeEach(() => {
        cy.visit(url);
     });

     it('Should display the verification page once the user hits verify me', () => {
      cy.get(selectors.fullName).clear().type(testCase.Name);
      cy.get(selectors.language).click()
      cy.get(selectors.languageDropdown).contains(testCase.Language).then(option => {
      option[0].click();
      // After click, it should hold the text of the selected option
      cy.get(selectors.language).contains(testCase.Language)
      });
      cy.get(selectors.country).type(testCase.Country).type('{enter}')
      cy.get(selectors.document).click()
      cy.get(selectors.documentDropdown).contains(testCase.Document).then(option => {
      option[0].click();
      // After click, it should hold the text of the selected option
      cy.get(selectors.document).contains(testCase.Document)
      });
      cy.get(selectors.launchVeriff).check(testCase.launchVeriff)
      cy.get(selectors.submit).click()
      cy.contains(testCase.Message)
});
});
});