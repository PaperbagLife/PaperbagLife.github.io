---
title: Making a Blog on GitHub Pages
date: 2025-06-05
tags: [Vue, Pinned]
---

# {{frontmatter.title}}

### Preface (TL;DR skip this)

While working at Clockwork Systems, I was managing the server room along with the fancy HPC servers. Eventually, the noise got out of hand, and we had to move the entire setup to a datacenter colo.

Once we got an external IP address, I thought it would be a waste not to make good use of it. So, I created a utilities website that queries the state of the servers, including software versions, GID indices, and versions of relevant libraries for HPC workloads. I also added links to relevant documentation and internal resources (the website itself was gated behind credentials, of course).

I soon added a cookbook that included frequently asked questions about the datacenter servers or just anything I would get asked by a coworker in general.

For some light-hearted fun, I also made a gallery of office art (mostly drawings of memes). Some coworkers asked me to add a comment section so they could leave their evaluations of the memes. So I did—it was just a matter of adding another backend handler.

But then I thought: How would I do this for my personal website hosted on GitHub Pages, which is a static site?

### Using GitHub Issues to Track Comments

I explored [Utterances](https://utteranc.es/), which can power your static sites with comments by pulling them from GitHub Issues.

Utteranc.es is really simple to use, but the general quickstart doesn't quite work with Vue 3. The problem is that Vue prevents you from using a `<script>` tag inside the `<template>`.

A simple workaround is to create a `script` element programmatically in TypeScript. Thanks, GPT!

### Rendering Blogs with Markdown

To import and render Markdown, I needed to use a plugin. I came across `unplugin-vue-markdown`, which seemed like a perfect fit. However, following the tutorial led to some linting issues.

The following section describes my journey of debugging and getting it to work. I'm not sure if I'm doing the "right" thing, so please advise in the comment section if you have a better approach to these problems.

- `unplugin-vue-markdown` is an ESM-only package, so I had to add `"type": "module"` to my `package.json` to tell Node to treat `.ts` files as ESM.
- If you want to use a Markdown file as a component directly, you need to update `env.d.ts` (or another environment file) to declare `*.md` as a component.
- I was wondering what the best way to route the individual blogs, and I came across Vue router's Dynamic Route Matching. I used `path: /blogs/:slug` to dynamically render different Markdown files while using the same component for the top-level page.
- The frontmatter metadata works differently than expected with `unplugin-vue-markdown`. The data is spread directly on the module instead of being bundled under a `.frontmatter` attribute.

### Conclusion

Building a blog on GitHub Pages has been quite an interesting process. I'm really impressed with how much Copilot has been able to assist me in learning new things.

If you’ve read this far, please leave a comment to share your thoughts! I'll be reading and replying to every single one. :)
