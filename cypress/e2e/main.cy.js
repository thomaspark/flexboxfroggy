describe("Main page", () => {
  it("should display the Flexbox Froggy title", () => {
    cy.visit("index.html");
    cy.get(".title").should("have.text", "Flexbox Froggy");
  });

  it("should reset progress when reset button is pressed", () => {
    cy.setLevel(10);
    cy.visit("index.html");
    cy.get(".caret").click();
    cy.get("#labelReset").click();
    cy.get("#level-indicator .current").should("have.text", "1");
  });

  it("should change language", () => {
    cy.visit("index.html");
    cy.get("#labelSettings").click();
    cy.get("#language").select("fr");
    cy.get("#instructions").should("contain", "Bienvenue à Flexbox Froggy");
  });

  it("should change difficulty to intermediate", () => {
    cy.visit("index.html");
    cy.get("#instructions").should("have.css", "display", "block");
    cy.get("#labelSettings").click();
    cy.get("#labelDifficultyMedium").click();
    cy.get("#instructions").should("have.css", "display", "none");
  });
});
