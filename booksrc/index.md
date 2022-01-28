
# Doc Holiday

##### Document generation options

###### HTML
 `doc/index.html`  
 you can publish by pushing to the html server of your choice
###### Markdown
 `booksrc/API.md`  
 use other booksrc md files to frame book, publish by pointing your github go-to-file at it.

###### Publishing using GitBook or HonKit
 create `_book` inside booksrc and use options to 
reference the index.md and a main page (intro.md) then publish the _book html tree 
   
###### Recommended (what we are doing here)
- set the go-to-file page in your repository to `booksrc/index.md`
- Put the other outputs into .gitignore
- set `markdown` as the format in doc-holiday.conf
- run doc-holiday from the project directory

[Repository README](../README.md)

## Main documentation
- [Introduction](intro.md)
- [Getting Started](Getting%20Started.md)
- [API Reference](API.md)