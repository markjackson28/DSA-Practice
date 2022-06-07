# Richest Customer Wealth

## Input/Output

```
Input: digits = [1,2,3]

Output: [1,2,4]
```

## Algorithm

Base check to see if argument contains values
Create a last index variable
Add plus 1 to that variable
If last index is total is 10+, split and push new vaules to end of array
return array

## Pseudo Code

Create a plusOne function takes in digits are arguments
if check to see if anything is inside argurments
Declare lastIndex = digits[digits.length - 1]
Add 1 to lastIndex
Replace last index with lastIndex
Return digits array

## Edge Case/Testing

Check if anything exist inside argument
Make sure it's an array
Are the ints or strs
Null value
Correct output

## Big O

Time: O(n)

Space: O(1)
