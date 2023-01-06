import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const copy = async (path, newPath) => {
  if (path && newPath) {
    const srcFiles = resolve(path);
    const { base } = parse(srcFiles);
    const srcFilesCopy = resolve(newPath, base);
    try {
      const readStream = createReadStream(srcFiles);
      const writeStream = createWriteStream(srcFilesCopy);
      await pipeline(readStream, writeStream);
      getWorkingDirectory();
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
};