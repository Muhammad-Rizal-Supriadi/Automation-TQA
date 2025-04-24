/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe("Test Automation Login - Various Conditions", () => {

    beforeEach(() => {
        cy.baseURL();
    });

    it("User input correct username and password", function() {
        cy.fixture('loginData.json').then((loginData) => {
            const validData = loginData[0];
            cy.login(validData.username, validData.password);
            cy.url().should('include', validData.expectedUrl);
            cy.get('.heading2 > span').should('have.text', validData.expectedMessage);
        });
    });

    it("User input username but don't input password", function() {
        cy.fixture('loginData.json').then((loginData) => {
            const invalidData = loginData[1]; 
            cy.login(invalidData.username, invalidData.password);
            cy.get('.alert').should('contain', invalidData.expectedError);
        });
    });

    it("User don't input username but input password", function() {
        cy.fixture('loginData.json').then((loginData) => {
            const invalidData = loginData[2];
            cy.login(invalidData.username, invalidData.password);
            cy.get('.alert').should('contain', invalidData.expectedError);
        });
    });

    it("User input correct username and wrong password", function() {
        cy.fixture('loginData.json').then((loginData) => {
            const invalidData = loginData[3]; 
            cy.login(invalidData.username, invalidData.password);
            cy.get('.alert').should('contain', invalidData.expectedError);
        });
    });

    it("User input wrong username and wrong password", function() {
        cy.fixture('loginData.json').then((loginData) => {
            const invalidData = loginData[4]; 
            cy.login(invalidData.username, invalidData.password);
            cy.get('.alert').should('contain', invalidData.expectedError);
        });
    });

});
