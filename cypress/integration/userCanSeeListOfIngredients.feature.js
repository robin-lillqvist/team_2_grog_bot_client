describe("User can see a list of ingredients", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/ingredients",
      response: "fixture:ingredients_response.json"
    });
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("#ingredients_index").within(() => {
      cy.contains("Whipping cream");
      cy.contains("Coffee");
      cy.contains("Ginger ale");
      cy.contains("Pineapple juice");
    });
  });
});
