import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export async function drawRectangle(distance) {
    await mouse.drag(up(Number(distance / 2)))
   await mouse.drag(left(Number(distance)))
   await mouse.drag(down(Number(distance / 2)))
   await mouse.drag(right(Number(distance)))
}