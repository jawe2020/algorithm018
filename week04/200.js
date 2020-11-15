/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        num++;
      }
    }
  }
  return num;
};

function dfs(grid, r, c) {
  if (!isInArea(grid, r, c) || grid[r][c] === '0') {
    return;
  }
  grid[r][c] = '0';
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

function isInArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}

// @lc code=end
