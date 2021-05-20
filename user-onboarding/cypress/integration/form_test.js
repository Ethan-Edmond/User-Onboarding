function username(){
  return cy.get("input[name=username]");
}
function email(){
  return cy.get("input[name=email]");
}
function password(){
  return cy.get("input[name=password]");
}
function terms(){
  return cy.get("input[name=terms]");
}
function submit(){
  return cy.contains("Submit");
}

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
    username().type("Ethan").should("have.value", "Ethan");
  });
  it("Gets the email input, then types an email into it", () => {
    email().type("ethan@fakemail.com").should("have.value", "ethan@fakemail.com");
  });
  it("Gets the password input, then types a password into it", () => {
    password().type("asdfjdlvklad").should("have.value", "asdfjdlvklad");
  });
  it("Clicks the checkbox", () => {
    terms().click().should("be.checked");
  });
  it("Submits the form", () => {
    submit().click();
    cy.contains("User: Ethan").should("exist");
  });
  describe("Checks that the submit button is disabled if one of the inputs is left empty", () => {
    it("username left empty", () => {
      email().type("a@a.com");
      password().type("vcekld");
      submit().should("be.disabled");
    });
    it("email left empty", () => {
      email().clear();
      username().type("dfjadsf");
      submit().should("be.disabled");
    });
    it("password left empty", () => {
      password().clear();
      email().type("a@a.com");
      submit().should("be.disabled");
    });
  });
});
describe("Stretch form validation tests", () => {
  it("password length test", () => {
    password().type("asdf");
    submit().should("be.disabled");
    password().type("a");
    submit().should("not.be.disabled");
  });
  it("password symbols test", () => {
    password().type("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-_,.+=!@#$%^&*()");
    submit().should("not.be.disabled");
    password().clear();
    password().type("aaaaa ");
    submit().should("be.disabled");
    password().clear();
    password().type("aaaaa`");
    submit().should("be.disabled");
  });
  it("email validation test", () => {
    cy.visit("");
    username().type("a");
    password().type("aaaaa");
    email().type("a@a.");
    submit().should("be.disabled");
    email().type("a");
    submit().should("not.be.disabled");
  });
});
