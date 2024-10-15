# Exclusive - Next.js 14 Project with Tailwind CSS

Exclusive is an e-commerce website designed for desktop users, featuring a visually appealing design focused on delivering a premium shopping experience. This project showcases my front-end development skills using **Next.js 14** and **Tailwind CSS**. The design was sourced from a free Figma template and the site is deployed on **Vercel**.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)

## Features

- **Next.js 14** app router for dynamic routing and server-side rendering
- **Tailwind CSS** for modern and responsive styling
- Design sourced from a **free Figma UI/UX template**: [Template link](https://www.figma.com/design/cd2Ky3B4QuD3oT887AYMsc/Full-E-Commerce-Website-UI-UX-Design-(Community)?node-id=178-3781&node-type=frame&t=iVnQfuswfMl7613s-0)
- Deployed on **Vercel** for easy and fast hosting


## Tech Stack

- [Next.js 14](https://nextjs.org/) - The React framework for production-grade web applications
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for modern web styling
- [Vercel](https://vercel.com/) - A platform for deploying frontend frameworks and static sites



## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/subodhwork21/exclusive


2. **Navigate into the project directory**:
   ```bash
   cd exclusive

3. **Install dependencies**:

    npm install

4. Run the development server:

    npm run dev

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

> **Note**: No `.env` file is required for this project.

## Usage

This project demonstrates the use of **Next.js 14 with the app router** and **Tailwind CSS** for styling. The code is organized into a clear folder structure that follows Next.js best practices.


### Key Directories:

- **`src/app/`**: Contains all pages, layouts, and route logic using Next.js' app router.
- **`src/components/`**: Houses reusable UI components that are shared across different pages.
- **`src/lib/`**: Contains utility functions and shared logic that can be used in various parts of the project.
- **`public/`**: Stores static assets such as images, icons, and other public resources.

### Running the Project:


1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd your-repo-name
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

The project uses **Next.js' app router** to handle routing and server-side rendering, ensuring optimal performance and SEO. Tailwind CSS is used for building responsive and customizable UI components.

## Deployment

This project is deployed on Vercel and can be accessed at:  
[https://exclusive-gamma.vercel.app/](https://exclusive-gamma.vercel.app/)

To deploy your own version:

1. **Push to GitHub or any Git provider**.
2. **Connect your repository to Vercel** (or use the Vercel CLI):
   ```bash
   vercel
   ```
3. Vercel will automatically build and deploy your project.

## Project Structure

```bash
.
├── public/               # Public assets (images, fonts, etc.)
├── src/                  # Source files
│   ├── app/              # Next.js app router directory for pages and layout
│   ├── components/       # Reusable UI components
│   └── lib/              # Utility functions, helpers, and libraries
├── styles/               # Global CSS and Tailwind configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

- **public/**: Contains all static assets such as images and fonts.
- **src/**: Contains the main source code for the project.
  - **app/**: This folder follows Next.js 14's app router architecture, containing pages, layout, and routing logic.
  - **components/**: Houses reusable UI components to maintain modularity.
  - **lib/**: Includes utility functions and helper code that is shared across the project.
- **styles/**: Contains global styles and Tailwind CSS configuration.

