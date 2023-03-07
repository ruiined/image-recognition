# Image Recognition

### Encord Front-End Coding Challenge

## My Approach

Due to the tight limit of 3 hours, I did my research beforehand, especially for bbox dimension normalisation.

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

## Technologies

- Node.js
- React.js
- Next.js
- Typescript
- TailwindCSS
- ESLint

- HeadlessUI | Accessible ui components
- Json-server | Fake rest api
- Formidable | Module for parsing file upload data

## Instructions

1. `npm install` - to install dependencies
2. `npm run dev` - to run locally
3. `npm run server` - to run the server
