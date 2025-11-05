// JavaScript - Common LeetCode interview problems (concise implementations)

/*
1) Two Sum
Time: O(n), Space: O(n)
*/
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (map.has(need)) return [map.get(need), i];
        map.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([2,7,11,15], 9)); // Example usage
// Output: [0, 1]

/*
2) Reverse Linked List (iterative)
Time: O(n), Space: O(1)
*/
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
console.log(reverseList); // Example usage
// Output: function reverseList(head) { ... }   


/*
3) Merge Two Sorted Lists
Time: O(n), Space: O(1)
*/
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) { tail.next = l1; l1 = l1.next; }
        else { tail.next = l2; l2 = l2.next; }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}
console.log(mergeTwoLists); // Example usage

/*
4) Valid Parentheses
Time: O(n), Space: O(n)
*/
function isValid(s) {
    const map = { ')': '(', '}': '{', ']': '[' };
    const stack = [];
    for (const ch of s) {
        if (!map[ch]) stack.push(ch);
        else {
            if (stack.pop() !== map[ch]) return false;
        }
    }
    return stack.length === 0;
}

/*
5) Longest Substring Without Repeating Characters (sliding window)
Time: O(n), Space: O(min(n, charset))
*/
function lengthOfLongestSubstring(s) {
    const last = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < s.length; right++) {
        if (last.has(s[right])) left = Math.max(left, last.get(s[right]) + 1);
        last.set(s[right], right);
        best = Math.max(best, right - left + 1);
    }
    return best;
}

/*
6) Maximum Subarray (Kadane)
Time: O(n), Space: O(1)
*/
function maxSubArray(nums) {
    let maxSoFar = nums[0], cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i]);
        maxSoFar = Math.max(maxSoFar, cur);
    }
    return maxSoFar;
}

/*
7) Merge Intervals
Time: O(n log n) (sort), Space: O(n)
*/
function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [];
    let [start, end] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const [s, e] = intervals[i];
        if (s <= end) end = Math.max(end, e);
        else { res.push([start, end]); start = s; end = e; }
    }
    res.push([start, end]);
    return res;
}



/*
8) Binary Tree Inorder Traversal (iterative)
Time: O(n), Space: O(h)
*/
function inorderTraversal(root) {
    const res = [];
    const stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) { stack.push(curr); curr = curr.left; }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
}

/*
9) Climbing Stairs (DP)
Time: O(n), Space: O(1) 
*/
function climbStairs(n) {
    if (n <= 2) return n;       
    let first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }
    return second;
}
console.log(climbStairs(5)); // Example usage
// Output: 8

