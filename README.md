# job-board

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.


## Discussion

Configurations
- Search - job title, description country code
- Snippets - seperate config in order to get the job description to display

Add Rules - Attributes for Faceting
- sponsored: yes/no


Challenge
- struggled with trying to display a single hit per row
    - tried to pass the cssClasses property in the hits widget but that didn't work
    - also tried to manually update the ais-hits--item CSS but wans't able to get that working either

