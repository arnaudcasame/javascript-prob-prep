import { Stack } from "../../../data-structures/stack";
export const palindrome = function(list, length){
    const stack = new Stack();
    const mid = Math.floor(length/2) + length%2;
    let i = 1;
    while(list){
        if((i < mid && length%2 !== 0) || (i <= mid && length%2 === 0)){
            stack.push(list.val);
            console.log(i, mid, stack.data_)
            i++;
        }else if(i===mid && mid%2 !== 0){
            // Skipping unique value
            i++;
        }else{
            const curr = stack.pop();
            if(curr !== list.val){
                stack.push(curr)
            }
        }
        list = list.next
    }
    return stack.isEmpty();
}