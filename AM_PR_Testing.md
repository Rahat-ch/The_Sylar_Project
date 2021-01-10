What have you added/changed/fixed?

-   \*\*Added
    - LIBRARIES:
        - Cypress testing library
            - https://www.cypress.io/
            - End to end full featured testing library
        - eslint-plugin-cypress
            - plugin for linting cypress library
            - .eslintrc.json file created in ./cypress
    - FILES 
        - /cypress folder to root
            - /integration/TSP_Tests is the location of the E2E tests
            - /support/commands is the location of the pre-test scripts
            - /fixtures && /plugins unchanged from boilerplate except for cypress handle
        - AM_PR_Testing.md pull request file (to be deleted on merge)
        - .eslintrc.json file created in ./cypress to hold config data for linter
        - cypress.json config file in root
            - sets base url to localhost:3000

-   \*\*Changed
    - FILES:
        - /components/NewResourceOverlay/index.js
            - add #newResourceButton & .open-panel to "Add new resource button" to create testing handles
            - add cypress handle to top of page
        - /components/NewResourceOverlay/overlay.js
            - add class .overlay to largest div for testing handle
            - add cypress handle to top of page
        - /components/NewResourceOverlay/form.js
            - add classes for inputs and Cancel button for testing handles
            - add cypress handle to top of page

-   \*\*Fixed
    - N/A

-   **Other information**:
    - DO NOT MERGE YET
    - error in formReducer ONLY in cypress testing environment
    - "cannot read property of 'id' from undefined
        - for some reason, the region variable that is getting passed into the reducer is coming through as undefined.
        - for all tests to pass, change stateID in constructor to null. This seems to have no effect on the data loading and also still allows the proper state to be selected from the dropdown.
