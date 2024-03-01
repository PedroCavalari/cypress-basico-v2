/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(function () {
    //acesso ao site 
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function () {
    //verificacao do titulo
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  //CAMPOS OBRIGATÓRIOS DO FORMULÁRIO
  it('preenche os campos obrigatórios e envia o formulário', function () {
    //texto 
    const longText = 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo'

    //insere o texto nos campos do formulario
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Cavalari')
    cy.get('#email').type('pedro@email.com')

    //insere o texto longo com delay = 0 
    cy.get('#open-text-area').type(longText, { delay: 0 })

    //clica no botao Enviar
    cy.contains('button', 'Enviar').click()

    //verifica a mensagem de envio com sucesso
    cy.get('.success').should('be.visible')
  })

  //CAMPO EMAIL INVÁLIDO
  it('exibe mensagem de erro ao submeter o formulário com um email inválido', function () {
    //texto 
    const longText = 'Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo Texto Exemplo'

    //insere o texto nos campos do formulario
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Cavalari')
    cy.get('#email').type('pedro@email,com')

    //insere o texto longo com delay = 0 
    cy.get('#open-text-area').type(longText, { delay: 0 })

    //clica no botao Enviar
    cy.contains('button', 'Enviar').click()

    //verifica a mensagem de envio com sucesso
    cy.get('.error').should('be.visible')
  })

  //CAMPO TELEFONE INVÁLIDO 
  it('campo telefone continua vazio quando preenchido com valor não-númerico', function () {
    //insere letras no campo númerico
    cy.get('#phone')
      .type('textoteste')
      .should('have.value', '')

  })

  //CAMPO TELEFONE EM BRANCO - OBRIGATÓRIO AO SELECIONAR
  it('campo telefone continua vazio quando preenchido com valor não-númerico', function () {
    //insere o texto nos campos do formulario
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Cavalari')
    cy.get('#email').type('pedro@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('texto')

    //clica no botao Enviar
    cy.contains('button', 'Enviar').click()

    //verifica a mensagem de envio com sucesso
    cy.get('.error').should('be.visible')
  })

  //PREENCHE, VALIDA E LIMPAR OS CAMPOS  
  it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
    cy.get('#firstName')
      .type('Pedro')
      .should('have.value', 'Pedro')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Cavalari')
      .should('have.value', 'Cavalari')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('pedro@email.com')
      .should('have.value', 'pedro@email.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('1234567890')
      .should('have.value', '1234567890')
      .clear()
      .should('have.value', '')
  })

  //CAMPO TELEFONE EM BRANCO - OBRIGATÓRIO AO SELECIONAR
  it('campo telefone continua vazio quando preenchido com valor não-númerico', function () {
    //insere o texto nos campos do formulario
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Cavalari')
    cy.get('#email').type('pedro@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('texto')

    //clica no botao Enviar
    cy.contains('button', 'Enviar').click()

    //verifica a mensagem de envio com sucesso
    cy.get('.error').should('be.visible')
  })

  //FORMULÁRIO EM BRANCO
  it('exibe a mensagem de erro ao submeter o formulário em branco', function () {
    //clica no botao Enviar
    cy.contains('button', 'Enviar').click()

    //verifica a mensagem de envio com sucesso
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando comando customizado', function () {
    //UTILIZA O COMANDO "fillMandatoryFieldsAndSubmit" CRIADO EM "commands.js"
    cy.fillMandatoryFieldsAndSubmit()

    //verifica a mensagem de envio com sucesso
    cy.get('.success').should('be.visible')
  })

})
