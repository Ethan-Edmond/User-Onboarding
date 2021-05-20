
describe("Cypress and url checking", () => {
  it("Sanity checks for cypress", () => {
    expect(true).to.equal(true);
  });
  it("Visits url", () => {
    cy.visit('');
  });
});

describe("MVP tests", () => {
  it("Gets the username input, then types a name into it", () => {
    cy.get("input[name=username]").type("Ethan").should("have.value", "Ethan");
  });
  it("Gets the email input, then types an email into it", () => {
    cy.get("input[name=email]").type("ethan@fakemail.com").should("have.value", "ethan@fakemail.com");
  });

});
