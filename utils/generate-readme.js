// If no license, return an empty string
function licenseSec(license) {
    if (license !== 'no license') {
      return `
    ## [License](#table-of-contents)
    This project is covered under the following license:
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  };

  // Generate markdown for README
  function genMD(data) {
    return `
    # ${data.headline}
  
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.description}
    ## [Installation](#table-of-contents)
    ${data.installation}
    ## [Usage](#table-of-contents)
    ${data.usage}
    
    ${licenseSec(data.license)}

    ## [Contributing](#table-of-contents)
    ${data.contributing}
    
    ## [Tests](#table-of-contents)
    ${data.test}
    
    ## [Questions](#table-of-contents)
    Please contact me using the following links:
    [GitHub](https://github.com/${data.githubUsername})
    [Email: ${data.email}](mailto:${data.email})
  `;
  }

  module.exports = genMD;