

# LEET CODE Counter Function

## Question

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


## Input Output
Input:
n = 10
["call","call","call"]
Output: [10,11,12]
Explanation:
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

## Description

This JavaScript module exports a function `createCounter` that, given an integer `n`, returns a counter function. The counter function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc.).

## Usage

### Function Signature

```javascript
const createCounter = (n) => {
  let counter = 0;
  return () => n + counter++;
};
