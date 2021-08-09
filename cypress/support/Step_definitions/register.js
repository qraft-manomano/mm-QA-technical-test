import RegisterPage from '../../support/PageObjects/registerPage';
import LoginPage from '../../support/PageObjects/loginPage';
const registerpage = new RegisterPage();
const loginpage = new LoginPage();
let dataPool;



When ('I click signup button on the Main Page',() => {
    cy.Click(registerpage.singin() )
    })


And ('I see the register popup {string}' , (login) => {
    //Invoke data from register.json
    cy.fixture(login).then((data) => {
        dataPool = data;
    })  
    //Generate randomdata
    cy.WhiteRandomData()
    cy.Click(registerpage.modal() )
})


And ('I write username' , () => {
    cy.wait(1000)
    cy.SetText(registerpage.username(), dataPool.username, 'Name user: ' + dataPool.username)
})


And ('I write password', () => {
    cy.SetText(registerpage.password(), dataPool.password, 'Password user: ' + dataPool.password)
})


Then ('I confirm the register succesfully', () => { 
    cy.Click(registerpage.registerbtn())
    cy.wait(1000)
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Sign up successful.')
})
})


Then ('I confirm the user exist', () => {
    cy.Click(registerpage.registerbtn())
    cy.wait(1000)
    cy.on('window:alert', (str) => {
        expect(str).to.equal('This user already exist.')
})
})


When ('I click login button on the Main Page', () => {
    cy.Click(loginpage.login() )
})


And ('I see the login popup', () => {
    cy.Click(loginpage.loginmodal())
})


And ('I write my username' , () => {
    cy.SetText(loginpage.username(), dataPool.username, 'Name user: ' + dataPool.username)

})


And ('I write my password' , () => {
    cy.SetText(loginpage.password(), dataPool.password, 'Password user: ' + dataPool.password)
})


Then ('I confirm login succesfully' , () => {
    cy.Click(loginpage.loginbtn())
    cy.wait(5000)
    cy.get('#nameofuser')
    .invoke('text').then((user) => {
    if (user.includes('Welcome ' + dataPool.username)){
        cy.log('User has loged correct')
        }
      });

})
