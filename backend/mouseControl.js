import { down, up, right, left, mouse } from "@nut-tree/nut-js";

export async function mouseControl(command) {
    command = command.replace('mouse_', '').split(' ');

    switch (command[0]) {
        case 'up': 
        mouse.move(up(Number(command[1])));
        break;
        case 'down': 
        mouse.move(down(Number(command[1])));
        break;
        case 'left': 
        mouse.move(left(Number(command[1])));
        break;
        case 'right': 
        mouse.move(right(Number(command[1])));
        break;
    }
}