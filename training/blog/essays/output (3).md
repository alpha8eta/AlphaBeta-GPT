 Prism Lens (v0.1) \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Prism Lens (v0.1)
=================

Assumptions

* * *

Prism Lens (v0.1)
-----------------

#### Assumptions

“_Capture & Share any perspective at the speed of thought”_

This is the experience that we want to achieve with Prism Lens, our first native iOS app, that will allow users to easily capture and share any screenshot with anyone.

**Assumption #1:** People like using the screenshot behavior because it is quick and intimate. It’s the equivalent of “here’s what I’m seeing right now” or “here’s what i’m working on currently”.

Despite sharing ad-hoc screenshots today via tools like [prism (web)](https://medium.com/@adambreckler/prism-0-1-alpha-d401cb09a3a5), email, chat apps and project management tools, users would prefer a more seamless way of capturing and sharing the screenshots they take (especially on mobile, where the pain is more acute).

In fact the act of taking an sharing a screenshot today, resembles something more akin to a hack or user ‘desire path’ than a well thought out and designed workflow that seamless integrates into other workflows.

**Assumption #2:** A tool focused on capturing and sharing screenshots must be general purpose enough to fit into a broad enough range of use cases and provide value from day 1 without any upfront investment or change in behaviour.

This also implies that prism lens must be useful in both a professional setting (e.g: sharing app design inspiration or a bug report) and personal setting with varied use cases (sharing a screenshot of a text conversation or funny tweet). There simply doesn’t seem to be enough space in users head’s for remembering to use a screenshot sharing app that is only meant for a single purpose or narrow set of use cases.

#### Goals

Even though sharing a screenshot can be a relatively painless experience for some, most people get a sense that there could be a more optimal way to be capturing, sharing and organizing their screenshots.

In fact it turns out that the typical sharing flow alone takes **_11 actions_** and **_40 seconds today!_**

![](https://cdn-images-1.medium.com/max/800/1*1jH2vsskQmNPh26fQVT2fg.png)

> Since taking a screenshot is now starting to become ingrained as a natural user behavior, any tool meant to enhance this behavior must simultaneously tap into the existing behavior while not interrupting it.

For this reason we are designing prism lens to tap into the native user behavior by detecting a screenshot event and then presenting itself in context of the app/experience.

**Step 1**: Take a screenshot (native), **Step 2:** Prism lens triggers a sharing dialog. **Step 3:** User adds a message and hits ‘share’!

![](https://cdn-images-1.medium.com/max/800/1*Qphb042USaR-Vx4qo0-Z4A.gif)

For v.1 of the app we are focused on building a useful ‘single-player’ experience for capturing & sharing screenshots, but could easily imagine a version down the road where (users|colleagues|connections) shared screenshots organized by app (product), content topic (#customer-acquisition, #design) or team (#marketing, #sales, #ux).

Other things that we are considering now but require future discovery and experimentation before building out include:

1.  **‘Boards**’ and other organization & collaboration, communication functionality like comments that we have in the web app, but are not yet obviously useful in a mobile context.
2.  **An API** for 3rd party app developers to integrate and build on top of our ‘smart’ screenshot sharing functionality.
3.  An interface for **search & discovery** of screenshots.
4.  **Annotation**: While useful in certain contexts, isn’t something that most users can’t live without for now.

#### To sum up

Simply stated we think that there is a great opportunity in front of us to build the mobile equivalent of the [Vulcan Mind Meld](http://en.memory-alpha.wikia.com/wiki/Vulcan_mind_meld) and that screenshots are the best starting point to transmit visual context across connected devices that users are already familiar with.

> the act of taking a screenshot should be both a delightful experience as well as enhancing the historical record

Because screenshot sharing is such an increasingly important part of the information worker’s communication workflow it should also be made more useful for documentation, retrievability, search as well as transmitting just the right amount of context depending on the screenshot destination in the [future in a ‘smart’ way](https://medium.com/@adambreckler/smarter-screenshots-dafa323e038f) so that context doesn’t get lost like in ‘[telephone](https://en.wikipedia.org/wiki/Chinese_whispers)’.

By [Adam Breckler](https://medium.com/@adambreckler) on [July 13, 2015](https://medium.com/p/bb5711892296).

[Canonical link](https://medium.com/@adambreckler/prism-lens-v0-1-bb5711892296)

Exported from [Medium](https://medium.com) on February 7, 2023.