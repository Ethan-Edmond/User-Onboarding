
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
  it("Gets the password input, then types a password into it", () => {
    cy.get("input[name=password]").type("asdfjdlvklad").should("have.value", "asdfjdlvklad");
  });
  it("Clicks the checkbox", () => {
    cy.get("input[name=terms]").click().should("be.checked");
  });
  it("Submits the form", () => {
    cy.contains("Submit").click();
    cy.contains("User: Ethan").should("exist");
  });
});
