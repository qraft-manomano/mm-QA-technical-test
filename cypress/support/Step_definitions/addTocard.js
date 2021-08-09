import CartPage from '../PageObjects/cartpage';
import CheckoutPage from '../PageObjects/checkoutPage';
const checkoutpage = new CheckoutPage();
const cartpage = new CartPage(); 
 
 let firstNameProducto;
 let secondNameProduct;
 let firstPrice;
 let secondPrice;
 let total;

When ('I select a categories',() => {
    cy.Click(cartpage.category() )

})

And ('I add to cart the first product' , () => {

    cy.Click(cartpage.firstproduct() )
    cy.get('.name').invoke('text').then((productName) => { 
        firstNameProducto = productName
        cy.log('The product name is : ' + productName)
    });
    cy.get('.price-container').invoke('text').then((productPrice) => { 
        firstPrice = productPrice
        cy.log('The price is : ' + productPrice)
    });
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000)    
})

And ('I add to cart the second product' , () => {
    cy.Click(cartpage.secondproduct() )
    cy.get('.name').invoke('text').then((productName) => { 
        secondNameProduct = productName
         cy.log('The product name is : ' + productName)
     });
     cy.get('.price-container').invoke('text').then((productPrice) => { 
        secondPrice = productPrice
         cy.log('The price is : ' + productPrice)
     });
     cy.get('.col-sm-12 > .btn').click()
     cy.wait(1000)    
})

And ('I go to home' , () => {
    cy.get('.active > .nav-link').click()
})

And ('I open the cart' , () => {
    cy.Click(checkoutpage.cart() )
    cy.wait(3000) 
})

Then ('I validate my items', () => {
    var regex = /(\d+)/g;
    total = parseInt(firstPrice.match(regex)) +  parseInt(secondPrice.match(regex))
    cy.get('#totalp').invoke('text').then((totalPrice) => { 
        if(total == totalPrice){
            cy.log("The products has been added correctly")
        }
     });
})
