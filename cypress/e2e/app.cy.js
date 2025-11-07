/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'

describe("Youtube App", () => {
  beforeEach(() => {
    cy.intercept("GET", /(mostPopular)/g, {
      fixture: "popular.json"
    });
    cy.intercept("GET", /(search)/g, {
      fixture: "search.json"
    });
    cy.viewport(1200, 800);
    cy.visit("/")
  });

  it("renders", () => {
    cy.findByText("YoungTube").should("exist");
  });

  it("shows popular video first", () => {
    cy.findByText("Popular Video").should("exist");
  })
});