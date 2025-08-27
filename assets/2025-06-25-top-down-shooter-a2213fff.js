import{o,a,e as n,t as i,D as r}from"./index-73593571.js";const s={class:"markdown-body"},l=r(`<h2>My Journey and Approaches for Top Down Shooters</h2><p>From Flash games on random websites to triple-A titles, I’ve played all kinds of video games. I’ve always wanted to make a game myself, however, I had no programming experience and I don’t know where to start. So I looked around and found RPG Maker. This framework allowed me to make games by drag and drop with a simple turn based combat engine. That exploration is for another day in <a href="https://paperbaglife.github.io/#/blogs/2025-07-05-turn-based-combat">the next blogpost</a></p><p>Ever since writing my first line of code in college, I’ve been thinking about making a game myself. My very first game from scratch (with code) was a top-down shooter developed in Unity. It became a foundation for many future experiments, using other engines and frameworks. This post gives a high-level overview of how I approached this genre across different tools and languages. I won’t go deep into code tutorials—there are plenty of great YouTube videos if you want to learn Unity or similar engines in detail.</p><hr><h3>Unity: Using <code>GameObject</code>s</h3><p>In Unity, the fundamental building block of any game is the <code>GameObject</code>. In a top-down shooter, a <code>GameObject</code> with a behavior script attached to it can represent a player, enemy, or bullet.</p><p>Here’s a simple example:</p><pre><code class="language-csharp">using UnityEngine;

public class Example_GameObject : MonoBehaviour
{
  void Update()
  {
    // something that moves the object, for example
  }
}
</code></pre><p>Everything that needs to update per frame (like player or enemy movement) goes into <code>Update()</code>. To handle collisions (like a bullet hitting a player), Unity offers built-in functions like <code>OnCollisionEnter</code>, and you can use tags to differentiate between object types.</p><p>This was the paradigm I followed: each entity was a <code>GameObject</code>, and all updates happened in Unity’s main loop.</p><hr><h3>Pygame: <code>Sprite</code>s Are Just <code>GameObject</code>s</h3><p>For a freshman-year coding project, I recreated a top-down shooter in Pygame. Pygame uses the <code>Sprite</code> class, which plays a similar role to Unity’s <code>GameObject</code>. I subclassed <code>Sprite</code> to define player, enemy, and bullet behaviors, each with an <code>update()</code> method called manually in the main game loop.</p><p>Example main loop:</p><pre><code class="language-python">while not gameOver:
  player.update()
  for bullet in playerBulletGroup:
    bullet.update()
  for enemy in enemyGroup:
    enemy.update()
  for bullet in enemyBulletGroup:
    bullet.update()
</code></pre><p>The Unity structure translated nicely into Pygame. You can try this game in <a href="https://paperbaglife.github.io/#/projects">the projects section</a>.</p><hr><h3>Vue/TypeScript: <code>Type</code>s and <code>Class</code>es as GameObjects</h3><p>After joining the UI team at work and picking up Vue/TypeScript, I wondered: could I build a game with this stack too?</p><p>Following the same approach, I created types to represent enemies, players, and bullets, then used SVG for rendering. Each enemy was a constant of a given type, represented as a <code>&lt;rect&gt;</code> in the SVG DOM.</p><p>Example of rendering enemies:</p><pre><code class="language-html">&lt;g v-for=&quot;enemy in liveEnemies&quot; :key=&quot;enemy.id&quot; :x=&quot;enemy.x&quot; :y=&quot;enemy.y&quot;&gt;
  &lt;rect
    :style=&quot;{ &#39;--color&#39;: enemy.color }&quot;
    class=&quot;enemy&quot;
    :width=&quot;enemy.width&quot;
    :height=&quot;enemy.height&quot;
    :x=&quot;enemy.x&quot;
    :y=&quot;enemy.y&quot;
  /&gt;
  &lt;text :x=&quot;enemy.x + enemy.width / 2&quot; :y=&quot;enemy.y + enemy.height / 2&quot; class=&quot;small hp-display&quot;&gt;
    {{ enemy.hp }}
  &lt;/text&gt;
&lt;/g&gt;
</code></pre><p>You can try playing this version <a href="https://paperbaglife.github.io/#/games/shooter">on my website</a>.</p><p>However, I hit a bottleneck.</p><p>I wanted to create a bullet-hell-style boss that launched complex bullet waves. But since each bullet was a DOM element, the performance dropped to about 3 frames per second. Time to find a better solution.</p><hr><h3>Vue/TypeScript: Canvas to the Rescue</h3><p>Instead of using hundreds of DOM elements via SVG, I switched to <code>canvas</code>, which lets you “hand-draw” everything in each frame. Now the entire game rendered inside a single DOM node: the canvas.</p><p>I still followed the same paradigm, but moved to using <code>class</code> instead of <code>type</code> for objects. This made it easier to manage internal state and behavior:</p><pre><code class="language-ts">enemyBullets.value.forEach((bullet) =&gt; {
  if (!ctx) return
  ctx.beginPath()
  ctx.fillStyle = bullet.color
  ctx.arc(bullet.cx, bullet.cy, bullet.width, 0, 2 * Math.PI)
  ctx.fill()
})

enemies.value.forEach((enemy) =&gt; {
  if (!ctx) return
  ctx.fillStyle = enemy.name === &#39;generic&#39; ? GENERIC_ENEMY_COLOR : BOSS_COLOR
  ctx.fillRect(enemy.cx - enemy.width / 2, enemy.cy - enemy.height / 2, enemy.width, enemy.height)
})
</code></pre><p>This change gave me a huge performance boost and finally allowed me to create beautiful bullet patterns, like in <em>Touhou</em> games.</p><p>To support complex movement, I introduced a <code>MovePattern</code> type. Each bullet follows a sequence of patterns—moving and rotating over time:</p><pre><code class="language-ts">export type MovePattern = {
  duration: number
  xVel: number
  yVel: number
  rotation?: number
  rotationDuration?: number
}
</code></pre><p>You can try this game <a href="https://paperbaglife.github.io/#/games/danmaku">here</a>.</p><hr><h3>Conclusion</h3><p>Despite the wildly different tools and languages, the same core paradigm stuck: represent each entity as an object with behavior and update it each frame.</p><p>If you’re just starting out with game dev, my advice is this: don’t worry too much about the tech stack. Pick one, build something small, and iterate. Whether it’s Unity, Python, or JavaScript, the principles of real-time logic, object management, and frame-by-frame updates remain largely the same.</p><p>Who knows—you might end up drawing bullet waves on a web canvas one day, too.</p>`,39),m="Game Dev - Top Down Shooter",u="2025-06-25T00:00:00.000Z",y=["Game Dev"],g={__name:"2025-06-25-top-down-shooter",setup(c,{expose:t}){const e={title:"Game Dev - Top Down Shooter",date:"2025-06-25T00:00:00.000Z",tags:["Game Dev"]};return t({frontmatter:e}),(d,p)=>(o(),a("div",s,[n("h1",null,i(e.title),1),l]))}};export{u as date,g as default,y as tags,m as title};
