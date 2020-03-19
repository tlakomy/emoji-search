/// <reference types="Cypress" />

describe("Emoji Search app", () => {
    it("successfully renders the page header", () => {
        cy.visit("/");
        cy.contains("Emoji Search");
    });

    it("renders the list of emojis", () => {
        cy.visit("/");
        cy.get("[data-cy='emoji-row']").should("have.length", 20);
    });
});
