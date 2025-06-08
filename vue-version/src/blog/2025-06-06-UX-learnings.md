---
title: User Experience - a Case Study
date: 2025-06-06
tags: [Vue, Flask, UX]
---

# {{frontmatter.title}}

### Delivering a Smooth Experience

In my [previous blog post](https://paperbaglife.github.io/#/blogs/2025-06-05-blog-on-github-pages), I talked about how I created a utilities website to track the status of High-Power-Computing (HPC) servers. This was a fun little side project that I could work on intermittently, depending on my workload.

As a complete beginner in user experience, my goal was to get the website into a "working" state as quickly as possible.

For the backend, I quickly whipped up a Flask server in Python and created a systemd service file to run the server. For the frontend, I started with a Vue template and simply added a table to display the statuses. Done.

The result? Upon visiting the page, the web server had to `ssh` into the HPC servers (naively, in a for-loop), run expensive command-line tools, and parse the results. The user had to watch a spinning loading icon for a whole minute while the server fetched the status for all the machines.

The website went live, and I was pretty much the only user.

#### Time to Content: 1 minute

My first instinct was to parallelize the `ssh` commands using threads. This worked, but since the command-line tools still took time, it would still take 10–20 seconds for the results to show up.

At this point, several engineers were using the website to check the servers' statuses before running NCCL jobs. One coworker waited for 5 seconds and, seeing nothing, asked if the website was broken. I remember adding a line to the website to mock him for his impatience.

#### Time to Content: 10-20 seconds

After a period of back-to-back tickets, I was finally able to revisit this project. I thought about using a cache since most results were static states most of the time.

I implemented a cache to fetch the status every 30 seconds, save the results, and return the latest result immediately upon receiving a request. (Something something thread safety - just throw a lock on there.) This reduced the time-to-content to less than 1 second.

#### Time to Content: <1 second

At this point, I was pretty satisfied with the website. Over time, I added buttons to help organize various documents and internal links relevant to the project, as well as a cookbook of common commands and knowledge specific to our internal cluster.

Engineers use it daily (at least from 2025-04-20 to the day this was written) to access documents or find commands to run from the Cookbook.

The Cookbook<sup>TM</sup> is another fantastic case study in user experience, and I shall discuss it in the next blog.
