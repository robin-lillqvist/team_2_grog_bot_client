describe("User can search for cocktails by selecting virgin ingredient", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/ingredients",
      response: "fixture:ingredients_response.json"
    });
    cy.visit("/");
  });

  it("user can select an ingredient", () => {
    cy.get("#ingredients_index").select("Orange");
    cy.get("button").contains("Submit").click();
    
  });
});
