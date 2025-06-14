---
title: Game Dev - Top Down Shooter
date: 2025-06-0x
tags: [WIP, Game Dev]
---

# {{frontmatter.title}}

## My Journey and Approaches for Top Down Shooters

From Flash games on websites to triple-A titles, I have played many different genres of video games.
Ever since writing my first line of code in college, I have thought about how I can use this new found ability to develop games.

My very first game is a top down shooter developed in Unity. I'll dive into how it influenced future designs, using other engines/frameworks. I won't go into details and instead will give a high level overview. There are thousands of good video guides on YouTube on how to develop in Unity if you are interested.

### Unity: using `GameObject`s

In Unity, the fundamental building block for a game is a `GameObject`.
In the top down shooter wolrd, a single `GameObject` with some code controlling its behavior in the `Update` function, could be the player character.

For example:

```c++
using UnityEngine;

public class Example_GameObject : MonoBehaviour
{
  void Update()
  {
    // something that moves the object, for example
  }
}
```

This is the paradigm that I followed, and each entity in the top down shooter game is just a `GameObject`.

The player character and enemies uses functions like `OnCollisionEnter` to handle losing a life when hit by a bullet, by checking the tags of the collision.

The bullet will update its position in `Update()`