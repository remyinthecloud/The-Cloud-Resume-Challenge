describe('Frontend Tests', () => {
    it('Loads the website', () => {
        cy.visit('https://remyinthecloud.com');
        cy.contains('Remy');
    });

    it('Displays the correct counter', () => {
        cy.request('https://nxvtfqdljcrvm4tn4tv4snjppa0yylyn.lambda-url.us-east-1.on.aws/').then((response) => {
            const apiCount = response.body + 1;
            cy.visit('https://remyinthecloud.com');
            cy.contains(apiCount.toString());
        });
    });
});
