function isBalanced(str) {

  let stack = []; // O(n) space
  let OPENINGS = "{[(";
  let CLOSINGS = "}])";
  let PAIR = { ")": "(", "}": "{", "]": "[" };

  for (const letter of str) {
    // O(n)
    if (isOpening(letter)) {
      // O(n)
      pushInStack(letter); // O(1)
    } else if (isClosing(letter)) {
      // O(n)
      if (isOpeningPairFound(letter)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length < 1;

  function isOpening(letter) {
    return OPENINGS.indexOf(letter) > -1;
  }

  function pushInStack(letter) {
    stack.push(letter);
  }

  function isClosing(letter) {
    return CLOSINGS.indexOf(letter) > -1;
  }

  function isOpeningPairFound(closing) {
    if (stack.length < 1) return false;
    const opening = PAIR[closing];
    return opening === stack[stack.length - 1];
  }
}




/* algo:
  scan from left to right 
      if opening symbol push into a stack
      if closing symbol & top of the stack opening of same type pop
      should end with an empty list
      O(n) time | O(n) space
      */
