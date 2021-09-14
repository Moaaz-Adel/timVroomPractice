/// <reference types="cypress" />

describe("Selenium Testing Tasks solved with Cypress :D", () => {
  it("1- Grab page title and place title text in answer slot #1", () => {
    cy.title().then((pageTitle) => {
      console.log(pageTitle);
      cy.wrap(pageTitle).should("contain", "Selenium Playground");
    });
  });

  it("2- Fill out name section of form to be Kilgore Trout", () => {
    cy.get("[name='name']").type("Kilgore Trout");
  });

  it("3- Set occupation on form to Sci-Fi Author", () => {
    cy.get("#occupation").select("Science Fiction Author");
    cy.get("#occupation").should("contain", "Science Fiction Author");
  });

  it("4- Count number of blue_boxes on page after form and enter into answer box #4", () => {
    cy.get(".bluebox").then((blueBoxes) => {
      const count = Cypress.$(blueBoxes).length;
      console.log(count);
      cy.get("#answer4").type(count).should("have.value", count);
    });
  });

  it("5- Click link that says 'click me", () => {
    cy.contains("a", "click me").click();
  });

  it("9- Mark radio button on form for written book? to Yes", () => {
    cy.get('[value="wrotebook"]').check();
  });

  it("10- Get the text from the Red Box and place it in answer slot #10", () => {
    cy.get("#redbox").then((redBox) => {
      const text = redBox.text(); // Now you have the text "Backpack"
      cy.get("#answer10").type(text);
    });
  });

  it("11- Which box is on top? orange or green -- place correct color in answer slot #11", () => {
    cy.contains("h3", "Boxes to check arrangement of")
      .next()
      .next()
      .then((whatBox) => {
        const whatBoxText = whatBox.text();
        cy.get("#answer11").type(whatBoxText);
      });
  });

  it("12- Set browser width to 850 and height to 650", () => {
    cy.viewport(850, 650);
    // cy.viewport("iphone-7");
    // cy.viewport("macbook-13");
  });

  it("16- Click and Wait Game", () => {
    cy.contains("a", "click then wait").click();
    cy.contains("a", "click after wait", { timeout: 10000 });
    cy.on("window:confirm", () => true);
  });

  it("17- Click on Submit Button", () => {
    cy.get("form").submit();
  });
});
