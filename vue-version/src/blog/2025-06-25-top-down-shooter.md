---
title: Game Dev - Top Down Shooter
date: 2025-06-25
tags: [Game Dev]
---

# {{frontmatter.title}}

## My Journey and Approaches for Top Down Shooters

From Flash games on random websites to triple-A titles, I’ve played all kinds of video games.
I've always wanted to make a game myself, however, I had no programming experience and I don't know where to start.
So I looked around and found RPG Maker. This framework allowed me to make games by drag and drop with a simple turn based combat engine.
That exploration is for another day in [the next blogpost](https://paperbaglife.github.io/#/blogs/2025-07-05-turn-based-combat)

Ever since writing my first line of code in college, I’ve been thinking about making a game myself.
My very first game from scratch (with code) was a top-down shooter developed in Unity. 
It became a foundation for many future experiments, using other engines and frameworks.
This post gives a high-level overview of how I approached this genre across different tools and languages. I won’t go deep into code tutorials—there are plenty of great YouTube videos if you want to learn Unity or similar engines in detail.

---

### Unity: Using `GameObject`s

In Unity, the fundamental building block of any game is the `GameObject`.
In a top-down shooter, a `GameObject` with a behavior script attached to it can represent a player, enemy, or bullet.

Here's a simple example:

```csharp
using UnityEngine;

public class Example_GameObject : MonoBehaviour
{
  void Update()
  {
    // something that moves the object, for example
  }
}
```

Everything that needs to update per frame (like player or enemy movement) goes into `Update()`.
To handle collisions (like a bullet hitting a player), Unity offers built-in functions like `OnCollisionEnter`, and you can use tags to differentiate between object types.

This was the paradigm I followed: each entity was a `GameObject`, and all updates happened in Unity’s main loop.

---

### Pygame: `Sprite`s Are Just `GameObject`s

For a freshman-year coding project, I recreated a top-down shooter in Pygame.
Pygame uses the `Sprite` class, which plays a similar role to Unity’s `GameObject`. I subclassed `Sprite` to define player, enemy, and bullet behaviors, each with an `update()` method called manually in the main game loop.

Example main loop:

```python
while not gameOver:
  player.update()
  for bullet in playerBulletGroup:
    bullet.update()
  for enemy in enemyGroup:
    enemy.update()
  for bullet in enemyBulletGroup:
    bullet.update()
```

The Unity structure translated nicely into Pygame. You can try this game in [the projects section](https://paperbaglife.github.io/#/projects).

---

### Vue/TypeScript: `Type`s and `Class`es as GameObjects

After joining the UI team at work and picking up Vue/TypeScript, I wondered: could I build a game with this stack too?

Following the same approach, I created types to represent enemies, players, and bullets, then used SVG for rendering. Each enemy was a constant of a given type, represented as a `<rect>` in the SVG DOM.

Example of rendering enemies:

```html
<g
  v-for="enemy in liveEnemies"
  :key="enemy.id"
  :x="enemy.x"
  :y="enemy.y"
>
  <rect
    :style="{ '--color': enemy.color }"
    class="enemy"
    :width="enemy.width"
    :height="enemy.height"
    :x="enemy.x"
    :y="enemy.y"
  />
  <text
    :x="enemy.x + enemy.width / 2"
    :y="enemy.y + enemy.height / 2"
    class="small hp-display"
  >
    {{ enemy.hp }}
  </text>
</g>
```

You can try playing this version [on my website](https://paperbaglife.github.io/#/games/shooter).

However, I hit a bottleneck.

I wanted to create a bullet-hell-style boss that launched complex bullet waves. But since each bullet was a DOM element, the performance dropped to about 3 frames per second. Time to find a better solution.

---

### Vue/TypeScript: Canvas to the Rescue

Instead of using hundreds of DOM elements via SVG, I switched to `canvas`, which lets you "hand-draw" everything in each frame. Now the entire game rendered inside a single DOM node: the canvas.

I still followed the same paradigm, but moved to using `class` instead of `type` for objects. This made it easier to manage internal state and behavior:

```ts
enemyBullets.value.forEach((bullet) => {
  if (!ctx) return
  ctx.beginPath()
  ctx.fillStyle = bullet.color
  ctx.arc(bullet.cx, bullet.cy, bullet.width, 0, 2 * Math.PI)
  ctx.fill()
})

enemies.value.forEach((enemy) => {
  if (!ctx) return
  ctx.fillStyle = enemy.name === 'generic' ? GENERIC_ENEMY_COLOR : BOSS_COLOR
  ctx.fillRect(enemy.cx - enemy.width / 2, enemy.cy - enemy.height / 2, enemy.width, enemy.height)
})
```

This change gave me a huge performance boost and finally allowed me to create beautiful bullet patterns, like in *Touhou* games.

To support complex movement, I introduced a `MovePattern` type. Each bullet follows a sequence of patterns—moving and rotating over time:

```ts
export type MovePattern = {
  duration: number
  xVel: number
  yVel: number
  rotation?: number
  rotationDuration?: number
}
```

You can try this game [here](https://paperbaglife.github.io/#/games/danmaku).

---

### Conclusion

Despite the wildly different tools and languages, the same core paradigm stuck: represent each entity as an object with behavior and update it each frame.

If you’re just starting out with game dev, my advice is this: don’t worry too much about the tech stack. Pick one, build something small, and iterate. Whether it’s Unity, Python, or JavaScript, the principles of real-time logic, object management, and frame-by-frame updates remain largely the same.

Who knows—you might end up drawing bullet waves on a web canvas one day, too.
