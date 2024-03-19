describe("Levels", () => {
  const levelAnswers = {
    1: "justify-content: flex-end;",
    2: "justify-content: center;",
    3: "justify-content: space-around;",
    4: "justify-content: space-between;",
    5: "align-items: flex-end;",
    6: "justify-content: center;\nalign-items: center;",
    7: "justify-content: space-around;\nalign-items: flex-end;",
    8: "flex-direction: row-reverse;",
    9: "flex-direction: column;",
    10: "flex-direction: row-reverse;\njustify-content: flex-end;",
    11: "flex-direction: column;\njustify-content: flex-end;",
    12: "flex-direction: column-reverse;\njustify-content: space-between;",
    13: "flex-direction: row-reverse;\njustify-content: center;\nalign-items: flex-end;",
    14: "order: 2;",
    15: "order: -1;",
    16: "align-self: flex-end;",
    17: "order: 2;\nalign-self: flex-end;",
    18: "flex-wrap: wrap;",
    19: "flex-direction: column;\nflex-wrap: wrap;",
    20: "flex-flow: column wrap;",
    21: "align-content: flex-start;",
    22: "align-content: flex-end;",
    23: "flex-direction: column-reverse;\nalign-content: center;",
    24: "flex-direction: column-reverse;\nflex-wrap: wrap-reverse;\nalign-content: space-between;\njustify-content: center;",
    25: "flex-direction: column-reverse;\nflex-wrap: wrap-reverse;\nalign-content: space-between;\njustify-content: center;",
  };
  const numberOfLevels = Object.keys(levelAnswers).length

  for (let level = 1; level <= numberOfLevels; level++) {
    it(`should allow us to pass level ${level} after we complete the level`, () => {
      cy.setLevel(level - 1);
      cy.visit("index.html");

      const levelCode = levelAnswers[level];
      cy.get("#code").type(levelCode);
      cy.get("#code").should("have.value", levelCode);
      cy.get("#next").should("not.have.class", "disabled");
      cy.get("#next").click();
      if (level < numberOfLevels) {
        cy.get("#level-indicator .current").should("have.text", `${level + 1}`);
      } else {
        cy.get("#instructions").should("contain", "You win!");
      }
    });
  }
});
