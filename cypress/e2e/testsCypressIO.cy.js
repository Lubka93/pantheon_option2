import { Base } from '../components/base';


describe('Verify search functionality at cypress.io', () => {
    before(() => {
        Base.clearAllStorage();
    });

    beforeEach(() => {
        cy.visit(Cypress.env('baseURL'));
        cy.fixture('testData.json').as('testData');

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test on certain exceptions
            if (err.message.includes('Could not clear consent from root domain')) {
              return false; // Returning false will prevent the test from failing
            }
            return true; // Returning true will allow the test to fail
          });
    });

    it('Verify that the search input field is present and functional.', ()=>{
        Base.searchOpenButton().should('be.visible').click();
        Base.searchInputWindow().should('be.visible');

    })

    it('Verify that valid search results are relevant and accurate.', () => {
        
        Base.searchOpenButton().click();

        cy.get('@testData').then((testData) => {
            const testArr = testData.validSearchData;
            for (let i = 0; i < testArr.length; i++) {

        // Type the search query
        Base.searchInputWindow().type(testArr[i]);
        cy.wait(1000);

 // Assert that search results contain the search text 
cy.get('#docsearch-list li').each((listItem) => {
    cy.wrap(listItem)
        .should('exist')  
        .invoke('text')
        .then((text) => {
        expect(text.trim().toLowerCase()).to.contain(testArr[i].trim().toLowerCase());
        })
    });

        Base.clearSearchButton().should('be.visible').click();
            }
        })
    })

    it('Verify that non-existing search results are handled correctly', ()=>{
        Base.searchOpenButton().click();

        cy.get('@testData').then((testData) => {
            const testArr = testData.invalidSearchData;
            for (let i = 0; i < testArr.length; i++) {

        // Type the search query
        Base.searchInputWindow().should('be.visible').type(testArr[i].trim().toLowerCase());   
       cy.wait(1000);
        Base.clearSearchButton().should('be.visible').click();  
         }
      })
  })

    it('Verify that search results are directing to relevant subpage resource.', ()=>{

        cy.get('@testData').then((testData) => {
        const testArr = testData.validSearchData;
        for (let i = 0; i < testArr.length; i++) {
        Base.searchOpenButton().click();

        // Type the search query
        Base.searchInputWindow().type(testArr[i]);
        cy.wait(1000);

            Base.clickOnFirstElement();
            Base.mainSubPageHeader().should('be.visible').invoke('text').then((text)=>{
            let headerText = text.trim().toLocaleLowerCase();
            expect(headerText).to.contain(testArr[i].trim().toLocaleLowerCase())
            })

            cy.go('back');
            cy.wait(1000);
            Base.clearAllStorage();
            }
        })
    })

    it('should clear search results when input is cleared', () => {
        Base.searchOpenButton().click();

        cy.get('@testData').then((testData) => {
            const testArr = testData.validSearchData;
            for (let i = 0; i < testArr.length; i++) {

        // Type the search query
        Base.searchInputWindow().type(testArr[i]);
        cy.wait(1000);
        Base.clearSearchButton().should('be.visible').click();
        cy.wait(1000);
       
         // correct message is displayed
         Base.noSearches().should('exist'); 
         }
       })
     })
  })
