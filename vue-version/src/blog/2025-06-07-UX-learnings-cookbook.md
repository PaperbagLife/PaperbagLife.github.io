---
title: User Experience: Another Case Study
date: 2025-06-07
tags: [vue, blog]
---

# {{frontmatter.title}}

## UX Design to Make Engineers Happy

In my [previous blog post](https://paperbaglife.github.io/#/blogs/2025-06-06-UX-learnings), I discussed adding a Cookbook<sup>TM</sup> to Clockwork's internal utility website.

I created this feature because I physically set up the rack, wired the cables, and installed software on the HPC servers. Coworkers frequently asked me recurring questions, and finding answers in lengthy documents was time-consuming.

To address this, I developed the Cookbook: a modal filled with commands, knowledge, and debugging tips.

As more questions came my way, the Cookbook grew. However, I found myself repeatedly telling people, "It's in the Cookbook!" Eventually, it became difficult to find the commands people needed because they were buried "below the fold."

#### Below the Fold

This term refers to content that is not immediately visible when opening the modal. Users must scroll down to find what they are looking for.

To solve this, I decided to use the relatively new `<details>` element. The `<details>` element, combined with `<summary>`, functions like an accordion. It provides a one-line summary at the top, and users can click to expand each entry. This way, users can quickly see a top-level summary of topics and expand them as needed.

#### Responsive Design

One day, while having lunch, I tried to look up a command on my phone and realized the website looked terrible on mobile. The content was cramped horizontally, and I had to scroll sideways to read it.

To fix this, I adapted the website for mobile by using responsive design classes like `col-12 col-md-6`. These classes ensured the content adjusted dynamically to different screen sizes, making it much easier to use on smaller devices.

#### Clickstream Analysis

After making the improvements above, I thought the website was pretty feature-complete. So, I decided to have some fun by adding analytics to track how many times each link or tab was accessed daily. I added a feature to log clicks with timestamps, which also allowed me to see if anyone was working overtime. However, I didn’t realize these findings would lead to key insights into user experience.

One day, I noticed a pattern in the logs: an engineer was repeatedly clicking between the "Datacenter Info" link (a Google Doc) and the "Cookbook" within a matter of seconds.

Curious, I asked around to identify the engineer using the website (since only a few engineers were working on this project, it wasn’t hard to figure out). It turned out the engineer was unsure where to find the information they needed, and reading through the collapsed titles in the Cookbook was too time-consuming.

The solution became obvious: add a search bar!

The new Cookbook now has a search bar at the top that filters entries based on string matching. The search bar is automatically focused upon opening the modal, allowing users to start typing immediately. Filtered entries expand automatically as the user types.

This means that if you remember even a small snippet of the command you’re looking for, you can type it into the search bar to quickly find the full command along with explanations of what it does.

## Summary

This case study highlights the importance of continuously improving user experience based on real-world feedback and analytics. By observing user behavior and listening to their needs, I was able to identify pain points—such as difficulty finding information and poor mobile usability—and implement practical solutions like responsive design, accordions for organization, and a powerful search bar. These changes made the Cookbook more accessible, efficient, and user-friendly for engineers relying on it daily.

(The above summary is AI generated.)

All I wanted to say is, this was fun for me, and realizing I learned stuff along the way is just the cherry on top.

Next one might take a while as I think about what I want to write... Stay tuned!
