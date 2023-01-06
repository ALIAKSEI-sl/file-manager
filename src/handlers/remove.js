import { rm } from 'fs/promises';
import { resolve } from 'path';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const remove = async (path) => {
  if (path) {
    try {
      await rm(resolve(path));
      getWorkingDirectory();
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
};