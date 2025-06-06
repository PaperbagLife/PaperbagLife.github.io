---
title: Making a blog on GitHub Pages
date: 2025-06-05
tags: [vue, blog]
---

# {{frontmatter.title}}

### Preface (TL;DR skip this)

While working at Clockwork Systems, I was managing the server room along with the fancy HPC servers. Then the noise got out of hand and we had to move the entire setup to a datacenter colo.

Then we got an external ip address, and I thought it'd be a waste to not make good use of it.
So I made a utilities website that queries the state of the servers, including software versions, GID index, and versions of relevant libraries for HPC workloads. I also added links to relevant documentations and internal resources (The website itself was gated behind credentials, of course).

I soon added a cookbook that included frequently asked questions regarding the datacenter servers, or just anything I would get asked by a coworker in general.

Then, in order to have some light-hearted fun, I also made a gallery of office art(Mostly drawings of memes).
I was asked to add a comment section because some coworkers wanted to leave their evaluation of the memes.
So I did. It was just the matter of adding another backend handler.

But I thought: How would I do this for my personal website hosted on GitHub Pages, which is a static site?

### Using GitHub Issues to track comments

So I explored https://utteranc.es/, which can power your static sites with comments,
by getting them from GitHub issues.

Utteranc.es is really quite simple to use, but the general quickstart doesn't quite work with vue3.
The problem is that vue prevents you from using a `<script>` tag inside the `<template>`.

A simple workaround is to create a `script` element programmatically in typescript. Thanks, GPT!

### Rendering blogs with Markdown

In order to import markdown and render them, I needed to use a plugin. I came across unplugin-vue-markdown which seemed to be a perfect fit. However, following the tutorial led to some linting issues.

The following section is my journey of debugging and getting it to work, but I'm not sure if I am doing the "right" thing, so please advise in the comment section if you have a better way to approach these problems.

- `unplugin-vue-markdown` is an ESM-only package, so I had to add `"type": "module"` to my `package.json` to tell Node to treat .ts files as ESM.
- if you want to use markdown file as component directly, you need to tell `env.d.ts` or whatever other env file to declare `*.md` as a component.
- using `path: /blogs/:slug` to change which markdown file I'm rendering, while using the same component to render the top level page
- The frontmatter metadata seems to work differently than GPTs would think for `unplugin-vue-markdown`, data is spread on the module directly instead of bundled under `.frontmatter` attribute.

### Conclusion

Building a blog on GitHub Pages is quite an interesting process. I'm really impressed with how much Copilot is able to assist me with learning new things.
If you read this far, please leave a comment to share your thoughts! I'll be reading and replying to every single one :)
