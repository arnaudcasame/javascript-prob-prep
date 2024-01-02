export const intersect = function(list1, list2) {
    const head1 = list1;
    const head2 = list2;
    // Determining whether or not both lists are intersecting
    let curr1 = head1;
    let curr2 = head2;
    let length1 = 0;
    let length2 = 0;
    while (curr1) {
        length1++;
        if (curr1.next === null) {
            break;
        }
        curr1 = curr1.next;
    }
    while (curr2) {
        length2++;
        if (curr2.next === null) {
            break;
        }
        curr2 = curr2.next;
    }
    if (curr1.ref !== curr2.ref) {
        return null;
    }
    curr1 = head1;
    curr2 = head2;
    while (length1 !== length2) {
        length1--;
        curr1 = curr1.next;
    }
    while (curr1 && curr2) {
        if (curr1.ref === curr2.ref) {
            curr1.next = null;
            curr2.next = null;
            break;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return curr1.toString();
};
