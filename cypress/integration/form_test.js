describe("Testing our form inputs", () => {
    beforeEach(function() {
        cy.visit("http://localhost:3000")
        cy.get('.nav-links > [href="/pizza"] > button').click();
    });
    it("Add Text to Name Input", () => {
        cy.get('[data-cy=name]').type("David Viodes").should("have.value", "David Viodes");
    });
    it("Select Toppings", () => {
        cy.get('[data-cy=toppings]').select("Red Sauce").should("have.value", "redSauce");
    });
    it("Submit Form", () => {
        cy.get('[data-cy=name]').type("David Viodes").should("have.value", "David Viodes");
        cy.get('[data-cy=size]').select("Large").should("have.value", "large");
        cy.get('[data-cy=toppings]').select("Red Sauce").should("have.value", "redSauce");
        cy.get('[data-cy=submit]').click();
    })
});