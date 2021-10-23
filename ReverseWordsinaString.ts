export {};
function reverseWords(s: string): string {
  let word = '',
  isSwapped = false,
  newText = '';

  // jumb to each index in string
  for (let i = 0; i < s.length ; i++) {
    // if it char so save it.
    while (s[i] != ' ' && i < s.length) {
      isSwapped = true;
      word += s[i];
      i++;
    };

    // reverse word
    if (isSwapped) {
      newText = word + ' ' + newText;
      word = '';
      isSwapped = false;
    }
  }
  return newText.substring(0, newText.length - 1);
}