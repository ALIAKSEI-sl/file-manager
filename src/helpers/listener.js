import { finishingWork } from './greeting.js';

export const eventListener = async (data) => {
  const [command, path] = data.toString().trim().split(' ');

  switch (command) {
    case 'up': {
      if (path) {
        console.log('Invalid input');
      } else {
        console.log('command up');
      }
    }
      break
    case 'cd':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'ls':
      if (path) {
        console.log('Invalid input');
      } else {
        //function
      }
      break
    //********************************
    case 'cat':
      if (path) {
        //function
      } else {
        console.log('Invalid input');
      }
      break
    case 'add':
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
        finishingWork();
      }
      break

    default:
      console.log('Invalid input');
      break
  }
}