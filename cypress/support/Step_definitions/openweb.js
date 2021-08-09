let dataPool;


Given ('I open navigator {string}',(url) => {
    cy.fixture(url).then((data) => {
        dataPool = data;
        cy.visit(data.mainpage);
    })
    cy.wait(2000)
 })
