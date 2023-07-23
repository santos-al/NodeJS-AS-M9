// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
   if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
   }

   else if (license === 'APACHE 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
   }

   else if (license === 'GPL 3.0') {
     return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
   }

   else if (license === 'BSD 3') {
     return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
   }

   else {
     return ''
   }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
   }

  else if (license === 'APACHE 2.0') {
   return '(https://opensource.org/licenses/Apache-2.0)'
  }

  else if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }

  else if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }

  else {
    return ''
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `${badge} \n
  ${link}`;
}

// Function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  \`\`\`
  ${data.dependenciesCommand}
  \`\`\`

  ## Usage
  ${data.userRepoDescription}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.userRepoContribution}

  ## Tests
  \`\`\`
  ${data.testsCommand}
  \`\`\`

  ## Questions

  If you have any questions about this project, please send me an email ${data.email}. 
  You can find more of my work at [${data.username}](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;
