describe('add a new computer', () => {
    it('checks if the user can add a new computer', () => {
      cy.visit('http://computer-database.herokuapp.com/computers')
      
      //Navigate to the home page, click on the add a cpmuter button and in the next section create one new insert
      cy.get('a#add.btn.success').click()
      .should('be.visible')

      //Fill in the name
      cy.get('input#name')
      .should('be.visible')
      .type('Cypres test computer')

      //Fill in the introduced date and discontinued date
      //introduced
      cy.get('input#introduced')
      .should('be.visible')
      .type('2022-02-03')

      //discontinued
      cy.get('input#discontinued')
      .should('be.visible')
      .type('2022-02-03')

      //Select a company from the dropdown
      cy.get('select#company')
      .should('be.visible')
      .select('1')

      //Create and save the new computer
      cy.contains('Create this computer').click()
    })
})