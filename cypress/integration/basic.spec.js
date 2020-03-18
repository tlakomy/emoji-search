describe("my first e2e test", () => {
    it("actually works", () => {
        cy.visit("/");
        cy.contains("Emoji Search");
    });
});
