// setLevel in localStorage
Cypress.Commands.add("setLevel", (level) => {
  cy.window().then((win) => {
    win.localStorage.setItem("level", level.toString());
  });
});
