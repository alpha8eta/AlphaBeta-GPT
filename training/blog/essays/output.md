 Prism 0.1 (alpha) \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Prism 0.1 (alpha)
=================

Assumptions

* * *

Prism 0.1 (alpha)
-----------------

#### _Assumptions_

Despite sharing ad-hoc work updates and questions via email, chat apps and project management tools, people prefer to share updates via screenshots.

People like the screenshot behavior because it is quick and intimate. It’s the equivalent of “here’s what I’m seeing right now” or “here’s what i’m working on currently”.

Even though sharing a screenshot can be a relatively painless experience for some, most people get a sense that there is a more optimal way to be sharing their screenshots for posterity sake and for better visual collaboration with co-workers.

Simply put, the act of taking a screenshot should be both a delightful experience as well as enhance both the historical record (documentation, retrievability, searchability) and collaboration around that piece of information simultaneously.

#### Goals

We think that we can build a lightweight enough workflow through a browser extension and web app, that will allow people to create ‘[cards](http://blog.intercom.io/why-cards-are-the-future-of-the-web/)’ from their screenshots and share them quickly and easily through whichever communications platform they are already using today.

Our focus will be heavily weighted towards private sharing, both within companies and across organizations.

This means that we will start integrating with existing communication channels like slack, trello and email in mind and build out other integrations going forward based on demand.

These cards will act as both self-contained snapshots of information as well as portable units of content that can transmit context across platforms and display natively within their parent container or app wherever they are shared.

For v.1 we are focused on building a useful ‘single-player’ experience for uploading screenshots, but could easily imagine a version where you see in-app your colleagues shared screenshots organized by topic (#customer-acquisition) or team (#marketing).

#### On Customization

Customization of cards needs to be really light. An assumption is that the commentary happens outside of the card itself, even though we have built out a commenting feature on top of the existing card.

Things like annotation and other collaborative features that provide value to multiple parties are for future development.

#### To sum up

Again the experience challenge is that the prism card has to look good but not so stuffy that it doesn’t feel like it came from a human. The overall experience of the app needs to be fast because we are competing with the native use case of just screenshotting, cropping, annotating and sharing.

Overall, it ‘just needs to work’. But also add additional value on top of the existing workflow.

### Use Cases and Example Images

**#1 Daily Updates**

![](https://cdn-images-1.medium.com/max/400/1*qdq8IoBxqRVFASkV3284aQ.png)

Adam a chart of recent prism posting activity along with a selfie (a new daily ritual)

Recently someone suggested that it might be useful to try to replace the daily update with a dual screenshot+selfie, so we started trying it at prism.

It turns out to be a useful method for sharing updates and also allot of fun!

**#2 Curating snippets of articles**

![](https://cdn-images-1.medium.com/max/400/1*HbrXqthLWqHnF6i1Frtn7A.png)

[http://blog.intercom.io/the-end-of-apps-as-we-know-them/](http://blog.intercom.io/the-end-of-apps-as-we-know-them/)

We suspected that there would be more compelling use cases, but it turns out the simple ability to create a custom card to share a snippet of an article, with custom title, picture and description is useful enough to justify a whole new use case.

Right now we’re using this to keep track of articles with product/design inspiration internally.

**#3 Sharing a bug or design issue**

![](https://cdn-images-1.medium.com/max/400/1*Zs6q_Z1KJqtdQlecd-QCoA.png)

This use case emerged naturally out of the development process for our alpha.

We found ourselves copying saving and pasting in screenshots manually into Trello which we use to track bugs and stories.

This use case also led to the inspiration to build out the prism ‘lense’ chrome extension that posts directly to trello.

By [Adam Breckler](https://medium.com/@adambreckler) on [March 17, 2015](https://medium.com/p/d401cb09a3a5).

[Canonical link](https://medium.com/@adambreckler/prism-0-1-alpha-d401cb09a3a5)

Exported from [Medium](https://medium.com) on February 7, 2023.