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

    it("allows users to search for an emoji", () => {
        cy.get("[data-cy='emoji-search-input']").type("joy");
        cy.get("[data-cy='emoji-row']").should("have.length", 3);
        cy.contains("Joy");
        cy.contains("Joy Cat");
        cy.contains("Joystick");

        cy.get("[data-cy='emoji-search-input']")
            .clear()
            .type("cactus");
        cy.get("[data-cy='emoji-row']").should("have.length", 1);
        cy.contains("Cactus");
    });
});
