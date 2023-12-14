describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type("History of Sweden")
    cy.contains("Sök på Google").click()
  })
})