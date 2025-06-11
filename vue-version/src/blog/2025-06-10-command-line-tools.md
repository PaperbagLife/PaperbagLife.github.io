---
title: Command Line Tools - A Toolbox for Myself and Others
date: 2025-06-10
tags: [command line tools]
---

# {{frontmatter.title}}

## Why?

Why would you use `grep`, `sed`, or `awk` when you can just open the file in Vim or VS Code and search or operate on the log files?

Because it's quick and easy.

Why would you use `pdsh` or `screen` when you can just do it manually on each machine or run the job in the foreground?

Because you can walk away from the computer.

It's much faster to whip up a simple command in `grep` instead of going through the file in Vim and searching or jumping through logs.

## Editing/Transforming Data

Most Unix operating systems come with the edit/filter commands `grep`, `sed`, and `awk`.

### grep

`grep` can be used to search for a pattern in a folder like the following:

```bash
grep -r "pattern" /path/to/directory
```

or be used as a pipe like

```bash
cat large_file.txt | grep 'pattern'
```

The most common usecase I have found is to search for lines that begin with `Error` or `Warning` or any sort of prefix/pattern you are looking for in a log file. Combine it with `tail -f` to see filtered streaming output.

Common flags:

- `-i: case insensitive`
- `-v: reverse match`
- `-A<x>: x lines after match`
- `-B<x>: x lines before match`
- `-C<x>: x lines before and after match`

### sed

`sed` can be used to replace a pattern/literal with another pattern/literal

```bash
# Same as `cat textfile` but replaces PATTERN WITH REPLACEMENT (first occurance on each line)
sed 's/PATTERN/REPLACEMENT/' textfile
# replace all occurances
sed 's/PATTERN/REPLACEMENT/g' textfile
# also:
cat textfile | sed 's/PATTERN/REPLACEMENT/g'
# Edits the file in place
sed -i 's/PATTERN/REPLACEMENT/g' textfile
# escaping
sed -i 's/filepath: .*/filepath: \/path\/to\/file/g' config_file
```

The most common use case I have found is to replace a set of config files on mutiple machines at once, using `pdsh` along with `sed`.

### awk

`awk` is a bit more involved, but some simple usages are quick and easy.

```bash
$ ps aux
USER  PID %CPU %MEM ...   TIME COMMAND
root    1  0.0  0.0 ...   3:05 <command>
root    2  0.0  0.0 ...   0:00 [kthreadd]
...

# You can use the following to get the second column, extracting only the pids
$ ps aux | awk '{print $2}'
PID
1
2
3
...

```

## Efficiency tools

`nohup` and `ctrl+r` are built in, but you have to install `pdsh` or `screen`.

### pdsh

`pdsh` can help you run the same command on multiple machines to parallize work.
This can save you a lot of time running commands manually on each machine, but you need to set up passwordless ssh into the machines.

Example: replace `output.json` with `output2.json` in config file at /etc/configs/config.yaml, on all 50 machines, named machine\<i\> for i in 0, 49:

```bash
pdsh -w machine[0,49] "sed -i 's/output.json/output2.json/g' /etc/configs/config.yaml"
```

### ctrl+r

`ctrl+r` is reverse searching your bash history for a command that you've run before.
Simply start typing after pressing `ctrl+r` and commands matching what you typed will show up.
`ctrl+r` again at any point to go back to an earlier command that matches what you've typed.

### screen and nohup

You have to install screen, but it's very helpful.

Ever started a command that'll take 30 min or longer, and wanted to take your laptop and go home, but worried that the command will terminate once your ssh session disconnects?

You can leave your command running in a screen or nohup.

`screen` to open up a screen, then run your command in screen.
Use the keyboard combination of ctrl+a => d to quit the screen, and your command will be running in the screen.

`screen -r` to resume back to your screen session, even after logging out of the ssh session.
Mutiple screen sessions can be viewed through `screen -ls`

Similarly, `nohup \<long command\> &` will run a command in the background and have it keep running, even if the ssh connection is cut off (ie due to spotty internet).

## Conclusion

I've shared some tools I find useful, at work or in my personal projects.
Please leave a comment if you have more useful commands, or tips and tricks on using any command line tool that boosts your productivity.
