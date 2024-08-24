##  Cypress tests for Option 2

#### A. Tests for search functionality on cypress.io webpage

- webpage: https://docs.cypress.io/

I prepared simple tests focused on search functionality at cypress.io webpage. Test are written using JavaScript and Cypress. Test were implemented based on test cases described in the test plan. 

#### B. Simple API Tests for {JSON} Placeholder API
I created simple API test for all main REST methods based on JSON Placeholder API documentation. I focused on GET/POST/PATCH/UPDATE/DELETE of the posts. Test are also written using JavaScript and Cypress.



#### Relevant utilities which I used for creating testing enviroment:

- Cypress version: 13.13
- Node version: 20.9.0
- npm version: 10.8.2 
- cypress xpath: 2.0.3
- vs studio code: 1.83.1
- git: 2.43.0.windows.1
- cypress-mochawesome-reporter: 3.8.2


## Running Cypress Tests Locally


### Steps to Clone and Run e2e Tests

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Lubka93/cypressE2E_TrackMyCals.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd E2E_Cypress_Option2
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Run Cypress Tests:**
    - To open  the Cypress Test Runner:
        ```bash
        npm run open
        ```
    - To run all tests in headless mode:
        ```bash
        npm run runner
        ```
    - To run all tests in headed mode:
        ```bash  
        npm run runnerH
        ```