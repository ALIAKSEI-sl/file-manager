import { dirname, join, resolve } from 'node:path';
import { rename as createNewName } from 'node:fs/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const rename = async (path, newPath) => {
  const srcWrongFile = resolve(path);
  const srcProperFile = join(dirname(srcWrongFile), newPath);
  if (path && newPath) {
    try {
      await createNewName(srcWrongFile, srcProperFile);
      getWorkingDirectory();
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
}