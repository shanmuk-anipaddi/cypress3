// describe("This is Shadow test", () => {
//   //   beforeEach(() => {
//   //     cy.visit("https://books-pwakit.appspot.com/");
//   //   });
//   before(() => {
//     cy.visit("https://books-pwakit.appspot.com/");
//   });

//   it("This is Shadow test in it", () => {
//     cy.get("book-app")
//       .shadow()
//       .find("app-header")
//       .find(".toolbar-bottom")
//       .find("book-input-decorator")
//       .find("#input")
//       .type("Science")
//       .click()
//       .url("contains", "explore?q=science");
//   });
// });

describe("Example to demonstrate the handling of Shadow Dom in Cypress", () => {
  it("Sit opening", () => {
    cy.visit("https://books-pwakit.appspot.com/");
  });

//   it("Input a text in the input box and after search validate the URL", () => {
//     cy.get("book-app") //1
//       .shadow() //2
//       .find("app-header") //3
//       .find(".toolbar-bottom") //4
//       .find("book-input-decorator") //5
//       .find("#input") //6
//       .type("Science")
//       .click()
//       .url("contains", "explore?q=Science");
//   });

    it("Run this block only Science", () => {
      cy.get("book-app")
        .find("#input", { includeShadowDom: true })
        //.type("science", { force: true })
        .type("science")
        .click()
        //.url("include", "explore?q=science");
        .url("eq", "explore?q=science");
    });

    it("Clear ", () => {
        cy.get("book-app")
          .find("#input", { includeShadowDom: true })          
          .clear()
    });

    it("Run this block only Technology ", () => {
        cy.get("book-app")
          .find("#input", { includeShadowDom: true })
          //.type("science", { force: true })          
          .type("Technology")
          .click()          
          .url("eq", "explore?q=Technology");
      });
});
