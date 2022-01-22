describe('check the edit function', () => {
    it('checks if the user can edit a computer from the list', () => {
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
      
      //Edit the computer by filling the information below
      //introduced date
      cy.get('input#introduced')
      .should('be.visible')
      .type('2022-02-03')

      //discontinued date
      cy.get('input#discontinued')
      .should('be.visible')
      .type('2022-02-03')

      //Select a company from the dropdown
      cy.get('select#company')
      .should('be.visible')
      .select('1')

      //Create and save the new computer
      cy.contains('Save this computer').click()
    })
})