<h1 align="center"> FoodExplorer </h1>

<p align="center">
Food Explorer is a digital menu for ordering food! <br/>
</p>

## Table of Contents

- [📋 Description](#-description)
- [🌟 Features](#-features)
- [🔧 Functionalities](#-functionalities)
- [🚀 Technologies](#-technologies)
- [📂 Folder Structure and Code Organization](#-folder-structure-and-code-organization)
- [🌐 Deploy](#-deploy)
- [🏃‍♀️ Running the Project Locally](#-running-the-project-locally)
- [📸 Screenshots](#-screenshots)
- [🤝 Contribution](#-contribution)
- [📧 Contact](#-contact)
- [📝 License](#-license)

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="projeto Food Explorer" src="https://i.imgur.com/nrx9MGs.png" width="100%">
</p>

## 📋 Description

FoodExplorer is a digital menu application that streamlines the food ordering process for users. It provides an engaging platform to explore a diverse range of dishes and conveniently place orders.

## 🌟 Features

### User Flow Features:
- Login with account creation functionality
- Navigation through home screen with dishes categorized
- Detailed dish information including photo, description, and ingredients
- Adding and managing dishes in the cart
- Payment through card or PIX

### User Interface Features:
- Loading animations
- Skeleton loading for data
- Notifications for success, error, and other feedback
- Complete responsiveness
- Input fields showing validation errors
- Standardized colors, fonts, and styles
- Animated carousels

### Admin-Specific Features:
- Account creation and login as an admin
- Creation, editing, and deletion of dishes
- Distinct layout for admin
- Order tracking and status modification


##  🔧 Functionalities

The project encompasses various key functionalities:

- User authentication and login
- Browsing and exploring dishes categorized into sections
- Detailed view of individual dishes with ingredients, descriptions, and additional information
- Cart management with options to increase/decrease quantities and remove items
- Checkout and payment functionalities (currently in test mode) using credit card or PIX
- Animated loading screens for data and payment processing
- Visual feedback with success/error notifications throughout the application
- Responsive design for a seamless experience across devices
- Ability to search for dishes by name, ingredients, or description
- Favoriting dishes for later viewing
- Admin capabilities such as creating, editing, and deleting dishes
- Order management with status updates

## 🚀 Technologies

This project was built using various technologies, including:

- **JavaScript:** Primary programming language for the project.
- **React:** JavaScript library for building user interfaces.
- **Redux:** State management library for handling interactions within the application.
- **React Hook Form:** Used for registering input fields to minimize excessive useState usage and manage errors.
- **Styled Components:** For styling and component-level theming.
- **Material-UI:** Provides styled React components for building the user interface.
- **Axios:** HTTP client for making requests to the backend API.
- **Date-fns:** Library used for formatting dates in the application.
- **React Loading Skeleton:** Responsible for creating responsive data loading animations.
- **Mercado Pago:** Utilized to create secure fields certified by PCI SAQ-A for checkout and payment functionalities.
- **Swiper:** Used to implement the animated carousel for displaying dishes.
- **Zod:** Schema validation library used for field validation.
- **QRCode:** Employed for generating QR code images.
- **React Icons:** Icon library used for various icons.
- **Additional libraries:** Various other libraries and dependencies that enhance the application's functionality and appearance.


## 📂 Folder Structure and Code Organization

The project's folder structure is organized as follows:

- **/src** - Root directory for the source code.
  - **/assets** - Holds various project assets.
  - **/components** - Contains reusable UI components used across the application.
  - **/configs** - Stores configuration files and settings for specific functionalities.
  - **/hooks** - Includes custom hooks utilized throughout the application.
  - **/pages** - Houses different pages/views of the application.
  - **/redux** - Contains files related to state management using Redux.
  - **/routes** - Manages routing within the application.
  - **/schemas** - Holds data schemas or validation schemas.
  - **/services** - Contains utility services or API configurations.
  - **/styles** - Holds styling files, such as global styles or theme-related styles.
  - **/utils** - Contains various utility functions used across the project.

This structure allows for a clear organization of code, making it easier to maintain, expand, and collaborate on the project.


## 🌐 Deploy

The project is deployed at [https://foodexplorer-joca.vercel.app/](https://foodexplorer-joca.vercel.app/). To access the project's backend repository, visit [https://github.com/JocaBadasss/FoodExplorer-API](https://github.com/JocaBadasss/FoodExplorer-API).


## 🏃 Running the Project Locally

To run this project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the local server with `npm start` or `npm run dev`.

Additionally, ensure to modify the backend (or API) address in `/src/services/api.js` according to your local setup, if required.


## 🏁 Getting Started

After installing and setting up the API address, follow these steps:

1. Create an account or sign in to access the application.
2. Start exploring and ordering your favorite dishes!

For admin access:
Clone the API repository and follow the instructions in the 'Deploy' section of this README.

To perform a payment, use the following test credit card provided by the Mercado Pago API:

- Card Number: 5031 4332 1540 6351
- Security Code: 123
- Expiration Date: 11/25


## 📸 Screenshots

### Mobile
<div align="center">
  <div
    style="
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
    "
  >
    <a
      href="https://i.imgur.com/I4WTtFT.png"
      target="_blank"
      style="flex-basis: 20%; max-width: 200px"
    >
      <img
        alt="projeto Food Explorer"
        src="https://i.imgur.com/I4WTtFT.png"
        style="width: 20%; height: 20%; max-width: 200px"
      />
    </a>
    <a
      href="https://i.imgur.com/alWFl5P.png?1"
      target="_blank"
      style="flex-basis: 20%; max-width: 200px"
    >
      <img
        src="https://i.imgur.com/alWFl5P.png?1"
        style="width: 20%; height: 20%; max-width: 200px"
      />
    </a>
    <a
      href="https://i.imgur.com/0pOZ7QH.png?1"
      target="_blank"
      style="flex-basis: 20%; max-width: 200px"
    >
      <img
        src="https://i.imgur.com/0pOZ7QH.png?1"
        style="width: 20%; height: 20%; max-width: 200px"
      />
    </a>
    <a
      href="https://i.imgur.com/Vz5S8Iu.png?1"
      target="_blank"
      style="flex-basis: 20%; max-width: 200px"
    >
      <img
        src="https://i.imgur.com/Vz5S8Iu.png?1"
        style="width: 20%; height: 20%; max-width: 200px"
      />
    </a>
  </div>
</div>



### Desktop

<p align="center">
  <a
    href="https://i.imgur.com/WLsc5PM.png"
    target="_blank"
  >
    <img
      alt="projeto Food Explorer"
      src="https://i.imgur.com/WLsc5PM.png"
      width="100%"
    />
  </a>
</p>
<p align="center">
  <a
    href="https://i.imgur.com/O4MUEUQ.png"
    target="_blank"
  >
    <img
      alt="projeto Food Explorer"
      src="https://i.imgur.com/O4MUEUQ.png"
      width="100%"
    />
  </a>
</p>


## 🤝 Contribution

Contributions are welcome! Feel free to open pull requests for enhancements, bug fixes, or new feature additions.

## 📧 Contact

For any queries or suggestions, please reach out via email at [joaocarlos1208@hotmail.com](mailto:joaocarlos1208@hotmail.com).

## 📝 License

This project is licensed under the [MIT License](LICENSE).



---

This README provides a brief glimpse into the comprehensive functionalities and technical aspects of FoodExplorer. For a more detailed overview, access the application or explore the codebase.

---

Made with ♥ by Joca :wave:
