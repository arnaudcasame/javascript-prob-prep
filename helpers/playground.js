import {StackLL} from '../data-structures/stack.js';
import {QueueLL} from '../data-structures/queue.js';


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


// Creating a queueLL object
const queueLL = new QueueLL();
// enqueue item onto the queueLL
queueLL.enqueue(1);
queueLL.enqueue(2);
queueLL.enqueue(3);
// Remove item from to of queueLL
console.log('\n#QueueLL: enqueue', queueLL.peek().toString());
console.log('#QueueLL: dequeue', queueLL.dequeue().toString());
console.log('#QueueLL: Print', queueLL.peek().toString());
// enqueue item onto the queueLL
console.log('#QueueLL: dequeue', queueLL.dequeue().toString());
queueLL.enqueue(4);
console.log('#QueueLL: enqueue', queueLL.peek().toString());
// Check if queueLL isEmpty
console.log('#QueueLL is EMpty:', queueLL.isEmpty());
// dequeue to empty queueLL
console.log('#QueueLL: dequeue', queueLL.dequeue().toString());
console.log('#QueueLL: dequeue', queueLL.dequeue().toString());
// Check if queueLL isEmpty
console.log('#QueueLL is EMpty:', queueLL.isEmpty());
