describe('check home page', () => {
    it('checks if the user can access the home page', () => {
      cy.visit('http://computer-database.herokuapp.com/computers')
      
      //Navigate to the home page and check if the user can click on the 'add computer button'
      cy.get('a#add.btn.success').click()
      .should('be.visible')
    })
})