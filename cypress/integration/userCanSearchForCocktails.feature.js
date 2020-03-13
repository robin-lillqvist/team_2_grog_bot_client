describe("User can search for cocktails by selecting virgin ingredient", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/ingredients",
      response: "fixture:ingredients_response.json"
    });

    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/cocktails",
      params: {
        q: "Orange"
      },
      response: "fixture:cocktail_list_response.json"
    });

    cy.visit("/");
  });

  it("user can select an ingredient", () => {
    cy.get("#ingredients_index").select("Orange");
    cy.get("button")
      .contains("Submit")
      .click();
  });

  it("user can see list of cocktails", () => {
    cy.get("#cocktail_list").should("contain", "Apricot Lady");
  });
});
