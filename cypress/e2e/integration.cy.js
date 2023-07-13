describe("test suite web page", () => {
  beforeEach(() => {
    cy.visit("https://fedorse.github.io/my-personal-website/");
    cy.viewport(1440, 900);
  });

  it("page title display ", () => {
    cy.title().should("eq", "My page");
  });

  it("description hero", () => {
    cy.get(".name").should("have.text", "Fedor Semochkin");
    cy.get(".proffesion").should("have.text", "QA Engineer");
    cy.get(".hero-img").should("be.visible");
    cy.get(".link").should("have.length", 3);
  });

  it('Checking the click on the "about" link', () => {
    cy.get('[data-testid="aboutlink"]').click({ force: true });
    cy.get(".page-title").should("contain.text", "about");
    cy.url().should("include", "#about");
  });

  it('Сhecking the click on the "skills" link', () => {
    cy.get('[data-testid="skillslink"]').click({ force: true });
    cy.get(".page-title").should("contain.text", "skills");
    cy.url().should("include", "#skills");
  });

  it('Сhecking the click on the "contacts" link', () => {
    cy.get('[data-testid="contactslink"]').click({ force: true });
    cy.get(".page-title").should("contain.text", "contacts");
    cy.url().should("include", "#contacts");
  });

  it("Сhecking the return link to the main page", () => {
    cy.get('[data-testid="back"]').click();
    cy.url().should("include", "#home");
    cy.get("#home").should("be.visible");
  });

  it("Checking for contact information on the сontacts page", () => {
    cy.get('[data-testid="tg"]').should(
      "have.attr",
      "href",
      "https://t.me/Fedorsemochkin"
    );
    cy.get('[data-testid="git"]').should(
      "have.attr",
      "href",
      "https://github.com/Fedorse"
    );
    cy.get(".email").should("have.text", "221800ss@gmail.com");
  });
});
