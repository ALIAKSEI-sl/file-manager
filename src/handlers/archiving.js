import { resolve, parse } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const compress = async (path, newPath) => {
  if (path && newPath) {
    try {
      const srcFile = resolve(path);
      const { base } = parse(srcFile);
      const srcFileZip = resolve(newPath, `${base}.br`);
      const readableStream = createReadStream(srcFile);
      const writeableStream = createWriteStream(srcFileZip);
      const brotliCompress = createBrotliCompress();
      await pipeline(readableStream, brotliCompress, writeableStream);
      getWorkingDirectory();
    } catch (error) {
      console.log(error);
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
      const { name } = parse(srcFile);
      const srcFileZip = resolve(newPath, name);
      const readableStream = createReadStream(srcFile);
      const writeableStream = createWriteStream(srcFileZip);
      const brotliDecompress = createBrotliDecompress();
      await pipeline(readableStream, brotliDecompress, writeableStream);
      getWorkingDirectory();
    } catch {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
}