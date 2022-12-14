import { endOfWork } from './console-output.js';
import { up, cd } from '../handlers/navigation.js';
import { list } from '../handlers/list.js';
import { read } from '../handlers/read.js';

export const eventListener = async (data) => {
  const [command, path] = data.toString().trim().split(' ');

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
    case 'add': create()
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'rn':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'cp':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'mv':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'rm':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    //*******************************
    case 'os':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
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