1) Run 'npm install' to get all npm dependancies - run this inside the root folder i.e CypressAutomation

2) To get the 'pretest' npm script to work you may need to add the following folder:- CypressAutomation/cypress/testresults

3) To run the entire test suite, just run the following commands in order:
    a) Run npm script 'run tests' - This will kick off a run of all tests and also produce json report files of the test results.
    b) Run npm script 'posttest' - This will merge all json report files and build a html report file that can be used to better view the test results. This is found in the cypress/testresults/mochareports directory.