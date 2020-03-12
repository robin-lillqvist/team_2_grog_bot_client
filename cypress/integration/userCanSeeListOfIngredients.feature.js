describe('User can see a list of ingredients', () => {
    before(function() {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/ingredients',
        response: 'fixture:ingredients_response.json'
      })
    //   cy.route({
    //     method: 'POST',
    //     url: 'http://localhost:3000/api/v1/auth/sign_in',
    //     response: 'fixture:login.json',
    //     headers: {
    //       "uid": "user@mail.com"
    //     }
    //   })
      cy.visit("/");
      });
  
    it('successfully', () => {
      cy.get('#ingredients_index').within(() => {
        cy.contains('Whipping cream')
        cy.contains('Coffee')
        cy.contains('Ginger ale')
        cy.contains('Pineapple juice')
      })
    })
  })