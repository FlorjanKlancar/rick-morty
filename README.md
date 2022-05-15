<div id="top"></div>

<h3 align="center">Rick and Morty</h3>
  <p align="center">
    This project was meant to learn and practise React.js (Next.js), I think I covered all of the basics and also some of the advanced functionalities. In components folder I also practised some of the Jest Unit tests.
  </p>
</div>

<h3>Vercel Deploy: https://rick-morty-woad.vercel.app/</h3>

<!-- TABLE OF CONTENTS -->
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>




### Built With

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)
* [Firebase](https://firebase.google.com/)
* [Formik](https://formik.org/)
* [Bootstrap](https://getbootstrap.com)
* [Tailwind CSS](https://tailwindcss.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

If you want to setup this project locally you need to generate new project on Firebase, get the Web API Key and save it in .env.example variable.

### Installation

1. Get Firebase Web API Key and copy it in .env (Rename .env.example to .env)
2. Clone the repo
   ```sh
   git clone https://github.com/FlorjanKlancar/rick-morty.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run project
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In this project you can search, filter, sort all of listed pages. For this project I did not use a DB so data is being fetched from "hardcoded" .json file. You can also Register/Login your user to Firebase. 

After you are logged in you are able to
* Save changed theme
* Change your users avatar, display name, password
* Edit or delete Character, Location or Episode page

<p align="right">(<a href="#top">back to top</a>)</p>
