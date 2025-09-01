describe('Home Page', () => {
    it('should load successfully', () => {
        cy.visit('/');
        // Check for the hero section content
        cy.get('#home').should('be.visible');
    });

    it('should display the navigation menu', () => {
        cy.visit('/');
        cy.get('nav').should('be.visible');
        cy.contains('Skills').should('be.visible');
        cy.contains('Projects').should('be.visible');
        cy.contains('Contact').should('be.visible');
    });

    it('should navigate to different sections', () => {
        cy.visit('/');
        cy.get('a[href="#skills"]').first().click();
        cy.url().should('include', '#skills');
        cy.get('#skills').should('be.visible');
    });
});