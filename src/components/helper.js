export function canDrop(toX, toY, knightPosition) {
  const [x, y] = knightPosition;
  console.log("🚀 ~ file: helper.js:3 ~ canDrop ~ y:", y);
  console.log("🚀 ~ file: helper.js:3 ~ canDrop ~ x:", x);
  const dx = toX - x;
  console.log("🚀 ~ file: helper.js:6 ~ canDrop ~ dx:", dx);
  console.log("🚀 ~ file: helper.js:6 ~ canDrop ~ toX:", toX);
  const dy = toY - y;
  console.log("🚀 ~ file: helper.js:9 ~ canDrop ~ dy:", dy);
  console.log("🚀 ~ file: helper.js:8 ~ canDrop ~ toY:", toY);

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
