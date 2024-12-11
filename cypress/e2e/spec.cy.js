describe('TODOMvc App', () => {
  it('Verifica se app está abrindo', () => {
    cy.visit('')
  })

  it('Insere uma tarefa', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1) 
      .first()
      .should('have.text', 'TP2 de Engenharia de Software'); 
  });

  it('Insere e deleta uma tarefa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 0);
  });

  it('Filtra tarefas completas e ativas', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de ES{enter}')
      .type('Prova de ES{enter}');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .first()
      .click();

    cy.get('[data-cy=filter-active-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'Prova de ES');

    cy.get('[data-cy=filter-completed-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'TP2 de ES');

    cy.get('[data-cy=filter-all-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2);
  });

  it('Limpa tarefas completas', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('Comprar Trembolona{enter}')
      .type('Comprar Whey{enter}')
      .type('Comprar Creatina{enter}');
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(0)
      .click();
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(1)
      .click();
    
    cy.get('.clear-completed')
      .click();

  });

  it('Edita um tarefa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('Hackear a NASA{enter}')
      .type('Acordar{enter}')
    
    cy.get('li label')
      .contains('Hackear a NASA')
      .dblclick();
    
    cy.get('li.editing .edit')
      .clear()
      .type('Sonhar que hackeou a NASA{enter}');
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(0)
      .click();
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(1)
      .click();
  });

  it('Marca e desmarca todos as tarefas', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('Acordar{enter}')
      .type('Tomar metoprolol(Remedio Coraçao){enter}')
      .type('Estudar para a prova de ES{enter}');
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(0)
      .click();
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(1)
      .click();

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(2)
      .click();
    
      cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(0)
      .click();
    
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(1)
      .click();

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .eq(2)
      .click();
  });
});