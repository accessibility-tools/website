# Accessibility tools website

This readme is still a work in progress.

## Built with

- [Yarn](https://yarnpkg.com/)
- [NextJS](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [GraphQL](https://graphql.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [ESLint](https://eslint.org/)

**Note**: `yarn workspace` is used to split the project in subpackages and keep them in one repo 

### Prerequisites

To install and run the project locally, you will need the following on your computer:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Installing

Clone the project

```
git clone git@github.com:accessibility-tools/website.git
```

and install dependencies with 
```
yarn install
```

To run the app locally:
```
yarn run dev
```

To build the app:

```
yarn run build
```

To start the app server:
```
yarn start
```

**Note #1**: Hot reloading is already enabled in dev mode.

**Note #2**: The app will be started on http://localhost:3000.

**Note #3**: GraphQL playground can be found on http://localhost:3000/graphql.

### Storybook

To start Storybook, run
```
yarn run storybook
```

## Contributing
Before commiting any changes make sure you ran
```
yarn lint
```
and didn't get any errors

