import {StackLL} from '../data-structures/stack.js';


// Creating a StackLL object
const stackLL = new StackLL();
// Push item onto the StackLL
stackLL.push(1);
stackLL.push(2);
stackLL.push(3);
// Remove item from to of StackLL
console.log('#StackLL: Push', stackLL.getTop().toString());
console.log('#StackLL: Pop', stackLL.pop().toString());
console.log('#StackLL: Print', stackLL.getTop().toString());
// Push item onto the StackLL
console.log('#StackLL: Pop', stackLL.pop().toString());
stackLL.push(4);
console.log('#StackLL: Push', stackLL.getTop().toString());
// Check if StackLL isEmpty
console.log('#StackLL is EMpty:', stackLL.isEmpty());
// Pop to empty StackLL
console.log('#StackLL: Pop', stackLL.pop().toString());
console.log('#StackLL: Pop', stackLL.pop().toString());
// Check if StackLL isEmpty
console.log('#StackLL is EMpty:', stackLL.isEmpty());

