/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate product Thumbnail", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("div.thumbnail").as('productThumbnail')
      cy.get('@productThumbnail').should('have.length', 16)
      cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
  });