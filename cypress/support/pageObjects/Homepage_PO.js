class HomePage_PO{
    visitHomepage(){
        cy.visit(Cypress.env('baseUrl'));
    }
}

export default HomePage_PO;