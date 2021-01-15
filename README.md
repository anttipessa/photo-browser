# PhotoBrowser

Photo Browser is a simple web app representing features that are fairly common in many real life web apps out there (i.e. fetching JSON formatted data from a REST API, presenting the data on a list and perhaps demonstrating some basic navigation in form of opening a details page describing single item in detail). The website allows you to browse photos, albums and users fetched from http://jsonplaceholder.typicode.com/.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node](https://nodejs.org/en/) (Tested with v14.15.1)
- [Docker + docker-compose](https://www.docker.com/) (optional)

### Running locally

Clone the project and in the project root run:

```
npm install && npm start
```

Alternatively with Docker:

```
docker-compose up -d
```

Then head to `localhost:3000`

## Routes

- `/` - Landing Page
- `/photos` - Photo listing
- `/photos/:id` - Single photo view
- `/albums` - Album listing
- `/albums/:id` - Single album view
- `/users` - Users listing
- `/users/:id` - Single user view

## Testing

This project is using cypress for e2e testing. The website must be running locally for the tests to work. Run tests headless with:

```
npm run test:e2e
```
For developing the tests use:
```
npm run cypress:open
```
### Break down into end to end tests

These tests are checking through all the pages, all images and texts are loading and checking that all the routes are working.

```
describe('Photo Listing', function () {
  it('successfully loads', function () {
    cy.visit('/photos')
  })
  it('contains photo thumbnails', function () {
    cy.get('[alt="harum velit vero totam"]').should('be.visible')
    cy.get('[alt="accusamus beatae ad facilis cum similique qui sunt"]').should('be.visible')
  })
  it('photo thumbnails can be clicked', function () {
    cy.get('[alt="harum velit vero totam"]').click()
    cy.contains('Photo 23')
  })
})
```

## Deployment

The website is hosted on Netlify, with a CI / CD pipeline running on Github Actions. The pipeline checks the code with lint, tests it with cypress and then publishes it to Netlify. Live version of the site can be found [here](https://photo-browser-app.netlify.app/).

## Built With

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Ant Design](https://ant.design/) - React UI-library
* [axios](https://github.com/axios/axios) - Api requests
* [React Router](https://reactrouter.com/) - Routing
* [cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework
* [Redux Toolkit](https://redux-toolkit.js.org/) - State management
* [Netlify](https://www.netlify.com/) - Hosting
* [Github Actions](https://github.com/features/actions) - CI / CD
* [Docker](https://www.docker.com/)