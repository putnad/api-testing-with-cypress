describe('automate testing web', () => {

    it('test case 1', () => {
      cy.visit('https://yopmail.com/en/')
      cy.get('#login').type('Binar')
      cy.get('#refreshbut > .md > .material-icons-outlined').click()
      cy.get('#message').should('contain', 'This inbox is empty')
      cy.get('#ifmail')
      cy.log('How to use YOPmail')
    })

    it.only('test case 2', () => {
      cy.visit('https://yopmail.com/en/')
      cy.get('#login').type('Binar')
      cy.get('#refreshbut > .md > .material-icons-outlined').click()
      cy.get('#message').should('contain', 'This inbox is empty')
      cy.get('#ifmail')
      cy.log('How to use YOPmail')
    })
})