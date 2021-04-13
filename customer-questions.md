# Customers Q&A

## Question 1

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts: Records, Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

---

Hi George, 

Working with search engines definitely has a learning curve, but you're asking the right questions! 

Records are the units of data that you're searching on. Records are usually full-text documents in JSON format. 

Indexing is the process of getting data into the search engine. Documents can be indexed into Algolia by uploading files through our dashboard or using the API. 

Once all your relevant records are indexed in the search engine, you can query them! But how do you want your results to be ranked? What defines most relevant for your use case? 

Custom Ranking is the process of specifying which results to return for certain queries, and then how to rank those results. This will all depend on your specific applications, but could include features like ranking based off most recent or most popular. 

## Question 2

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

---

Hi Matt, thanks for the feedback.

We understand that clearing and deleting indexes require a few extra clicks now which impacts your development workflow, but this is a deliberate change we made in order to add safeguards to prevent accidental destructive operations in a production setting. 

After working with many customers who have contacted us to try and recover production data that got deleted by mistake, we decided that adding extra steps in the process even while affecting development velocity would be a net positive tradeoff. 

## Question 3

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

---

Hi Leo, 

Setting up Algolia and getting it deployed to your website is a seamless process. 

Algolia has extensive library support in many different programming languages, as well as comprehensive documentation, tooling, and live code samples to get you started. 

At a high level you will need to:

1. Index the data you want to search on, which is as easy as uploading files to our dashboard
2. Specify which fields you'd like to search on,  as well as other basic  configurations.
3. Updating your front-end application by adding our search helper widgets including the search box, results, pagination, etc.


