const licenseBadges = {
  "Apache": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

function generateMarkdown(data) {
  let username = data.username;
  let project = data.project;
  let projectTitle = data.projectTitle;
  let projectDescription = data.projectDescription;
  let installationInsctructions = data.installationInsctructions;
  let usage = data.usage;
  let license = data.license;
  let tests = data.tests;
  let email = data.email;

  return `
[![Contributors](https://img.shields.io/github/contributors/${username}/${project})](https://github.com/${username}/${project}/graphs/contributors)
${licenseBadges[license]}

# ${projectTitle}
# Description
${projectDescription}
# Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
# Installation
${installationInsctructions}
# Usage
${usage}
# License
${license} License selected. See the badge above for further details.
# Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. Please note we have a code of conduct, please follow it in all your interactions with the project.
# Tests
${tests}
# Questions
[![Repo Owner Image](https://avatars.githubusercontent.com/${username}?s=100)](mailto:${email})
Please send any questions you may have to the repo owner.
`;
}

module.exports = {generateMarkdown: generateMarkdown};
