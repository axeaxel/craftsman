describe('check the delete function', () => {
    it('checks if the user can delete a computer from the list', () => {
      cy.visit('http://computer-database.herokuapp.com/computers')
      
      //Navigate to the home page and edit the first computer from the list after adding the computer
      cy.get('a#add.btn.success').click()
      .should('be.visible')

      //Add a new computer
      //Fill in the name
      cy.get('input#name')
      .should('be.visible')
      .type('AA Test Computer')

      //Create and save the new computer
      cy.contains('Create this computer').click()

      //Click on the first element and edit the computer first in the list
      cy.get('a')
      .should('be.visible')
      .eq(6)
      .click()
      
      //Delete the computer by clicking on the delete button
      cy.contains('Delete this computer')
      .should('be.visible')
      .click()      
    })
})