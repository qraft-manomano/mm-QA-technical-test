import CheckoutPage from '../PageObjects/checkoutPage';
const checkoutpage = new CheckoutPage();
let dataPool;


Given ('I want to buy my items' , () => {
    cy.wait(2000)
})

When ('I place order' , () => {
    cy.Click(checkoutpage.placeOrder() )
    cy.wait(2000)
})

Then ('I see the place order popup {string}' , (checkout) => {
    //Invoke data from checkout.json
    cy.fixture(checkout).then((data) => {
        dataPool = data;
    })  
    cy.get(checkoutpage.modal() )

})

And ('I write Name' , () => {
    cy.SetText(checkoutpage.name(), dataPool.name, 'Name user: ' + dataPool.name)

})

And ('I Write Country' , () => {
    cy.SetText(checkoutpage.country(), dataPool.country, 'Contry user: ' + dataPool.country)

})

And ('I write City' , () => {
    cy.SetText(checkoutpage.city(), dataPool.city, 'City user: ' + dataPool.city)

})

And ('I write Credit card' , () => {
    cy.SetText(checkoutpage.card(), dataPool.card, 'Credit card: ' + dataPool.card)

})

And ('I write Month' , () => {
    cy.SetText(checkoutpage.month(), dataPool.month, 'Month: ' + dataPool.month)

})

And ('I write Year' , () => {
    cy.SetText(checkoutpage.year(), dataPool.year, 'Year: ' + dataPool.year)
    cy.get("#year").scrollIntoView().should('be.visible')

})

And ('I click purchase' , () => {
    cy.Click(checkoutpage.confirmbtn() )

})

Then ('I see order confirmation' , () => {
    cy.get(checkoutpage.confirmmodal())

})