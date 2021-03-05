# Helper Recursive Function

```JavaScript
    function outer(input) {
        var outerScopedVariable = [];

        function helper(helperInput) {
            // modify outerScopedVariable
            helper(helperInput--);
        }
        helper(input);

        return outerScopedVariable;
    }

    function collectOddValues(arr) {
        let result = [];

        function helper(helperInput) {
            if (helperInput.length === 0) {
                return;
            }

            if (helperInput[0] % 2 !== 0) {
                result.push(helperInput[0]);
            }

            helper(helperInput.slice(1));
        }

        helper(arr);

        return result;
    }
```

In order to aggregate return values and store values in a variable, create closure over a recursive function to perform recursion
