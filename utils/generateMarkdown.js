// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//collaborated with classmate Josie Borges

function renderLicenseBadge(license) {
  if(!license){
    return '';
  }

  //links from github https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const badgeMap ={
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'GPL v3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'BSD 3-Clause': '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  };

  return badgeMap[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
  const linkMap = {
    'MIT': '(https://opensource.org/licenses/MIT)',
    'Apache 2.0': '(https://opensource.org/licenses/Apache-2.0)',
    'GPL v3': '(https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '(https://opensource.org/licenses/BSD-3-Clause)',
  };

  return linkMap[license] || '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  return `This project is licensed under the [${license}]${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
//got help from classmate Lexus Nealy

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}

${licenseBadge}${licenseLink}

## Table of Contents
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## License
${renderLicenseSection(data.license)}

## Description
${data.description}


## Installation
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contribution}

## How to Test
${data.testing}

## Questions
Feel free to reach out to me with any questions at ${data.email} or on GitHub at https://github.com/${data.user}

`;
}

export default generateMarkdown;
