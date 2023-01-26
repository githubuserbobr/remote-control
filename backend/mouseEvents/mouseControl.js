import { down, up, right, left, mouse } from "@nut-tree/nut-js";

export async function mouseControl(data) {
   const [command, distance] = data.replace('mouse_', '').split(' ');

    switch (command) {
        case 'up': 
        mouse.move(up(Number(distance)));
        break;
        case 'down': 
        mouse.move(down(Number(distance)));
        break;
        case 'left': 
        mouse.move(left(Number(distance)));
        break;
        case 'right': 
        mouse.move(right(Number(distance)));
        break;
    }
}