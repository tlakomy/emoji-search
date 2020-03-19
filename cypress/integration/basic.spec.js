/// <reference types="Cypress" />

describe("Emoji Search app", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("successfully renders the page header", () => {
        cy.contains("Emoji Search");
    });

    it("renders the list of emojis", () => {
        cy.get("[data-cy='emoji-row']").should("have.length", 20);
    });
});
