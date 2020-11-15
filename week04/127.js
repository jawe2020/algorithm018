/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, level] = queue.shift();
    if (word === endWord) return level;
    for (let option of wordSet) {
      if (isConvertible(word, option)) {
        queue.push([option, level + 1]);
        wordSet.delete(option);
      }
    }
  }
  return 0;
};

function isConvertible(word, option) {
  if (word.length !== option.length) return false;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== option[i]) {
      count++;
    }
    if (count > 1) return false;
  }
  return count === 1;
}
// @lc code=end
