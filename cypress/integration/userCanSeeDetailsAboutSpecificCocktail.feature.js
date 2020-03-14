describe("User can search for cocktails by selecting virgin ingredient", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/ingredients",
      response: "fixture:ingredients_response.json"
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/cocktails**",
      response: "fixture:cocktail_list_response.json"
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/cocktails/12402",
      response: "fixture:specific_cocktail_response.json"
    });

    cy.visit("/");
  });

  it("user can see list of cocktails", () => {
    cy.get("#ingredients_index").select("Orange");
    cy.get("button")
      .contains("Submit")
      .click();
    cy.get("#cocktail_list").should("contain", "Tom Collins");
    cy.get("button")
      .contains("Tom Collins")
      .click();
    cy.get("#cocktail_header").should("contain", "Tom Collins");
    cy.get("#cocktail_category").should("contain", "Ordinary Drink");
  });
});
