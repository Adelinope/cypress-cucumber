const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs",//** Path of the file ** //
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name:"chrome"
        },
        device: "local host machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});