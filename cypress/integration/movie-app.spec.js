describe("MovieLibrary App", () => {
  it("should load the MovieLibrary app", () => {
    cy.visit("http://localhost:3000"); // Adjust the port if necessary
    cy.get("h1").contains("MovieLibrary"); // Verify the title or heading
  });

  it("should search for a movie", () => {
    cy.get("input").type("Tibet");
    cy.get('img[alt="search"]').click(); // Trigger the search
    cy.contains("Tibet").should("exist"); // Ensure a result is displayed
  });

  it("should add a movie to favorites", () => {
    cy.contains("Add to Favorites").click(); // Assuming there is an "Add to Favorites" button
    cy.contains("Favorites List").click(); // Navigate to the Favorites List
    cy.contains("Tibet").should("exist"); // Verify it's added
  });
});
