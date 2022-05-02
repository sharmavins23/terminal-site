# Terminal Site

This project is a terminal in a website.

## How do I add a command?

Commands are filed away neatly in `./src/commands/`.

To add a command:

1. Create a new `./src/<FOLDER>/command.cmd.js` file.
2. Add the necessary information (in alphabetical order) in
   `./src/meta/help.cmd.js` in the JSON object.
3. Import the file in `./src/App.js` and add it to the `commandsList` object.

Commands can do anything, and take in props as well (which are passed in as a
singular string, that needs processed/formatted). Any React-based components
SHOULD be embeddable within the command line, as well as images and other simple
constructions.

## To-Do

### Refactors

-   `help.cmd.js`needs to have additional functionality for specifying a
    command. This can be done by adding arguments into the JSON file and
    switching to a separate event call.
-   Imports in `App.js` are extremely cumbersome, and could at least be splitted
    into a separate file and exported as a group (or possibly, just the command
    values that need exported could be paged and called.)
-   Page metadata needs to be set (including Favicon, HTML meta, etc)

### New features

-   Add feature command for `apple.cmd.js`.
-   Add a text-based fishing game (or possibly, a node-canvas game)
-   Add a raytracing function
-   Add a color theme changer/switcher (currently, app is forcibly set to
    material-dark)
-   Create some form of dynamic virtual filestructure that can be modified
-   Add basic mathematics commands

# License TL;DR

This project is distributed under the MIT license. This is a paraphrasing of a
[short summary](https://tldrlegal.com/license/mit-license).

This license is a short, permissive software license. Basically, you can do
whatever you want with this software, as long as you include the original
copyright and license notice in any copy of this software/source.

## What you CAN do:

-   You may commercially use this project in any way, and profit off it or the
    code included in any way;
-   You may modify or make changes to this project in any way;
-   You may distribute this project, the compiled code, or its source in any
    way;
-   You may incorporate this work into something that has a more restrictive
    license in any way;
-   And you may use the work for private use.

## What you CANNOT do:

-   You may not hold me (the author) liable for anything that happens to this
    code as well as anything that this code accomplishes. The work is provided
    as-is.

## What you MUST do:

-   You must include the copyright notice in all copies or substantial uses of
    the work;
-   You must include the license notice in all copies or substantial uses of the
    work.

If you're feeling generous, give credit to me somewhere in your projects.
