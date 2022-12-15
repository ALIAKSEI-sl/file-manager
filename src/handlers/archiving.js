import { resolve } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const compress = async (path, newPath) => {
  if (path && newPath) {
    try {
      const srcFile = resolve(path);
      const srcFileZip = resolve(newPath);
      const readableStream = createReadStream(srcFile);
      const writeableStream = createWriteStream(srcFileZip);
      const brotliCompress = createBrotliCompress();
      readableStream.pipe(brotliCompress).pipe(writeableStream);
      getWorkingDirectory();
    } catch {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
};

export const decompress = async (path, newPath) => {
  if (path && newPath) {
    try {
      const srcFile = resolve(path);
      const srcFileZip = resolve(newPath);
      const readableStream = createReadStream(srcFile);
      const writeableStream = createWriteStream(srcFileZip);
      const brotliDecompress = createBrotliDecompress();
      readableStream.pipe(brotliDecompress).pipe(writeableStream);
      getWorkingDirectory();
    } catch {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
}