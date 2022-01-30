
## Publishing your documentation

The point of documentation is that is meant to be read by the people
who will be using the code that it references.

This means providing it to this audience through a standard and consumable medium.

If you are writing documentation for an in-house tool, perhaps this is
a space on an internal web server.

If you are creating tools or libraries for an open-source project, and you 
want your GitHub repository to be the front-face for this project, then
you may simply want to associate your documentation with the repository.

If you have a project that you want a separate public face for, you 
may wish to use an existing public webserver or make use of GitHub Pages 
to serve your documentation content.

Whatever your needs, there is a pathway to getting your docs published
in that form.  Let's look at a few common scenarios.


### API html
When the configured format is 'html', the html document tree
will be created in the directory specified by the configuration's 'html' setting.
the `index.html` file within this folder is the starting page for your
generated API documentation.

You can view this locally and/or choose to export it to a publicly viewable
location.

#### API html via file system
Use the file-system explorer of your computer to list the files of the 
html output folder and double-click on `index.html`.

Or, from the command-line, go to the html output directory and type
`open index.html`

#### API html via local server
There are several options here.  One is:
1. `cd` to the html output directory
2. `npx http-server`
3. open browser and point to [http://localhost:8080](http://localhost:8080)

#### External Webserver
Following the instructions for your webserver provider, copy
the full contents of the html output directory into your webserver
document path.  Then point to this location with your browser.

#### GitHub Pages
If you don't have or don't want to use a traditional WebServer, consider
using [GitHub Pages]() instead.

This is a great solution for projects that are already on GitHub anyway, 
and is a practical alternative to a conventional web server even for projects
that are not.

- Read the material at the GitHub Pages site. 
You will want to decide if you will use your single 'account' site or 
your per-project site for the current publishing task (these options are not mutually exclusive). 


__If using the single account option__, set your html output configuration setting
to point with the root of the cloned repository representing your _username_.github.io
site (for example `/Users/myname/projects/myname.github.io/thisproject`) so that
your API documentation is generated there.

Once your docs are generated, move to the _username_.github.io project directory and add, commit and push
these files to the site repository.  You should see your docs at http://_username_.github.io/_thisproject_/ (or whatever you named your output directory)

__If using the per-project approach__, set your html output configuration setting
to be a folder local to your project root (e.g. 'doc'), and make sure this location
is not under .gitignore and can be pushed to the repository.

Once your docs are generated, add, commit, and push these to the repository.
You should make