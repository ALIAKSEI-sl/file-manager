import { open } from 'fs/promises';
import { resolve } from 'path';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const create = async (path) => {
  let file;
  try {
    if (path) {
      file = await open(resolve(process.cwd(), path), 'w');
      getWorkingDirectory();
    } else {
      console.log('Invalid input');
    }
  } catch (error) {
    console.log('Operation failed');
  } finally {
    file?.close();
  }
};