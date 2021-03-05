# Recursive functions

- [Recursive functions](#recursive-functions)
  - [How recursive functions work](#how-recursive-functions-work)
  - [Base Case](#base-case)
  - [Two essentials components of a recursive function](#two-essentials-components-of-a-recursive-function)

## How recursive functions work

Invoke the same function with a different input until you reach your base case

## Base Case

The condition when the recursion ends

## Two essentials components of a recursive function

- Base Case
- Different Input

Example:

```JavaScript
    function countDown(num) {
        if (num <= 0) {
            console.log('All done!');
            return;
        }
        console.log(num);
        num--;
        countDown(num);
    }
    /*
        print 3
        countDown(2)
        print 2
        countDown(1)
        print 1
        countDown(0) // base case reached
        print 'All done!'
    */

   function sumRange(num) {
       if (num === 1) return 1;
       return num + sumRange(num - 1);
   }
   /*
        sumRange(3)
            return 3 + sumRange(2)
                            return 2 + sumRange(1)
                                            return 1 => Base case
        =>
        sumRange(3)
            return 3 + sumRange(2)
                            return 2 + 1
        =>
        sumRange(3)
            return 3 + 3
        =>
        return 6
   */
```