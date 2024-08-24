

class BaseComponents {
searchOpenButton = ()=> cy.get('.searchBox_H2mL button');
searchInputWindow = () =>cy.get('.DocSearch-Form input');
listOfSearchReasults =() => cy.get('.DocSearch-Hit-title mark');
clearSearchButton = () => cy.get('.DocSearch-Reset');
noResults = () => cy.get('.DocSearch-NoResults');
noSearches = ()=> cy.contains('p', 'No recent searches');
mainSubPageHeader = ()=> cy.get('.mainContentHeader_el1s h1');

clearAllStorage() {
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
}

acceptAllModalWindows() {
    cy.on('window:alert',()=>{true});
    cy.contains('Accept All').click();
}

clickOnFirstElement() {
    this.listOfSearchReasults().should('be.visible').first().click();
}
}

export const Base = new BaseComponents();