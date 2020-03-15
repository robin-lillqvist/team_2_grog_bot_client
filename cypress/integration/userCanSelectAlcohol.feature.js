describe("User can search for alcohol", () => {
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

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/alcohols?country=Sverige**",
      response: "fixture:alcohol_list_response.json"
    });

    cy.visit("/");
  });

  it("user can see list of Swedish alcohols", () => {
    cy.get("#ingredients_index").select("Orange");
    cy.get("button")
      .contains("Submit")
      .click();
    cy.get("#cocktail_list").should("contain", "Tom Collins");
    cy.get("button")
      .contains("Tom Collins")
      .click();
    cy.get("#cocktail-container")
      .contains("Tom Collins")
      .contains("Ordinary Drink")
      .contains(
        "Instructions: In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar."
      )
      .contains("Glass: Collins glass");
    cy.get("#ingredients-container").contains("Gin 2 oz");
    cy.get("#alcohol_selector").select("Dark Rum");
    cy.get("button")
      .contains("Search")
      .click();
    cy.get("li").contains("A-Bay Spirit Palma 12 Years718,00 kr500 ml");
  });
});
