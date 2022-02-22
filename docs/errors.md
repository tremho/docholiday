### Possible error messages when using _Doc-Holiday_
#### And what to do about them

Nothing is foolproof, and _Doc-Holiday_ sadly is no exception.

It is possible to create source code that is not handled well by the _Doc-Holiday_ parser.

It is also possible for _Doc-Holiday_ to produce a stub file that is not handled well by the JSDoc rendering engine.

And, as noted in [Render Differences](Render_differences), the actual output of the rendering engines may have systemic issues
that originate from these engines and/or templates.

If you encounter any issues in your own use of _Doc-Holiday_ that you 
feel should have gone more gracefully, please leave an issue report on the
_Doc-Holiday_ [issue tracker](https://github.com/tremho/docholiday/issues).
This is the only way in which the _Doc-Holiday_ developers will know if 
there is a problem.  If it's a problem for you, its likely a problem for
others, and that's a problem for us.  So please report unexpected behavior that you might encounter.

So that you might be able to better understand and mitigate things
that may go awry, the following describes the types of errors that
may be encountered:

#### Synchronization Stall

You may see lines like the following emitted when running _doc-holiday_ on certain sources:

    Synchronization stall on line xyz

In extreme cases, this may repeat a large number of times and/or the app may hang.
If you encounter an extreme case, _file a report immediately_.

Less extreme cases are generally benign, and not entirely unexpected.
For example, you may see this if you have an unsupported multiple property declaration in your code, 
such as:
```
// This is not supported by Doc-Holiday
let a, b, c, d
```

The term _Synchronization Stall_ simply means that the parser
has encountered a line of source code it thinks it should have already handled.

This can get out of sync if the parsing of an entity fails to advance
to the next recognizable line.

In addition to multiple declarations, this may occur in some other scenarios
but rarely with any negative effect on the output. 

#### JSDoc errors

When rendering the stub files, the JSDoc engine may find reason for exception
with how the stub is constructed.  This should not happen.
_Please report an issue if you encounter these types of errors._

The error will specify which stub file it found offensive, as well as the line number,
so you may be able to discern more about the cause of the error by
looking at the stub file.  If you can fix the stub file, you 
may be able to continue by running again with the `--render-only` option.

##### Using ##DH-OFF

If you encounter some code that is problematic, you may wish to 
exclude that section of your source code with the ##DH-OFF
directive, such as:

```typescript
// ##DH-OFF

 -- any code in this section is excluded from Doc-Holiday parsing --

// ##DH-ON

// We can enable Doc-Holiday parsing again with ##DH-ON
export function backToNormal() {
    
}
```


