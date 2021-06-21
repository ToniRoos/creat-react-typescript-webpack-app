#!/usr/bin/env node

//----------------------------------------------------

logHeader("create react ui template");

const fs = require('fs-extra');
var path = require('path');

const filterFunc = (src, dest) => {

    return true;
}
//----------------------------------------------------

logHeader("Start copying all files from template");

fs.copy(path.join(__dirname, "template"), path.normalize("."), { filter: filterFunc }, function (err) {

    if (err) {

        console.error(err);

    } else {

        console.log("\tSuccess! Copied all files from template\n\n");

        //----------------------------------------------------

        logHeader("Go ahead! Try one of the following commands:");

        printNpmFunction("Rename project properties in package.json", "npm init");
        printNpmFunction("Install dependencies", "npm start");
        printNpmFunction("Local build", "npm run build");
        printNpmFunction("Run local server", "npm run local");
        printNpmFunction("Run local server with remote proxy", "npm run server");
    }

});

var listIndex = 1;

function printNpmFunction(description, command) {

    console.log(`\t${listIndex++}. ${description}:\n\t${command}\n\n`);

}

function logHeader(title) {

    console.log("\n\n------------------------------------------------------------------------------------\n\n");
    console.log("\t" + title);
    console.log("\n\n");

}