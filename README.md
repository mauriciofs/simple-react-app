# Front end test

This a front end test project by Future Finance.

## About the project

This was build using [create-react-app] as a boilerplate.

Tasks:

- Implement ability to sort by the above fields.
- Implement paging (5 per page)
- Implement ability to view more info on a record
- Viewing a record should open in a different view layout while hiding the current view. Provide a mechanism to return the original view.

## Installation

To install run npm or yarn:

```sh
yarn install
# npm install
```

## Tests

Tests its by default using [Jest] on create-react-app, to run all of them:

```sh
yarn test
#Or npm test
```

## Running the App

To run with dev environments and features, dev server run on localhost: (http://localhost:3000)

```sh
yarn start
#npm start
```

To create a production environment you need to first build it:

```sh
yarn run build
#npm run build
```

And then serve the application:

```sh
yarn run serve
#npm run serve
```

For production the app run on port 5000 (http://localhost:5000)

[create-react-app]: https://github.com/facebookincubator/create-react-app
[Jest]: https://facebook.github.io/jest/docs/tutorial-react.html