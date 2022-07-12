import '../../support/commands.js';
import selectors from '../../support/selectors.js';
import testData from '../../fixtures/userdata.json'

const url = ("https://demo.saas-3.veriff.me/")

testData.forEach((testCase) => {
    describe('Verify User', () => {

     beforeEach(() => {
        cy.visit(url);
     });

     it('Should display the verification page once the user hits verify me', () => {
      cy.get(selectors.fullName).clear().type(testCase.name);
      cy.get(selectors.language).click()
      cy.selectfromDropdown(selectors.languageDropdown, testCase.language, selectors.language)
      cy.get(selectors.country).type(testCase.country).type('{enter}')
      cy.get(selectors.document).click()
      cy.selectfromDropdown(selectors.documentDropdown, testCase.document, selectors.document)
      cy.get(selectors.launchVeriff).check(testCase.launchVeriff)
      cy.get(selectors.submit).click()
      //it checks if the verification message appears
      cy.get(selectors.headerOne).contains(testCase.headerOne)
      // it checks if the scar QR message appears
      cy.get(selectors.headerTwo).contains(testCase.headerTwo)
});
});
});