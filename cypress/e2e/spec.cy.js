describe('Questionnaire', () => {
    beforeEach(() => {
      cy.visit('/questionnaire');
    });
  
    it('adds a question', () => {
      cy.get('button').contains('Add Question').click();
      cy.get('input[type="text"]').first().type('What is your name?');
      cy.get('input[type="text"]').eq(1).type('John Doe');
      cy.get('textarea').type('John,Jane,Bob');
      cy.get('button').contains('Save').click();
      cy.get('td').contains('What is your name?').should('exist');
    });
  
    it('shows and hides the answer', () => {
      cy.get('button').contains('Show Answer').click();
      cy.get('span').contains('John Doe').should('exist');
      cy.get('button').contains('Show Answer').click();
      cy.get('span').contains('John Doe').should('not.exist');
    });
  
    it('edits a question', () => {
      cy.get('button').contains('Edit').first().click();
      cy.get('input[type="text"]').first().clear().type('What is your age?');
      cy.get('button').contains('Save').click();
      cy.get('td').contains('What is your age?').should('exist');
    });
  
    it('deletes a question', () => {
      cy.get('button').contains('Delete').first().click();
      cy.get('td').contains('What is your name?').should('not.exist');
    });
  });
  