const report = require ('multiple-cucumber-html-reporter');

report.generate({
    jsonDir:'./cypress/cucumber-json/',
    reportPath:'./cypress/cucumber-report/',
    hideMetaData: true,
    displayDuration:true,
    durationInMs:true,
    pageTitle: 'Automation Test Reporter',
    reportName:'Automation Test Reporter',
    pageFooter: '<div class="created-by"><p>Automation Test Reporter</p></div>'
});