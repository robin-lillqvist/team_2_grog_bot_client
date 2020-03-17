describe("User can search for cocktails by selecting virgin ingredient", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/ingredients",
      response: "fixture:ingredients_response.json"
    });

    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/cocktails**",
      response: "fixture:cocktail_list_response.json"
    });

    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/cocktails/12402",
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
    cy.get("#specific-cocktail-container").within(() => {
      cy.get(".header")
        .contains("Tom Collins");
        cy.get(".meta").contains("Ordinary Drink");
        cy.get(".description").contains("Gin 2 oz");
        cy.get(".extra.content").contains(
          "Instructions: In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar."
        )
        cy.get(".extra.content").contains("Glass: Collins glass");
    });
    
  });
});
