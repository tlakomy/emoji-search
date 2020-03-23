/// <reference types="Cypress" />
import { ENDPOINT } from "./utils";

describe("Emoji Search app  - network tests", () => {
    it("displays emojis returned from the backend", () => {
        cy.visit("/");
    });
});
