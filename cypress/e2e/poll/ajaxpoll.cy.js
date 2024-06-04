describe('Ajax Poll', () => {

    beforeEach(() => {
        cy.visit('ajax_poll.jsf')
    })

    it('Página ao abrir.', () => {
        cy.title().should('be.equals', 'Ajax Poll')
        init()
    })
})

function init() {
    cy.get('#formularioAjaxPoll\\:label_contador')
        .should('have.text', 'Contador:')
        .should('have.css', 'font-weight', '700')

    cy.get('#formularioAjaxPoll\\:txtCount')
        .should('have.text', '0')
}