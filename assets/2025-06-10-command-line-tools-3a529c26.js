import{o as t,a as n,e as a,t as s,D as c}from"./index-31dbe9bf.js";const i={class:"markdown-body"},r=c(`<h2>Why?</h2><p>Why would you use <code>grep</code>, <code>sed</code>, or <code>awk</code> when you can just open the file in Vim or VS Code and search or operate on the log files?</p><p>Because it’s quick and easy.</p><p>Why would you use <code>pdsh</code> or <code>screen</code> when you can just do it manually on each machine or run the job in the foreground?</p><p>Because you can walk away from the computer.</p><p>It’s much faster to whip up a simple command in <code>grep</code> instead of going through the file in Vim and searching or jumping through logs.</p><h2>Editing/Transforming Data</h2><p>Most Unix operating systems come with the edit/filter commands <code>grep</code>, <code>sed</code>, and <code>awk</code>.</p><h3>grep</h3><p><code>grep</code> can be used to search for a pattern in a folder like the following:</p><pre><code class="language-bash">grep -r &quot;pattern&quot; /path/to/directory
</code></pre><p>or be used as a pipe like</p><pre><code class="language-bash">cat large_file.txt | grep &#39;pattern&#39;
</code></pre><p>The most common usecase I have found is to search for lines that begin with <code>Error</code> or <code>Warning</code> or any sort of prefix/pattern you are looking for in a log file. Combine it with <code>tail -f</code> to see filtered streaming output.</p><p>Common flags:</p><ul><li><code>-i: case insensitive</code></li><li><code>-v: reverse match</code></li><li><code>-A&lt;x&gt;: x lines after match</code></li><li><code>-B&lt;x&gt;: x lines before match</code></li><li><code>-C&lt;x&gt;: x lines before and after match</code></li></ul><h3>sed</h3><p><code>sed</code> can be used to replace a pattern/literal with another pattern/literal</p><pre><code class="language-bash"># Same as \`cat textfile\` but replaces PATTERN WITH REPLACEMENT (first occurance on each line)
sed &#39;s/PATTERN/REPLACEMENT/&#39; textfile
# replace all occurances
sed &#39;s/PATTERN/REPLACEMENT/g&#39; textfile
# also:
cat textfile | sed &#39;s/PATTERN/REPLACEMENT/g&#39;
# Edits the file in place
sed -i &#39;s/PATTERN/REPLACEMENT/g&#39; textfile
# escaping
sed -i &#39;s/filepath: .*/filepath: \\/path\\/to\\/file/g&#39; config_file
</code></pre><p>The most common use case I have found is to replace a set of config files on mutiple machines at once, using <code>pdsh</code> along with <code>sed</code>.</p><h3>awk</h3><p><code>awk</code> is a bit more involved, but some simple usages are quick and easy.</p><pre><code class="language-bash">$ ps aux
USER  PID %CPU %MEM ...   TIME COMMAND
root    1  0.0  0.0 ...   3:05 &lt;command&gt;
root    2  0.0  0.0 ...   0:00 [kthreadd]
...

# You can use the following to get the second column, extracting only the pids
$ ps aux | awk &#39;{print $2}&#39;
PID
1
2
3
...

</code></pre><h2>Efficiency tools</h2><p><code>nohup</code> and <code>ctrl+r</code> are built in, but you have to install <code>pdsh</code> or <code>screen</code>.</p><h3>pdsh</h3><p><code>pdsh</code> can help you run the same command on multiple machines to parallize work. This can save you a lot of time running commands manually on each machine, but you need to set up passwordless ssh into the machines.</p><p>Example: replace <code>output.json</code> with <code>output2.json</code> in config file at /etc/configs/config.yaml, on all 50 machines, named machine&lt;i&gt; for i in 0, 49:</p><pre><code class="language-bash">pdsh -w machine[0,49] &quot;sed -i &#39;s/output.json/output2.json/g&#39; /etc/configs/config.yaml&quot;
</code></pre><h3>ctrl+r</h3><p><code>ctrl+r</code> is reverse searching your bash history for a command that you’ve run before. Simply start typing after pressing <code>ctrl+r</code> and commands matching what you typed will show up. <code>ctrl+r</code> again at any point to go back to an earlier command that matches what you’ve typed.</p><h3>screen and nohup</h3><p>You have to install screen, but it’s very helpful.</p><p>Ever started a command that’ll take 30 min or longer, and wanted to take your laptop and go home, but worried that the command will terminate once your ssh session disconnects?</p><p>You can leave your command running in a screen or nohup.</p><p><code>screen</code> to open up a screen, then run your command in screen. Use the keyboard combination of ctrl+a =&gt; d to quit the screen, and your command will be running in the screen.</p><p><code>screen -r</code> to resume back to your screen session, even after logging out of the ssh session. Mutiple screen sessions can be viewed through <code>screen -ls</code></p><p>Similarly, <code>nohup \\&lt;long command\\&gt; &amp;</code> will run a command in the background and have it keep running, even if the ssh connection is cut off (ie due to spotty internet).</p><h3>git related commands (updated 2025-06-12)</h3><p>Squashing commits into a single one or multiple important ones (to make a clean commit history)</p><pre><code class="language-bash">git rebase -i HEAD~5
git rebase -i master #(or whatever branch you are based on)
</code></pre><h2>Conclusion</h2><p>I’ve shared some tools I find useful, at work or in my personal projects. Please leave a comment if you have more useful commands, or tips and tricks on using any command line tool that boosts your productivity.</p>`,43),u="Command Line Tools - A Toolbox for Myself and Others",m="2025-06-10T00:00:00.000Z",g=["command line tools"],f={__name:"2025-06-10-command-line-tools",setup(d,{expose:o}){const e={title:"Command Line Tools - A Toolbox for Myself and Others",date:"2025-06-10T00:00:00.000Z",tags:["command line tools"]};return o({frontmatter:e}),(l,p)=>(t(),n("div",i,[a("h1",null,s(e.title),1),r]))}};export{m as date,f as default,g as tags,u as title};
