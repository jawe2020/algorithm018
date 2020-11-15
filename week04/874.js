/*
 * @lc app=leetcode id=874 lang=javascript
 *
 * [874] Walking Robot Simulation
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let x = 0,
    y = 0,
    maximum = 0,
    dir = ['U', 'R', 'D', 'L'];

  const oSet = new Set();
  obstacles.forEach((o) => {
    oSet.add(`${o[0]},${o[1]}`);
  });

  commands.forEach((c) => {
    switch (c) {
      case -2:
        dir.unshift(dir.pop()); // turn right
        break;
      case -1:
        dir.push(dir.shift()); // turn left
        break;
      default:
        for (let i = 0; i < c; i++) {
          let nextX = x;
          let nextY = y;

          switch (dir[0]) {
            case 'U':
              nextY++;
              break;
            case 'D':
              nextY--;
              break;
            case 'R':
              nextX++;
              break;
            case 'L':
              nextX--;
              break;
          }
          if (oSet.has(`${nextX},${nextY}`)) break;
          x = nextX;
          y = nextY;
        }
        maximum = Math.max(maximum, x ** 2 + y ** 2);
    }
  });
  return maximum;
};
// @lc code=end
