/// <reference types="Cypress" />

const ENDPOINT = "/default/getEmojis";

describe("Emoji Search app", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport("ipad-2", "landscape");
    });

    it("successfully renders the page header", () => {
        cy.contains("Emoji Search");
    });

    it("renders the list of emojis", () => {
        cy.get("[data-cy='emoji-row']").should("have.length", 20);
    });

    it("allows users to search for an emoji", () => {
        cy.get("[data-cy='emoji-search-input']").type("joy");
        cy.get("[data-cy='emoji-row']").should("have.length", 2);
        cy.contains("Joy Cat");
        cy.contains("Joystick");

        cy.get("[data-cy='emoji-search-input']")
            .clear()
            .type("cactus");
        cy.get("[data-cy='emoji-row']").should("have.length", 1);
        cy.contains("Cactus");
    });

    it('shows a "emoji not found" message', () => {
        cy.get("[data-cy='emoji-search-input']").type(
            "emoji that does not exist"
        );
        cy.get("[data-cy='emoji-row']").should("have.length", 0);
        cy.contains("Emojis not found");
        cy.contains("Try searching for something else");
    });
});
