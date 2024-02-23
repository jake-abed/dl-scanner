# Driver's License Scanner

This web app allows a user to quickly scan the barcode on the back of their US driver's license and extract data from it. This can be tricky if the user webcam/camera is low enough quality. After enough failed attempts, the application will prompt the user to simply enter their information manually or upload a photo from a better device.

## To-Do
- Flesh out components.
- Style app.
- Polish UI/UX
- Build out tests.


## Technologies

![React](https://img.shields.io/badge/frontend-react-61DBFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/frontend-ts-blue?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vitest](https://img.shields.io/badge/specs-vitest-yellow?style=flat&logo=vitest)
![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vitest](https://vitest.dev/) for unit testing and code coverage
- [Vite](https://vitejs.dev/) to build the project for development or production
- [Husky 🐶](https://typicode.github.io/husky/) runs the full list of specs before committing your changes to ensure that you have a green build

### Tailwind + CSS Modules

1. Create a CSS Module file by following the naming convention - `<Component>.module.css`
2. Use the `@apply` directive in your CSS class definitions to use Tailwind's utility classes into your own custom CSS

   ```css
   .app-heading {
     @apply text-5xl font-semibold mb-4;
   }
   ```

3. Import the CSS Module file into the React component file

### Dev Loop

- `prettier-format` - run the autoformatter
- `lint` - run the linter
- `test` - run the specs
- `test-filter <spec-name>` - run a specific spec
- `coverage` - get a coverage report of the specs
- `build` - build the project files for distribution
- `dev` - run the local development server

## License

The project is available as open source under the terms of the [MIT License](LICENSE).
