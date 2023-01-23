import { mouse, left, right, up, down, Point, straightTo } from "@nut-tree/nut-js";

// (async () => {
//     await mouse.move(left(500));
//     await mouse.move(up(500));
//     await mouse.move(right(500));
//     await mouse.move(down(500))
// })();

(async () => {
    const target = new Point(700, 300);
    
    await mouse.move(straightTo(target));
})();