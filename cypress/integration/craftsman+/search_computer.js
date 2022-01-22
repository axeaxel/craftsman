describe('check the search function', () => {
    it('checks if the user find the new computer added', () => {
      cy.visit('http://computer-database.herokuapp.com/computers')
      
      //Navigate to the home page and check if the user can validate the new computer added by using the search function
      cy.get('a#add.btn.success').click()
      .should('be.visible')

      //Add a new computer
      //Fill in the name
      cy.get('input#name')
      .should('be.visible')
      .type('AA Test Computer')

      //Create and save the new computer
      cy.contains('Create this computer').click()

      //Fill in the search box with the name of the computer
      cy.get('input#searchbox')
      .should('be.visible')
      .type('AA Test Computer')

      //Click on the filter by name button to search for the new computer
      cy.get('input#searchsubmit.btn.primary').click()

      //Click on the first element matching the search results in the list, validating our search
      cy.get('a')
      .should('be.visible')
      .eq(6)
      .click()
    })
})