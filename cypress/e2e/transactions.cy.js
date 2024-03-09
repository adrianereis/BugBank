/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

beforeEach(()=> {
       cy.visit('https://bugbank.netlify.app/')
    })

describe('Acessar Bug Bank e cadastrar contas', () => {
          
     it('Clicar em Registrar', () => {
        cy.contains('Registrar').click()
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2) > input[placeholder="Informe seu e-mail"]').type('testeqauser@gmail.com',{force: true})
        cy.get('input[placeholder="Informe seu Nome"]').type('Teste',{force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true})
        cy.get('#toggleAddBalance').click({force: true})
        cy.contains('Cadastrar').click({force: true})


        //coletar dados da conta criada
        cy.get('#modalText').should('be.visible')

        cy.get('#modalText').invoke('text').then((text) => {
            const numeroDaContaA = text.trim()
        
        // Armazenar o número da conta em cache para uso posterior
        cy.wrap(numeroDaContaA).as('numeroDaContaA')
          })

        cy.contains('Fechar').click({force: true})
        })

        it('Clicar em Registrar', () => {
            cy.contains('Registrar').click()
            cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > :nth-child(2) > input[placeholder="Informe seu e-mail"]').type('hodotom368@hidelux.com',{force: true})
            cy.get('input[placeholder="Informe seu Nome"]').type('User2',{force: true})
            cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true})
            cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true})
            cy.get('#toggleAddBalance').click({force: true})
            cy.contains('Cadastrar').click({force: true})
    
    
            //coletar dados da conta criada
            cy.get('#modalText').should('be.visible')
    
            cy.get('#modalText').invoke('text').then((text) => {
                const numeroDaContaB = text.trim()
            
            // Armazenar o número da conta em cache para uso posterior
            cy.wrap(numeroDaContaB).as('numeroDaContaB')
              })
    
            cy.contains('Fechar').click({force: true})
        })

        it('Acessar a conta', () => {
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('testeqauser@gmail.com',{force: true})
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true})
            cy.contains('Acessar').click()
            /* Verifica se o usuário foi redirecionado para a página da conta
            cy.url().should('include', '/home')*/
            })
    
            
 })

           