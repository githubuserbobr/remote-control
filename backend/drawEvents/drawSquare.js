import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export async function drawSquare(distance) {
   await mouse.drag(up(Number(distance)))
   await mouse.drag(left(Number(distance)))
   await mouse.drag(down(Number(distance)))
   await mouse.drag(right(Number(distance)))
}