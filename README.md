# Image Recognition

Coding challenge that lets the user upload an image for AI predictions.

## Instructions

1. `npm install` - to install dependencies
2. `npm run dev` - to run locally
3. `npm run server` - to run the server

## Technologies

- [Node.js](https://nodejs.dev) | Back-end JavaScript runtime environment
- [React.js](https://reactjs.org) | Front-end JS library
- [Next.js](https://nextjs.org/) | React framework
- [Typescript](https://www.typescriptlang.org/) | Typed superset of JavaScript
- [TailwindCSS](https://tailwindcss.com) | CSS framework
- [ESLint](https://eslint.org/) | Linting utility
- [HeadlessUI](https://headlessui.com/) | Accessible UI components
- [Json-server](https://www.npmjs.com/package/json-server) | Fake REST API
- [Formidable](https://www.npmjs.com/package/formidable) | Module for parsing file upload data
- [React-hot-toast](https://react-hot-toast.com/) | Notification toasters

## My Approach

I did my research beforehand, especially for bbox dimension normalisation.

I've decided on NextJS as a framework and TailwindCSS for styling, with a help of HeadlessUI for accessibility of UI elements like tabs and dialogs.

The files are being uploaded to the public upload folder with the help of formidable module. The file data in the folder is then read and displayed in a tabular format.

Unfortunately, there are bugs like the first file upload response being very slow. There is a lot of need for perfomance improvements and refactoring, which could be achieved by using more of memoization and less of useEffect. I would have liked to have some basic testing done as well, especially for the prediction API calls.

Overall, I had a lot of fun with this challenge, as it required a lot of manoeuvre to keep the code somewhat simple and error-free.

## Potential Improvements

- Fix the first upload's slow response

- Use ReactTable as a lightweight solution to sorting and filtering of the table

- Handle file upload with the same name

- Put limitations on file upload format, name and more

- Reduce the amount of re-renders

- Testing

## Preview

![Image_Recognition](https://user-images.githubusercontent.com/72412305/225410490-cead3b74-4d3b-4fe6-977f-552b15a67b25.gif)
