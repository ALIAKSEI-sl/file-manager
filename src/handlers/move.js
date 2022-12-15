import { resolve } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const move = async (path, newPath) => {
  const srcFiles = resolve(path);
  const srcFilesCopy = resolve(newPath);

  if (path && newPath) {
    try {
      const readStream = createReadStream(srcFiles);
      const writeStream = createWriteStream(srcFilesCopy);
      readStream.pipe(writeStream);
      await rm(srcFiles);
      getWorkingDirectory();
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
};