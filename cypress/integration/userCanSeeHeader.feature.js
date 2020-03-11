describe("user views menus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("displays About Me header", () => {
    cy.get("h1").should("contain", "Grog-Bot");
  });
});
