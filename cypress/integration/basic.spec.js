/// <reference types="Cypress" />

describe("Emoji Search app", () => {
    it("successfully renders the page header", () => {
        cy.visit("/");
        cy.contains("Emoji Search");
    });
});
