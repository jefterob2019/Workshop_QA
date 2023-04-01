describe('registro_alurapic', () => {

    beforeEach(() => {

        cy.visit('https://alura-fotos.herokuapp.com/');

    })


    it('valida_minimum_length_username', () => {
        cy.contains('a', `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="userName"]`).type(`b`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Mininum length is 2`).should(`be.visible`);

    }
    )

    it('valida_max_length_username', () => {
        cy.contains('a', `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="userName"]`).type(`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Maximun length is 30`).should(`be.visible`);

    }
    )

    it('valida_minimum_length_password', () => {
        cy.contains('a', `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="password"]`).type(`b`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Mininum length is 8`).should(`be.visible`);

    }
    )

    it('valida_max_length_password', () => {
        cy.contains('a', `Register now`).click();
        cy.contains(`button`, `Register`).click();
        cy.get(`input[formcontrolname="password"]`).type(`asasasasasasasasasas`);
        cy.contains(`button`, `Register`).click();
        cy.contains(`ap-vmessage`, `Maximun length is 18`).should(`be.visible`);

        
    })

    it('valida_processo_registro', () => {
        cy.contains('a', `Register now`).click();
        cy.get(`input[formcontrolname="email"]`).type(`teste2@email.com`);
        cy.get(`input[formcontrolname="fullName"]`).type(`usuario teste`);
        cy.get(`input[formcontrolname="userName"]`).type(`teste2`);
        cy.get(`input[formcontrolname="password"]`).type(`12345678`);
        cy.contains(`button`, `Register`).click();
        //cy.get(`input[formcontrolname="userName"]`).type(`teste2`);
        //cy.get(`input[formcontrolname="password"]`).type(`12345678`);Username already taken
        cy.contains(`ap-vmessage`, `Username already taken`).should(`be.visible`);
        cy.get('.navbar-text').click();
    })
})
