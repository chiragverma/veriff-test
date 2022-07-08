import '../../support/commands.js';

const url = ("https://demo.saas-3.veriff.me/")

describe('Stripe Payment Authentication Fails', () => {
  beforeEach(() => {
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("url");
      cy.visit(response.body.url);
      cy.url().should("contains", "https://checkout.stripe.com/pay/");
    });
  });

  it('Should display authentication fail message after payment form submit', () => {
    // mocking payment method endpoint
    cy.intercept('POST', 'https://api.stripe.com/v1/payment_methods', (req) => {
      req.reply({
      statusCode: 200,
      fixture: 'payment-method-response.json' //file with mocked response
      })})
      
    // mocking confirm payment method endpoint
    cy.intercept('POST', 'https://api.stripe.com/v1/payment_pages/*/confirm', (req) => {
      req.reply({
      statusCode: 200,
      fixture: 'confirm-auth-response.json' //file with mocked response
      })})
      
      // fill out all the checkout form fields
      cy.fillCheckout()
      //assert if the authentication fail message appears
      cy.contains('We are unable to authenticate your payment method. Please choose a different payment method and try again.')    
})
});