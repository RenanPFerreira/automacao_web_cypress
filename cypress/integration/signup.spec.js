
import signup from '../pages/SignupPage'

describe('Signup', () => {

  beforeEach(function () {
    cy.fixture('deliver').then((d) => {
      this.deliver = d
    })
  })

  it('User should be deliver', function () {
    signup.go()
    signup.fillForm(this.deliver.signup)
    signup.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  })

  it('Incorrect document', function () {
    signup.go()
    signup.fillForm(this.deliver.cpf_inv)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
  })
  it('Incorrect mail', function () {
    signup.go()
    signup.fillForm(this.deliver.email_inv)
    signup.submit()
    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
  })
  it('Incorret Fields', function () {
    signup.go()
    signup.submit()
    signup.alertMessageShouldBe('É necessário informar o nome')
    signup.alertMessageShouldBe('É necessário informar o CPF')
    signup.alertMessageShouldBe('É necessário informar o email')
    signup.alertMessageShouldBe('necessário informar o CEP')
    signup.alertMessageShouldBe('É necessário informar o número do endereço')
    signup.alertMessageShouldBe('Selecione o método de entrega')
    signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

  })
})