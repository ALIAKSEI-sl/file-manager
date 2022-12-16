import { createReadStream } from 'fs';
import { resolve } from 'path';
import { getWorkingDirectory } from '../helpers/console-output.js';
import { output } from '../helpers/writable.js';
import { pipeline } from 'stream/promises';

export const read = async (path) => {
  try {
    if (path) {
      const readStream = createReadStream(resolve(path), { encoding: 'utf8' });
      await pipeline(readStream, output()); // pipeline закрывает process.stdout и им не возможно больше пользоваться, поэтому используется функция output.
      getWorkingDirectory();
    } else {
      console.log('Invalid input');
    }
  } catch (error) {
    console.log('Operation failed');
  }
}