
## Introducing Constraints

_Doc-holiday_ introduces an extension to normal JSDoc convention with the 
introduction of _constraints_.

A constraint is a limitation on the value (a parameter or return value)
may have in order to fit the specification.

For example, suppose you have a parameter named "age" which is meant to 
represent the age of a user. You have specified that this should be a type
"number", and the expectation is that callers of this function will
pass reasonable user ages, such as 16, 30, 44, 61, or 72.  But what if someone
passes 15.59? Or -12? Or 1,234? 

As a good programmer, you have code in this function dedicated to parameter validation
that would otherwise break your algorithm, and you reject or clamp such
values accordingly (or you missed a case, and your app crashes).  

But does the documentation reflect that?  

Maybe you spelled all of this out in the function or parameter descriptions, but
probably not, because that's tedious to do and even if you did it would not stand out
as anything to take note of because the comment would be a long rambling block of text.

This is where constraints come in.  

Constraints allow you to declare the runtime limitations of a value
in a concise format in your comments.  This is expanded upon in the final
documentation to render as a separately styled list of restrictions upon the value that is easy to note by those
reading the documentation.

If you are looking for a corresponding validation library you can use at runtime to enforce this in your code, we have
that too! [the `validate` function]() can be imported into your sources and used to check that a value passed at 
runtime meets the specification documented.

