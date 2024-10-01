// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license){

    case 'Appache 2.0':
      return '![Appache 2.0 license](https://img.shields.io/badge/license-Apache%202.0-yellow?style=flat-square)';
    
    case 'MIT':
      return '![MIT license](https://img.shields.io/badge/license-MIT-orange)';
    
    case 'BSD 2':
      return '![BSD 2 license](https://img.shields.io/badge/License-BSD%202%20Clause-red)';
    
    case 'BSD 3':
      return '![BSD 3 license](https://img.shields.io/badge/License-BSD--3--Clause-blue?style=for-the-badge)';
    
    case 'N/A':
      return 'N/A';
    
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

switch(license){

case 'Appache 2.0':
  return '(https://opensource.org/license/apache-2-0)';

case 'MIT':
  return '(https://opensource.org/license/mit)';

case 'BSD 2':
  return '(https://opensource.org/license/bsd-2-clause)';

case 'BSD 3':
  return '(https://opensource.org/license/bsd-3-clause)';

case 'N/A':
  return 'N/A';

}

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "N/A"){

 return `${license} license.`;

}

 return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}     ${renderLicenseBadge(data.license)}


  --------------------------

  

    ## Table of Contents
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contrubutors](#Contrubutors)  
[Tests](#tests)  
[Questions](#questions)  
[Email](#email)  
[GitHub](#gitHub)  

 --------------------------

  ## Discription
  ${data.description}

  ## Installation
     ${data.installation}

  ## Usage
  ${data.usage} 

  ## License 
  ${renderLicenseSection(data.license)}   ${renderLicenseBadge(data.license)}

  ## Contrubutors
  ${data.contrubutors} 

  ## Tests
  ${data.tests}


  ## Question
-------------------------------------------------
 if you have any question please reach me at ${data.email}

## Github 
[https://github.com/${data.username}](https://github.com/${data.username})

`;
}

export default generateMarkdown;
