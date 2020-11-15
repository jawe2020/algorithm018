/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveDollarNote = 0;
  let tenDollarNote = 0;

  for (let bill of bills) {
    if (bill === 5) {
      fiveDollarNote++;
    } else if (bill === 10) {
      if (fiveDollarNote === 0) return false;
      fiveDollarNote--;
      tenDollarNote++;
    } else {
      if (fiveDollarNote > 0 && tenDollarNote > 0) {
        fiveDollarNote--;
        tenDollarNote--;
      } else if (fiveDollarNote >= 3) {
        fiveDollarNote -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
