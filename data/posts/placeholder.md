---
title: "My First Blog Post"
date: "2026-09-30"
summary: "A placeholder post with a lot of text, just to test scrolling and styling."
tags: ["misc", "event"]
---

Hey, welcome to my very first blog post! This is just a placeholder so I can test how long-form content actually looks and scrolls on my site.

## Why I'm building this site

I wanted a place to document my projects, share what I'm learning, and have a little corner of the internet that's entirely mine. Building it has taught me a ton about Next.js, React, and just how many small CSS quirks exist that you never notice until you hit them yourself.

So far I've learned about flexbox, grid, z-index stacking, margin collapsing (which genuinely tripped me up more than once), and how Next.js handles routing differently from a typical static site. It's been a fun challenge figuring out why things don't look the way I expect, and then slowly piecing together why.

## What this blog will cover

I'm planning to use this space for a few different kinds of posts:

- Devlogs on whatever project I'm currently building
- Notes on concepts I'm learning for the first time
- Short write-ups after finishing a project, reflecting on what worked and what I'd do differently
- Maybe the occasional non-coding post, just because

## A bit about my current project

Right now I'm deep in the process of building this very personal website. It's got a homepage with draggable little windows (heavily inspired by some very cool portfolio sites I stumbled across), a projects page with an animated wave background, and now this blog section you're reading.

Here's a taste of what the whole stack looks like under the hood:

- **Next.js** — for routing, fast page loads, and server-side rendering
- **React** — for building reusable components like my Navbar and Footer
- **TypeScript** — for catching mistakes before they become runtime bugs
- **Tailwind CSS** — for styling everything without writing a ton of custom CSS
- **Framer Motion** — for the draggable mini-windows on my homepage
- **Markdown + gray-matter** — for writing blog posts like this one in plain text instead of hardcoded JSX

## Some lorem-ipsum-style filler, just to make this long enough to scroll

Building a personal site from scratch really drives home how many small decisions go into even a simple-looking page. Every spacing choice, every color, every breakpoint is something you have to actually decide on, rather than something that comes for free.

It's also been a good crash course in debugging methodically instead of guessing. More than once, something looked broken for a reason that had nothing to do with what I assumed was wrong — a missing `relative` here, a stray class there, a z-index fighting against a parent's background. Each bug like that taught me something I'll probably recognize instantly next time instead of needing to debug from scratch again.

### A quick code block, since those should render too

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```

### And a blockquote, for good measure

> "The best way to learn is to build something real, break it, and figure out why."

## Wrapping up

That's it for this placeholder post! Once I've got my actual content ready, I'll swap this out for something real — but for now, this should be more than enough text to confirm scrolling, spacing, and typography all look right on the actual post page.

Thanks for reading this far, even though none of it was really meant to be read seriously. See you in the next post.