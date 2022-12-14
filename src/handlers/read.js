import { createReadStream } from 'fs';
import { resolve } from 'path';

export const read = async (path) => {
  try {
  if (path) {
    const readStream = createReadStream(resolve(path), { encoding: 'utf8' });
    readStream.pipe(process.stdout);
  } else {
    console.log('Invalid input');
  }
  } catch(error) {
    console.log('Operation failed');
  }
}

