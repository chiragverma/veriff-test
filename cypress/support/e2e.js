Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Cypress.config('defaultCommandTimeout',6000)