 Blink v1.1 \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Blink v1.1
==========

With v1.1 of Blink the primary goal is evolving blink from personal utility for managing and sharing screenshots to other networks to more…

* * *

### Blink v1.1

With v1.1 of Blink the primary goal is evolving blink from personal utility for managing and sharing screenshots to other networks to more of a private network for sharing and discovering all kinds of in-app moments and content. In doing so, the aim is to be 10x better than existing saving & sharing solutions on three different dimensions: speed, ease of use & enhancing of context.

Right now the focus of the application is primarily personal and centered around screenshot management (and sharing to collections). In v2, an open question is how does the app look if the screenshot fades away into the background? What if the screenshot is just the functional way to capture any piece of content you see on your screen and quickly share it (image, article, video etc) how does this change the architecture and UX of the app?

#### Four High-level topics

* Organization, Privacy & Sharing Models (enhancing context, ease of use)
* Jobs-to-be-done (enhancing context, speed)
* Enhancing Context & Expression (Deep-linking + Annotation)
* Growth features

#### First some Questions

To start there are four main questions we need good answers to before convincing a user that Blink is a viable or superior alternative to the ‘Cow Paths’ for how they normally save and share screenshots.

1.  **Why would I share through blink when adding a screenshot to a ongoing conversation via imessage/whatsapp**? Current answer: (sharing a blink is more powerful because it has a link back so the context isn’t lost)
2.  **Why would I share through blink for a screenshot that i just took and want to send to someone to start a new conversation or just show them?** Current answer**:** (because sharing through the blink push notification saves a few steps in the process). **Note:** If a user doesn’t know about or have blink instant enabled, this answer doesn’t apply.
3.  **Why would I share through blink for a screenshot that is related to another past screenshot or is associated with a ‘topic’ or ‘theme’?** Current answer:  sharing through blink is better because

Ideally we can refine our answers to the above questions that are more easily understood by users like in the following example:

**Example:** Snapchat

Q: Why would i use another app to send selfies to my friends when I already use iMessage or Whatsapp?

A: Because our photos dissapeer (and we also alert you when they are screen-shotted) you can make sure they stay private, plus we give you simple options to annotate your photos and add context to them.

#### 1) Organization,Privacy & Sharing Models

**Collections vs Groups vs Followers**

Collections are passive. Groups are active. Adding a post to a group expects/demands a response. Adding a post to a collection doesn’t require any response. Sharing a post directly with a single person sometimes begs a response, sometimes it’s just an ‘fyi’. Collections are typically topical. Groups are conversational and organized around people.

Following accounts seems to work well in a broadcast model with celebrities at the center (e.g: twitter and instagram) and is less relevant to a private content network e.g: whatsapp, messenger, snapchat

Following boards works when the information being organized is around topics or certain themes.

Currently neither of these models map 100% for the most common sharing cases for screenshots, which are: “Here’s something i saw on my screen just now that i wanted to show you”.

One possible solution to the current set of issues is to consolidate the sharing and add to collection screens into one, and not require adding to a collection. For example:

![](https://cdn-images-1.medium.com/max/800/1*yRcTAa5bbBDwzGpUosK-5A.png)

Example of consolidated direct sharing + collection + link source + cross-network sharing screen

Another possible solution is to consolidate the view/edit and share screens into one and even remove or de-emphasize the ability to ‘add’ to a collection and just emphasize the shortest/direct sharing path possible.

![](https://cdn-images-1.medium.com/max/800/1*3yr2UonxOzYse0SICoMoXQ.png)

With Emoji/Annotate fly-out menu and multi-share option

**Private vs Public**

The current privacy model for blink is currently as follows:

**Accounts:** Private by default (no ability to be public).

_For V2_? How can design the right privacy model to encourage 1:1 and 1:few sharing to a user’s close social graph?

Since we already know from our survey that 40% of screenshots are saved for personal consumption. 55% are shared privately, while less than 5% are shared publicly.

**Collections:** Private by default (_can be made public_). Collections can be followed by those who have access, but the fact remains:

Most screenshots are un-related to previous screenshots and are generally speaking, 1-off moments that don’t want or need to be organized in groups.

**Blinks:** Blinks are currently default private and inherit the privacy model from their parent board, but what if i want to share a single blink with a select group of people (e.g: three close friends). How will they be given access to that single blink in v2 and will each of them see who else has access (pinterest model) or each is a more siloed (snapchat model)? Or perhaps some combination of the two models makes sense.

It’s worth stating that Blinks, and screenshots in general, fall into one of two primary categories. There are some that fit into both, but most are for one purpose or the other.

1.  **save for later for myself** (like a bookmark, evergreen, can be put in a topic )
2.  **1-off for sharing** (tied to a conversation, communication oriented, not a bookmark).

![](https://cdn-images-1.medium.com/max/800/1*J_GgrV1NVk8cjmsv4VFAKQ.png)

The Saving &lt;-&gt; Sharing Spectrum

Whichever privacy model we choose needs to reflect this spectrum of user needs for saving vs sharing.

* * *

#### **2) Jobs to be done**

What follows is a set of jobs that users are using screenshots for today as well as jobs that \*could\* be done with a future version of blink.

![](https://cdn-images-1.medium.com/max/800/1*1x_YhZrgK8DgEPgt73717Q.jpeg)

**Saving an article to read later (save)**

**Frequency**: OFTEN

**Consideration set:**

* Emailing yourself a link.
* Creating a Bookmark in your browser.
* Saving with Pocket, Facebook, Read-it-Later, Instapaper, Feedly.
* Not doing anything.

**Idea:** ‘Blink’ to save an article (full content) to read later (for offline / share)

* * *

![](https://cdn-images-1.medium.com/max/800/1*tUWw1xFbd1-griLqOtxYlg.jpeg)

**Creating a custom meme or adding a caption to a photo**

**Frequency**: SOMETIMES

**Consideration set:**

* Using a ‘meme generator’ app.
* Firing up photoshop on the desktop.
* Opening a photo in SnapChat

**Idea:** ‘Blink’ any photo you see to re-mix a meme out of it with blink cropping & annotation tools (share)

* * *

![](https://cdn-images-1.medium.com/max/800/1*4HBNZdnxx7rxO1_5xGT-JQ.jpeg)

**Re-posting an Instagram** (SOMETIMES)

**Consideration set:**

* Taking a screenshot and cropping with Instagram.
* Using a ‘re-post’ app.

**Idea:** ‘Blink’ any instagram and click ‘re-post’ to repost it via instagram, blink ads automatic attribution and copies caption text to clipboard.

* * *

![](https://cdn-images-1.medium.com/max/800/1*5MVkKzErgeLHMF5kK843jA.png)

**Saving an image to the camera roll (**FREQUENTLY)

**Consideration set:**

* Saving the image by holding down or clicking a kebab menu.
* Taking a screenshot and cropping.

* * *

#### 3) Enhancing Context & Expression

![](https://cdn-images-1.medium.com/max/800/1*LKpkjpgzEBggzAaqlYCV2w.png)

**Annotation**

“Annotation” is used as a catch-all term to describe adding or subtracting to the image in some way. Currently the only form of editing like this offered is cropping. Going forward, there is plenty of opportunity to offer much more enhanced functionality for allowing the user fully express (and also highlight or blur) their reactions to the screenshot with things like arrows, glyphs and text in addition to emojis (animated?).

![](https://cdn-images-1.medium.com/max/800/1*CRNjn7uN9MoMEyzYlcRbPA.gif)

**Deep Linking**

Deep linking is all about providing extra context, when sharing or consuming content at a later point in time. Deep linking also ads value to the recipient of the blink if they want to be able to easily click through to the source for even more context.

Current support for deep-linking within the blink app is limited to an ‘_application-level_’ whereby if we can identify the source application we can link the screenshot to application with the generic link toe.g: _spotify:app:mymusicapp_.

To enhance deep-linking to make it truly useful, we’ll need to parse out the relevant content from the screenshot in order to link it back to the precise screen within the app. e.g: _spotify:app:mymusicapp:artist:Coldplay:song:Christmas%20Lights_

In certain cases when we are able to accurately extract the right meta data from a screenshot and have a known convention for deep linking we can link directly on an per application-basis like above.

If we are dealing with an unknown application or deep-linking convention that is not supported within an app, we can fall back on a combination of a keyword search (google, yahoo) to find the top result to link to and attempt to extract a deep-link directly from the source page html.

* * *

#### 4) Growth

While all of the above features must be evaluated through the lens of ‘will this help grow blink’ and ‘how fast?’. These particular features are primarily driven through the lens of ‘growth’ and are not necessarily designed to solve any current user problems.

* **Attribution** (e.g: blink logo on screenshot, recognizable ‘card’ layout for sharing publicly)
* **Address book integration / invite system** (how do i quickly share a screenshot on blink directly with a friend)
* **Make it easier to discover & follow public collections** / **on-boarding** (more collections being followed means more reasons to come back to blink even when not sharing a screenshot to see interesting content)
* **Notifications **— new posts to boards you follow, comments on your posts, favorites on your posts etc., also ‘read-receipts’ to see who has viewed your blinks.

By [Adam Breckler](https://medium.com/@adambreckler) on [December 13, 2015](https://medium.com/p/b451592ca42f).

[Canonical link](https://medium.com/@adambreckler/blink-v2-b451592ca42f)

Exported from [Medium](https://medium.com) on February 7, 2023.