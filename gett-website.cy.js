describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type("SITA.dev")
    cy.contains('Sök på Google').click()
    This is my first commit
  })
})