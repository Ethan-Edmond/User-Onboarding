
describe("Cypress and url checking", () => {
  it("Sanity checks for cypress", () => {
    expect(true).to.equal(true);
  });
  it("Visits url", () => {
    cy.visit('');
  });
});

describe("MVP tests", () => {
  it("Gets the name input, then types a name into it", () => {
    cy.get("input[name=username]").type("Ethan").should("have.value", "Ethan");
  });
});
