# What is sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

Ex:

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

## JavaScript's built-in sort method

- The default sort order is according to string Unicode code points.
- The method accepts an optional comparator function
- The comparator looks at pairs of elements (a, b) and determines their sort order based on the return value
  - If it returns a negative number, a should come before b
  - If it returns a positive number, a should come after b
  - If it returns 0, a and b are the same as far as the sort is concerned

Ex:

```JavaScript
    function numberCompare(num1, num2) {
        return num1 - num2;
    }

    [6, 4, 15, 10].sort(numberCompare); // [4, 6, 10, 15]
```
