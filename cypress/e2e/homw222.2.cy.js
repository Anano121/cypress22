
describe ('automitiontestscore test cases',()=>{
    it('registration new user ',()=>{
    cy.visit('https://automationteststore.com')
    cy.contains('a','Login or register').click()
    cy.contains('.heading2','I am a new customer.').should('be.visible')
    cy.contains('#accountFrm','Continue').submit()
    cy.get('#AccountFrm_firstname').type('anano')
    cy.get('#AccountFrm_lastname').type('chezhia')
    let email='achezhia'+Math.random()+'@gmail.com'
    cy.get('#AccountFrm_email').type(email)
    cy.get('#AccountFrm_address_1').type('5th avenue')
    cy.get('#AccountFrm_city').type('NEw York')
    cy.get('#AccountFrm_zone_id').select('Angus')
    cy.get('#AccountFrm_postcode').type('1225')
    let loginname='ananochezhia'+Math.random()
    cy.get('#AccountFrm_loginname').type(loginname)
    cy.get('#AccountFrm_password').type("annao123")
    cy.get('#AccountFrm_confirm').type('annao123')
    cy.get('#AccountFrm_newsletter1').click()
    cy.get('#AccountFrm_agree').click()
    cy.get(".form-group").contains('Continue').click()
    cy.get(".heading2").contains('My Account').should('be.visible')
    
    cy.get('.menu_text').contains('Welcome back anano').should('be.visible')

    //კითხვა მაქვს ^
   // ზედა და მე-3 specials-კითხვა მაქვს


})


})