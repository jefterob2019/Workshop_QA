describe('registro_alurapic', () => {

    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com/');

    })


    it('valida_processo_login', () => {
        cy.get(`input[formcontrolname="userName"]`).type(`teste2`);
        cy.get(`input[formcontrolname="password"]`).type(`12345678`);
        cy.contains(`button`, `login`).click();
    })

    it.only('valida_excluir_upload', () => {
        cy.get(`input[formcontrolname="userName"]`).type(`teste2`);
        cy.get(`input[formcontrolname="password"]`).type(`12345678`);
        cy.contains(`button`, `login`).click();
        cy.get('.img-thumbnail').click();
        cy.get('.form-control').type("teste de comentaio");
        cy.get('.btn').click();
        cy.get('.navbar > :nth-child(3) > :nth-child(3)').click();
        
       
    })
})