/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'

describe("Youtube App", () => {
  beforeEach(() => {
    // alias 추가 및 정규식 g 플래그 제거
    cy.intercept("GET", /(mostPopular)/, {
      fixture: "popular.json"
    }).as("popularAPI");
    
    cy.intercept("GET", /(search)/, {
      fixture: "search.json"
    }).as("searchAPI");
    
    cy.viewport(1200, 800);
    cy.visit("/");
    
    cy.findByText("YoungTube").should("exist");
  });

  it("renders", () => {
    cy.findByText("YoungTube").should("exist");
  });

  it("shows popular video first", () => {
    cy.findByText("Popular Video").should("exist");
  });

  it("searches by keyword", () => {
    cy.findByPlaceholderText("검색").type("rose");
    cy.findByRole("button", { name: "검색" }).click();
    cy.findAllByRole("listitem", { timeout: 10000 }).should("have.length.gt", 0);
    cy.contains("this happened at my surf competition", { timeout: 10000 }).should("be.visible");
  });

  it("goes to detail page", () => {
    cy.findAllByRole("listitem").first().click();
    cy.url().should("include", "/watch");
    cy.findByText("Popular Video", { timeout: 10000 }).should("exist");
    cy.get('iframe[id="player"]', { timeout: 10000 }).should("exist");
    cy.contains("this happened at my surf competition", { timeout: 10000 }).should("be.visible");
  });
});