# English Dictionary App

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<div align="center">
  <a href="https://github.com/ianarseferov/dictionary-app">
    <img src="images/dictionary-icon.png" alt="Logo" width="80" height="80">
  </a>
  <p align="center">
    English dictionary app build with vanilla JavaScript
    <br />
    <br />
    <a href="https://dictionary-app-ashen.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/ianarseferov/dictionary-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/ianarseferov/dictionary-app/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br/>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://dictionary-app-ashen.vercel.app)

An English dictionary app build with vanilla JS. For this project i used [Free Dictionary API](https://dictionaryapi.dev/) its 
free and its doesn't need any API key which is awesome. It's gives data such as definition examples, synonyms, antonyms and also phonetic sound. 
But it has little issue. Whenever i try display information about word, response data from API call inconsistent so i decided to manupulate API response 
and return new Object with neccessary data. Also you can search by clicking synonyms and antonyms.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* HTML
* CSS 
* vanilla JavaScript
* JS modules
* dynamic import/export
* forEach, map
* DOM manipulation
* Event Listeners
* RegEx
* setTimeout()
* spread opeartor
* arrays
* Async/await
* [Free dictionary API](https://dictionaryapi.dev/)
* Webpack 5
* Babel 7
* ESLint

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites
 
To get start you have to need yarn package manager look docs [here](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) or you can use npm 
via node.js download [here](https://nodejs.org/en/)
 
### Installation

1. You don't need API key
2. Clone the repo
   ```sh
   git clone https://github.com/ianarseferov/dicionary-app.git
   ```
3. install packages.
* via yarn
  ```sh
    yarn add
    ```
* via npm
  ```sh
  npm install 
  ```   
<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

After installing all packages you are ready to go. Run command below

* via yarn
  ```sh
    yarn start
    ```
* via npm
  ```sh
  npm start
  ```   
This will watch webpack changes and opens localhost server on default browser

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Anar Seferov - [@ianarseferov](https://twitter.com/ianarseferov)

Project Link: [dictionary-app](https://github.com/ianarseferov/dictionary-app)

<p align="right">(<a href="#top">back to top</a>)</p>

[forks-shield]: https://img.shields.io/github/forks/ianarseferov/dictionary-app.svg?style=for-the-badge
[forks-url]: https://github.com/ianarseferov/dictionary-app/network/members
[stars-shield]: https://img.shields.io/github/stars/ianarseferov/dictionary-app.svg?style=for-the-badge
[stars-url]: https://github.com/ianarseferov/dictionary-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/ianarseferov/dictionary-app.svg?style=for-the-badge
[issues-url]: https://github.com/ianarseferov/dictionary-app/issues
[license-shield]: https://img.shields.io/github/license/ianarseferov/dictionary-app.svg?style=for-the-badge
[license-url]: https://github.com/ianarseferov/dictionary-app/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/anarseferov
[product-screenshot]: https://github.com/ianarseferov/dictionary-app/blob/main/images/dictionary.png
