## 19. Remove Nth Node From End of List

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

#### Example 1:
![example 1](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)
```js
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

#### Example 2:
```js
Input: head = [1], n = 1
Output: []
```

#### Example 3:
```js
Input: head = [1,2], n = 1
Output: [1]
```

#### Constraints:
- The number of nodes in the list is sz.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

**Follow up:** Could you do this in one pass?