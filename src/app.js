/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
    'QJ3DD84Z8O',
    '0a4b4b00d734da489432372eebd9ee4f'
);

const search = instantsearch({
    indexName: 'dev_JOBS',
    searchClient,
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
    }),
    instantsearch.widgets.stats({
        container: "#stats",
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        empty: "No results found.",
        templates: {
            item(hit) {
                const sponsored = (hit.sponsored === "true") ?
                    `<span>✅ &nbsp; sponsored</span>` : '';

                // check for invalid location data
                const location = (hit.location.length < 16) ?
                    `<div>📍 &nbsp; ${hit.location}, ${hit.country_code}</div>` :
                    `<div>📍 &nbsp; ${hit.country_code}</div>`;

                const job_type = (hit.job_type) ?
                    `<div>🏢 &nbsp; ${hit.job_type}</div>` : "";

                return `
                    ${sponsored}
                    <h3>${instantsearch.highlight({ attribute: 'job_title', hit })}</h3>
                    ${location}
                    ${job_type}
                    <p>${instantsearch.snippet({ attribute: 'job_description', hit })}</p>
                `;
            },
        }
    }),
    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
]);

search.start();
