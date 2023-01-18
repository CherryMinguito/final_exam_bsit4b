describe('Questionnaire Test', () => {

  it.only('can add,edit delete question and show answer', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=add]').eq(0).click();
    cy.get('[data-cy=qs]').eq(0).type('Who is the biggest girl group?', {force: true });
    cy.get('[data-cy=answer]').eq(0).type('BLACKPINK', {force: true });
    cy.get('[data-cy=ch]').eq(0).type('a. BLACKPINK b.Twice c.2ne1 d.Red Velvet', {force: true });
    cy.get('[data-cy=save]').eq(0).click({force: true });
    cy.get('[data-cy=show]').eq(0).click({force: true });
    cy.get('[data-cy=edit]').eq(0).click({force: true });
    cy.get('[data-cy=qs]').eq(0).type('Who is the 5th member of BLACKPINK?', {force: true });
    cy.get('[data-cy=answer]').eq(0).type('ACYL', {force: true });
    cy.get('[data-cy=ch]').eq(0).type('a.Zac b.Lisa c.ACYL d.Blinky', {force: true });
    cy.get('[data-cy=save]').eq(0).click({force: true });
    cy.get('[data-cy=delete]').eq(0).click({force: true });
  })

})