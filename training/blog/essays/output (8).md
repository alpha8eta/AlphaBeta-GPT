 Mapping the interests graph through screenshots \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Mapping the interests graph through screenshots
===============================================

And building the interest feed for mobile

* * *

![](https://cdn-images-1.medium.com/max/800/1*d_kFsXTO4Pv6UokG95FqhA.png)

### Mapping the interests graph through screenshots

And building the interest feed for mobile

At Prism we are attempting to build the personal interest feed based off of the interest graph. Many previous attempts to build this have failed for various reasons (gravity, hunch, even facebook to some extent), but we believe that now is the time to crack this problem once and for all.

We are focusing our efforts initially on [building out](https://medium.com/@adambreckler/prism-lens-beta-v-2-ca680c891206) a solution for capturing, indexing and managing screenshots on mobile.

#### Why Screenshots?

We believe screenshots are the key that enables us to complete a full picture of intent/interests. Simply, the dataset latent in screenshots visual information is the most rich expression of interests yet to be indexed.

**Our Hypothesis:** _Screenshots have the potential to capture all of the important digital moments from our lives._

Screenshots can capture many things, including:

1.  **Places** I’ve been (screenshots of maps or yelp listings for offline use)
2.  **Quotes from articles** i’ve read or want to read later
3.  **Conversations** i’ve had (via whatsapp, snapchat etc)
4.  **Products** I want to buy (offline shopping cart)
5.  **Apps** i’m using most frequently
6.  **Songs** i’ve listened to or recommended

* * *

#### On Following

When following was popularized by twitter in 2006 and then furthered by instagram in 2010, it was able to command our attention and provide utility by using humans as filters for content distribution instead of algorithms.

Fast forward to today towards the end of 2015 and the model has outlived it’s usefulness. We are inundated with duplicate and irrelevant updates from people we follow regardless of any personal relevance or expression of interest on our parts.

Need more evidence that the follower model is outliving its welcome?

[**Why I Unfollowed You on Instagram**  <br>_The Social Network is Yesterday, The Interest Feed is Tomorrow_medium.com](https://medium.com/p/4d36dc697bdb)[](https://medium.com/p/4d36dc697bdb)

* * *

#### A New Model

Today we are building a new model for surfacing content in an interest feed, that is based on the data living within user’s camera rolls captured within screenshots, not simply based on who they follow or what content they ‘like’.

1.  What apps are users with similar preferences to mine using right now?
2.  What songs are most popular amongst my social circle?
3.  What articles are being read by my industry?

Key characteristics of the new model include:

1.  **Private** by default — Most of my interests don’t need to be broadcast with the world (or even my close social circle).
2.  **Algorithmically ranked** — don’t make me search or scroll endlessly through a firehose of content in order to find the bits that interest me.
3.  **Zero configuration** or setup — no choosing my interests (facebook) or following users (twitter, instagram) manually.

What comes next? Stay tuned…

Want to learn more? [Get in touch](http://prism.io).

By [Adam Breckler](https://medium.com/@adambreckler) on [October 11, 2015](https://medium.com/p/40e38bbc8a15).

[Canonical link](https://medium.com/@adambreckler/building-the-interest-feed-40e38bbc8a15)

Exported from [Medium](https://medium.com) on February 7, 2023.