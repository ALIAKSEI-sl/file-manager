import { endOfWork } from './console-output.js';
import { up, cd } from '../handlers/navigation.js';
import { list } from '../handlers/list.js';
import { read } from '../handlers/read.js';
import { create } from '../handlers/create.js';
import { os } from '../handlers/os.js';
import { rename } from '../handlers/rename.js';
import { copy } from '../handlers/copy.js';
import { move } from '../handlers/move.js';

export const eventListener = async (data) => {
  const [command, path, newPath] = data.toString().trim().split(' ');

  switch (command) {
    case 'up': up(path)
      break
    case 'cd': cd(path)
      break
    case 'ls': list(path)
      break
    //********************************
    case 'cat': read(path)
      break
    case 'add': await create(path)
      break
    case 'rn': await rename(path, newPath)
      break
    case 'cp': copy(path, newPath)
      break
    case 'mv': await move(path, newPath)
      break
    case 'rm':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    //*******************************
    case 'os': os(path)
      break
    //*******************************
    case 'hash':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    //********************************
    case 'compress':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'decompress':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    //*******************************
    case '.exit':
      if (path) {
        console.log('Invalid input');
      } else {
        endOfWork();
      }
      break

    default:
      console.log('Invalid input');
      break
  }
}