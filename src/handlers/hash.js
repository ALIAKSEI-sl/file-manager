import { resolve } from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const hash = async (path) => {
  if (path) {
    try {
      const content = await readFile(resolve(path));
      const hash = createHash('sha256').update(content).digest('hex');
      console.log(hash);
      getWorkingDirectory();
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
}