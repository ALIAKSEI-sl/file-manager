import { chdir } from 'process';
import { resolve } from 'path';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const up = (path) => {
  try {
    if (path) {
      console.log('Invalid input');
    } else {
      chdir('..');
      getWorkingDirectory();
    }
  } catch {
    console.log('Operation failed');
  }
};

export const cd = (path) => {
  try {
    if (path) {
      chdir(resolve(path));
      getWorkingDirectory();
    } else {
      console.log('Invalid input');
    }
  } catch {
    console.log('Operation failed');
  }
}