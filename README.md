# Job Board Demo

## Discussion

This is a simple job board built on top of Algolia - the live version can be found here: https://kxu-westsidelabs.github.io/job-board-demo/

### Job Board Characteristics

A job board is a two-way marketplace.

On the one end are job seekers, who are looking for postings that are recent, relevant, and fit certain user-defined criteria. Candidates expect a great user experience with fast, relevant search.

On the other end of a job board are the companies that list openings. They're looking for quality candidates and in some cases are willing to pay a fee in order to promote their job listings.

In addition to getting the basic search functionality setup, I also wanted to experiement with:

-  Improve the ranking of job postings that were "sponsored"
- Allow certain results to be pinned to the top of the results

There are many scenarios when it could be useful to inject/pin certain results to the top of the results, for example:

- Shops displaying products that are on sale / newly released
- Breaking news in media/entertainment

### Implementation

I used a dataset of 10k jobs originally scraped from Monster.com and set "sponsored = true" for ~10% of the job postings.

I bootstrapped the InstantSearch app using the **Create InstantSearch Tool** with the `searchbox`, `stats`, `hits`, and `pagination` widgets.

```
**Note:** the default package.json installs parcel v1.12.4, but this has some bugs and should be pinned to v1.12.3
```

### Configuration

Queries hit the `job_title`, `job_description`, and `country` fields.

I added in a ranking rule for the `sponsored`,

In order to boost sponsored posts, I added in a ranking rule for records where `sponsored` is `true`, and then set an explicit rule to pin posts that matched certain queries. In this case, any query matching `solutions engineer` will return results where the first hit is a listing from Algolia.

![Pinned Results](./pinned_results.png)

Index configs are in [config.json](https://github.com/kxu-westsidelabs/job-board-demo/blob/master/config.json).

## Get started

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

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


