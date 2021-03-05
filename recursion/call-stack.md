# The call stack

**Stack** data structure

When a function is invoked, it is placed on the top of the call stack (**pushed to the top**)

When JavaScript sees the **return** keyword or when the function ends, the compiler will remove the function from the call stack (**pop from the call stack**)

Normal functions are pushed on the call stack and popped out when they are done

With recursive function, new functions are continually pushed onto the call stack