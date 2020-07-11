const questions = [
    {
        "message": "What is your github id?",
        "type": "input",
        "name": "username"
    },
    {
        "message": "What's the project repo name?",
        "type": "input",
        "name": "project"
    },
    {
        "message": "What's the project title?",
        "type": "input",
        "name": "projectTitle",
        "default": "No Project Title Provided"
    },
    {
        "message": "What's the project description?",
        "type": "input",
        "name": "projectDescription",
        "default": "No Description Provided"
    },
    {
        "message": "What are the installation instructions?",
        "type": "input",
        "name": "installationInsctructions",
        "default": "No Installation Instructions Provided"
    },
    {
        "message": "How do you run the application?",
        "type": "input",
        "name": "usage",
        "default": "No Usage Instructions Provided"
    },
    {
        "message": "Which license do you want to use for this project?",
        "type": "list",
        "name": "license",
        "choices": ["Apache", "MIT"],
        "default": "Apache"
    },
    {
        "message": "How do you run the tests?",
        "type": "input",
        "name": "tests",
        "default": "No Testing Instructions Provided"
    },
    {
        "message": "What is the email address of the repo owner?",
        "type": "input",
        "name": "email",
        "default":  "blank"
    },
];

function writeToFile(fileName, data) {
    
}

function init() {
    
}

init();
