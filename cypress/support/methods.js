
//GET A RANDOM NUMBER FROM [0-2-4-6]
Cypress.Commands.add("GetRandomOptioMenu", () => {  
    let result           = '';
    let numbers       = '0';
    let numbersLength = numbers.length;
    for ( let i = 0; i < 1; i++ ) {
       result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    return  result;
})

//WRITE A RANDOM DATA IN JSON
Cypress.Commands.add("WhiteRandomData", () => {  
    const names = ["Manuel", "Joan", "Francisco", "Jose", "Fernando", "Judit", "Montserrat"];
    const random = Math.floor(Math.random() * names.length);
    const randomNumber = Math.floor(Math.random() * (10000000000000 - 1)) + 1;
    cy.writeFile('cypress/fixtures/register.json', 
    {
        username: names[random]+randomNumber,
        password: "Testing"
    })
})
